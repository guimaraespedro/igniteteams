import { Text, type TextProps } from "react-native";
import { useTheme } from "../contexts/ThemeContext";

export function ThemedText({ style, ...rest }: TextProps) {
  const { theme } = useTheme();
  const color = theme.TEXT;

  return <Text style={[{ color }, style]} {...rest} />;
}
