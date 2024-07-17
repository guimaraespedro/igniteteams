import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import { ThemedText } from "./ThemedText";
import { fontsDefaults } from "../themes";
import { useTheme } from "../contexts/ThemeContext";

type Props = TouchableOpacityProps & {
  isActive?: boolean;
  title: string;
};

export function Filter({ isActive, title, ...rest }: Props) {
  const { theme } = useTheme();
  return (
    <TouchableOpacity
      style={[
        styles.container,
        [
          isActive
            ? {
                borderWidth: 1,
                borderColor: theme.SECONDARY,
              }
            : {},
        ],
      ]}
      {...rest}
    >
      <ThemedText style={[styles.title]}>{title}</ThemedText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 38,
    width: 70,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 6,
  },
  title: {
    textTransform: "uppercase",
    fontFamily: fontsDefaults.FONT_FAMILY.BOLD,
    fontSize: fontsDefaults.FONT_SIZE.SM,
  },
});
