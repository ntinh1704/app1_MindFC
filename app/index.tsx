import { useRouter } from "expo-router";
import { Button, View } from "react-native";

export default function Index() {
  const router = useRouter();
  return (
    <View>
      <Button
        title="Đăng nhập"
        onPress={() => router.push("/components/login")}
      />
      <Button title="Menu" onPress={() => router.push("/components/menu")} />
      <Button
        title="Scan Product"
        onPress={() => router.push("/components/scan_product")}
      />
      <Button
        title="List Product"
        onPress={() => router.push("/components/list_product")}
      />
      <Button
        title="Scan Staff"
        onPress={() => router.push("/components/scan_staff")}
      />
    </View>
  );
}

// import { Redirect } from "expo-router";

// export default function Index() {
//   return <Redirect href="/components/login" />;
// }
