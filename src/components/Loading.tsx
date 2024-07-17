import { ActivityIndicator, StyleSheet } from "react-native";
import { ThemedView } from "./ThemedView";

export function Loading() {
  return (
    <ThemedView style={styles.container}>
      <ActivityIndicator />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
