import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import { ThemedText } from "./ThemedText";
import { fontsDefaults } from "../themes";
import { FontAwesome5 } from "@expo/vector-icons";
import { useTheme } from "../contexts/ThemeContext";

type Props = TouchableOpacityProps & {
  title: string;
};

// Create the theme context so we can use dark theme and light theme
export function GroupCard({ title, style, ...rest }: Props) {
  const { theme } = useTheme();
  return (
    <TouchableOpacity
      {...rest}
      style={[{ backgroundColor: theme.CARD }, styles.groupCard, style]}
    >
      <FontAwesome5 name="users" size={24} color={theme.ICON} />
      <ThemedText style={styles.title}>{title}</ThemedText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  groupCard: {
    width: "100%",
    height: 90,
    borderRadius: 6,
    flexDirection: "row",
    alignItems: "center",
    padding: 24,
    marginBottom: 12,
    gap: 16,
  },
  title: {
    fontSize: fontsDefaults.FONT_SIZE.MD,
    fontFamily: fontsDefaults.FONT_FAMILY.REGULAR,
  },
  subtitle: {
    marginTop: 8,
    fontSize: 14,
  },
});
