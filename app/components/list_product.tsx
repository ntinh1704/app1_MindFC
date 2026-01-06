import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import styles from "../styles/list_product";

const DATA = [
  {
    id: "1",
    name: "Thép tấm Mạ Kẽm SGCC (Z080)",
    unit: "kg",
    quantity: 24,
  },
  {
    id: "2",
    name: "Thép tấm Mạ Kẽm SGCC (Z080)",
    unit: "kg",
    quantity: 24,
  },
  {
    id: "3",
    name: "Thép tấm Mạ Kẽm SGCC (Z080)",
    unit: "kg",
    quantity: 24,
  },
  {
    id: "4",
    name: "Thép tấm Mạ Kẽm SGCC (Z080)",
    unit: "kg",
    quantity: 24,
  },
  {
    id: "5",
    name: "Thép tấm Mạ Kẽm SGCC (Z080)",
    unit: "kg",
    quantity: 24,
  },
  {
    id: "6",
    name: "Thép tấm Mạ Kẽm SGCC (Z080)",
    unit: "kg",
    quantity: 24,
  },
  {
    id: "7",
    name: "Thép tấm Mạ Kẽm SGCC (Z080)",
    unit: "kg",
    quantity: 24,
  },
  {
    id: "8",
    name: "Thép tấm Mạ Kẽm SGCC (Z080)",
    unit: "kg",
    quantity: 24,
  },
];

export default function ListProduct() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>PHIẾU XUẤT SẢN XUẤT</Text>

      <FlatList
        data={DATA}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.name}>{item.name}</Text>
            <Text>Đơn vị: {item.unit}</Text>
            <Text>Số lượng: {item.quantity}</Text>
          </View>
        )}
      />

      <View style={styles.footer}>
        <TouchableOpacity style={styles.back} onPress={() => router.back()}>
          <Text style={styles.btnText}>Quay lại</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.confirm} onPress={() => router.back()}>
          <Text style={styles.btnText}>Xác nhận</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
