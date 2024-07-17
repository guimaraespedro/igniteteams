import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import { useTheme } from "../contexts/ThemeContext";
import { MaterialIcons } from "@expo/vector-icons";

type Props = TouchableOpacityProps & {
  icon: keyof typeof MaterialIcons.glyphMap;
  type?: "green" | "red";
};

export function ButtonIcon({ icon, style, type, ...rest }: Props) {
  const { theme } = useTheme();
  const color = type === "green" ? theme.SECONDARY : theme.ERROR;

  return (
    <TouchableOpacity style={[styles.container]} {...rest}>
      <MaterialIcons
        style={[styles.icon]}
        name={icon}
        size={24}
        color={color}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 56,
    height: 56,
    marginLeft: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {},
});
