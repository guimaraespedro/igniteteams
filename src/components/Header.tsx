import { StyleSheet, Image, TouchableOpacity } from "react-native";
import { ThemedView } from "./ThemedView";
import logoImg from "../assets/Logo.png";

import { AntDesign } from "@expo/vector-icons";

export function Header({ showBackButton = false }) {
  return (
    <ThemedView style={styles.container}>
      {showBackButton && (
        <TouchableOpacity style={styles.backButton}>
          <AntDesign name="caretleft" size={24} color="white" />
        </TouchableOpacity>
      )}
      <Image style={styles.logo} source={logoImg}></Image>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 45,
    height: 56,
  },
  backButton: {
    flex: 1,
  },
});
