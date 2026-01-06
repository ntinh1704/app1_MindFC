import { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Animated,
  Easing,
  Image,
  Alert,
} from "react-native";
import { CameraView, useCameraPermissions } from "expo-camera";
import styles from "../styles/scan_staff";

const EMPLOYEE_DB: any = {
  MNV123: {
    name: "Nguyễn Văn ABC",
    id: "MNV123",
    avatar: "https://i.pravatar.cc/150?img=12",
  },
};

export default function ScanBarcode() {
  const [permission, requestPermission] = useCameraPermissions();
  const [scanned, setScanned] = useState(false);
  const [employee, setEmployee] = useState<any>(null);

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

  const handleBarCodeScanned = ({ data }: any) => {
    if (scanned) return;

    const code = data.trim();

    const emp = EMPLOYEE_DB[code];
    if (!emp) {
      Alert.alert("Không tìm thấy nhân viên");
      return;
    }

    setEmployee(emp);
    setScanned(true);
  };

  if (!permission?.granted) {
    return <Text>Không có quyền camera</Text>;
  }

  const translateY = scanLineAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 260],
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>QUÉT MÃ BARCODE{"\n"}THÔNG TIN NHÂN VIÊN</Text>

      <View style={styles.scanArea}>
        <CameraView
          style={StyleSheet.absoluteFillObject}
          barcodeScannerSettings={{
            barcodeTypes: ["code128", "ean13", "ean8", "qr"],
          }}
          onBarcodeScanned={handleBarCodeScanned}
        />

        <View style={styles.overlay}>
          <View style={[styles.corner, styles.topLeft]} />
          <View style={[styles.corner, styles.topRight]} />
          <View style={[styles.corner, styles.bottomLeft]} />
          <View style={[styles.corner, styles.bottomRight]} />

          {!scanned && (
            <Animated.View
              style={[styles.scanLine, { transform: [{ translateY }] }]}
            />
          )}
        </View>
      </View>

      <TouchableOpacity
        disabled={!!employee}
        style={[styles.scanBtn, employee && styles.scanBtnDisabled]}
        onPress={() => {
          setScanned(false);
        }}
      >
        <Text style={styles.scanText}>Scan</Text>
      </TouchableOpacity>

      {employee && (
        <>
          <View style={styles.infoCard}>
            <Image source={{ uri: employee.avatar }} style={styles.avatar} />
            <View style={styles.infoElm}>
              <Text style={styles.infoTitle}>THÔNG TIN NHÂN VIÊN</Text>
              <View style={styles.infonameId}>
                <Text>Họ và tên: {employee.name}</Text>
              <Text>ID: {employee.id}</Text>
              </View>
            </View>
          </View>

          <View style={styles.footer}>
            <TouchableOpacity
              style={styles.backBtn}
              onPress={() => {
                setEmployee(null);
                setScanned(false);
              }}
            >
              <Text style={styles.backText}>Quay lại</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.confirmBtn}>
              <Text style={styles.confirmText}>Xác nhận</Text>
            </TouchableOpacity>
          </View>
        </>
      )}
    </View>
  );
}
