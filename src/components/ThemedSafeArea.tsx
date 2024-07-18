import {
  SafeAreaView,
  SafeAreaViewProps,
} from "react-native-safe-area-context";
import { useTheme } from "../contexts/ThemeContext";

export function ThemedSafeArea({ style, ...rest }: SafeAreaViewProps) {
  const { theme } = useTheme();
  const backgroundColor = theme.BACKGROUND;

  return <SafeAreaView style={[{ backgroundColor }, style]} {...rest} />;
}
