import { View, Text, TextInput, Image, TouchableOpacity } from "react-native";
import styles from "../styles/login";

export default function Login() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome back</Text>
      <View style={styles.circle1} />
      <View style={styles.circle2} />
      <Image
        style={styles.image}
        source={require("../assets/images/power-plant.png")}
      />
      <View style={styles.body}>
        <TextInput style={styles.input} placeholder="Nhập Email" />
        <TextInput style={styles.input} placeholder="Nhập mật khẩu" />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
