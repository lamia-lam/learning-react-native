import { Text, View, Pressable } from "react-native";
import { router } from "expo-router";
import { styles } from "./styles";

export default function LandingPage() {
  return (
    <View style={styles.container}>
      <Text>My Little Task 📝</Text>

      <Text>One thing at a time ♡</Text>

      <Text>
        Keep your day organized,{"\n"}
        one little task at a time.
      </Text>

      <Pressable onPress={() => router.push("/todo")}>
        <Text>Get Started</Text>
      </Pressable>
    </View>
  );
}
