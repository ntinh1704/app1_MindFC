import { useCallback, useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Animated,
  Easing,
} from "react-native";
import { CameraView, useCameraPermissions } from "expo-camera";
import { useFocusEffect, useRouter } from "expo-router";
import styles from "../styles/scan_product";

export default function ScanBarcode() {
  const router = useRouter();
  const [permission, requestPermission] = useCameraPermissions();
  const [scanned, setScanned] = useState(false);
  const scanLineAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (!permission) requestPermission();
  }, [permission]);

  useEffect(() => {
    if (!scanned) {
      Animated.loop(
        Animated.sequence([
          Animated.timing(scanLineAnim, {
            toValue: 1,
            duration: 1500,
            easing: Easing.linear,
            useNativeDriver: true,
          }),
          Animated.timing(scanLineAnim, {
            toValue: 0,
            duration: 1500,
            easing: Easing.linear,
            useNativeDriver: true,
          }),
        ])
      ).start();
    } else {
      scanLineAnim.stopAnimation();
    }
  }, [scanned]);

  useFocusEffect(
    useCallback(() => {
      setScanned(false);
      scanLineAnim.setValue(0);

      return () => {
      };
    }, [])
  );

  const handleBarCodeScanned = ({ data }: any) => {
    if (scanned) return;
    setScanned(true);

    router.push({
      pathname: "./list_product",
      params: { code: data },
    });
  };

  if (!permission?.granted) {
    return <Text>Không có quyền camera</Text>;
  }

  const translateY = scanLineAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [0, -385],
  });
  return (
    <View style={styles.container}>
      <Text style={styles.title}>QUÉT MÃ BARCODE{"\n"}PHIẾU XUẤT SẢN XUẤT</Text>

      <View style={styles.scanArea}>
        <CameraView
          style={StyleSheet.absoluteFillObject}
          barcodeScannerSettings={{
            barcodeTypes: ["code128", "ean13", "ean8", "qr"],
          }}
          onBarcodeScanned={scanned ? undefined : handleBarCodeScanned}
        />

        <View style={styles.overlay}>
          <View style={[styles.corner, styles.topLeft]} />
          <View style={[styles.corner, styles.topRight]} />
          <View style={[styles.corner, styles.bottomLeft]} />
          <View style={[styles.corner, styles.bottomRight]} />

          {!scanned && (
            <Animated.View
              style={[
                styles.scanLine,
                {
                  transform: [{ translateY }],
                },
              ]}
            />
          )}
        </View>
      </View>

      <TouchableOpacity
        disabled={!scanned}
        style={[styles.button, !scanned && styles.buttonDisabled]}
        onPress={() => {
          setScanned(false);
        }}
      >
        <Text style={styles.buttonText}>Scan</Text>
      </TouchableOpacity>
    </View>
  );
}

