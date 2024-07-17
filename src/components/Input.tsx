import { TextInput, StyleSheet, TextInputProps } from "react-native";
import { useTheme } from "../contexts/ThemeContext";
import { fontsDefaults } from "../themes";

export function Input(props: TextInputProps) {
  const { theme } = useTheme();

  const color = theme.TEXT;
  const backgroundColor = theme.CARD;

  return (
    <TextInput
      style={[styles.container, { color, backgroundColor }]}
      {...props}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    minHeight: 56,
    maxHeight: 56,
    width: "100%",
    padding: 16,
    borderRadius: 6,
    fontFamily: fontsDefaults.FONT_FAMILY.REGULAR,
    fontSize: fontsDefaults.FONT_SIZE.MD,
  },
});
