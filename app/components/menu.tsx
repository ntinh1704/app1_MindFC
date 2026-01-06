import React from "react";
import { View, TouchableOpacity, Image, Text } from "react-native";
import styles from "../styles/menu";

const MENU_ITEM = [
  {
    id: "add",
    title: "Nhập vật liệu",
    icon: require("../assets/images/add.png"),
    onPress: () => {},
  },
  {
    id: "checkin",
    title: "Check-in",
    icon: require("../assets/images/checkin.png"),
    onPress: () => {},
  },
  {
    id: "checkout",
    title: "Check-out",
    icon: require("../assets/images/checkout.png"),
    onPress: () => {},
  },
];
export default function Menu() {
  return (
    <View style={styles.container}>
      {MENU_ITEM.map((item) => (
        <TouchableOpacity
          key={item.id}
          style={styles.item}
          onPress={item.onPress}
        >
          <View style={styles.imageWrapper}>
            <Image style={styles.image} source={item.icon} />
          </View>
          <Text style={styles.text}>{item.title}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}
