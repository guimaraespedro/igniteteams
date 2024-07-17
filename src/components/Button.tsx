import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import { ThemedText } from "./ThemedText";
import { useTheme } from "../contexts/ThemeContext";
import { fontsDefaults } from "../themes";

type Props = TouchableOpacityProps & {
  type?: "green" | "red";
  title: string;
};

export function Button({ type = "green", style, title, ...rest }: Props) {
  const { theme } = useTheme();

  const color = type === "green" ? theme.SECONDARY : theme.ERROR;

  return (
    <TouchableOpacity
      style={[{ backgroundColor: color }, styles.container, style]}
      {...rest}
    >
      <ThemedText style={styles.text}>{title}</ThemedText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    minHeight: 56,
    maxHeight: 56,
    width: "100%",
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: fontsDefaults.FONT_SIZE.MD,
    color: "white",
    fontFamily: fontsDefaults.FONT_FAMILY.BOLD,
  },
});
