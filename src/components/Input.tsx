import { TextInput, StyleSheet, TextInputProps } from "react-native";
import { useTheme } from "../contexts/ThemeContext";
import { fontsDefaults } from "../themes";

type Props = TextInputProps & {
  inputRef?: React.RefObject<TextInput>;
};

export function Input({ inputRef, ...rest }: Props) {
  const { theme } = useTheme();

  const color = theme.TEXT;
  const backgroundColor = theme.CARD;

  return (
    <TextInput
      ref={inputRef}
      style={[styles.container, { color, backgroundColor }]}
      {...rest}
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
