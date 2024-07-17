import { StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { ThemedView } from "./ThemedView";
import { ThemedText } from "./ThemedText";
import { fontsDefaults } from "../themes";
import { useTheme } from "../contexts/ThemeContext";
import { ButtonIcon } from "./ButtonIcon";

type Props = {
  name: string;
  onRemove: () => void;
};
export function PlayerCard({ name, onRemove }: Props) {
  const { theme } = useTheme();

  return (
    <ThemedView style={[styles.container, { backgroundColor: theme.CARD }]}>
      <MaterialIcons
        style={styles.icon}
        name="person"
        size={24}
        color={theme.ICON}
      />
      <ThemedText style={styles.name}>{name}</ThemedText>
      <ButtonIcon icon="close" type="red" />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    height: 56,
    marginBottom: 16,
    borderRadius: 6,
    alignItems: "center",
  },
  name: {
    flex: 1,
    fontSize: fontsDefaults.FONT_SIZE.MD,
    fontFamily: fontsDefaults.FONT_FAMILY.REGULAR,
  },
  icon: {
    marginLeft: 16,
    marginRight: 4,
  },
});
