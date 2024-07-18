import { StyleSheet, Image, TouchableOpacity } from "react-native";
import { ThemedView } from "./ThemedView";
import logoImg from "../assets/Logo.png";

import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "../contexts/ThemeContext";

type Props = {
  showBackButton?: boolean;
};

export function Header({ showBackButton = false }: Props) {
  const navigation = useNavigation();
  const { theme } = useTheme();
  function handleGoBack() {
    navigation.goBack();
  }

  return (
    <ThemedView style={styles.container}>
      {showBackButton && (
        <TouchableOpacity onPress={handleGoBack} style={styles.backButton}>
          <AntDesign name="caretleft" size={24} color={theme.ICON} />
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
