import { useState } from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";

export default function HomeScreen() {
  const [celebration, setCelebration] = useState(false);
  return (
    <View style={styles.container}>
      {celebration ? (
        <>
          <Text style={styles.emoji}>🎉🥳🎊</Text>
          <Text style={styles.title}>Hello world!</Text>
          <Text style={styles.message}>Let's celebrate! ✨</Text>
          <Pressable
            style={styles.button}
            onPress={() => setCelebration(false)}
          >
            <Text style={styles.buttonText}>Go Back</Text>
          </Pressable>
        </>
      ) : (
        <>
          <Text style={styles.title}>Welcome!</Text>
          <Text style={styles.message}>Ready to celebrate?</Text>
          <Pressable style={styles.button} onPress={() => setCelebration(true)}>
            <Text style={styles.buttonText}>Click Here</Text>
          </Pressable>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F0F4FF",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#095579",
    marginBottom: 15,
  },
  message: {
    fontSize: 18,
    color: "#555",
    marginBottom: 25,
  },
  emoji: {
    fontSize: 50,
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#84244e",
    paddingVertical: 15,
    paddingHorizontal: 35,
    borderRadius: 12,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});
