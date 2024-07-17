import { View, type ViewProps } from "react-native";
import { useTheme } from "../contexts/ThemeContext";

export function ThemedView({ style, ...rest }: ViewProps) {
  const { theme } = useTheme();
  const backgroundColor = theme.BACKGROUND;

  return <View style={[{ backgroundColor }, style]} {...rest} />;
}
