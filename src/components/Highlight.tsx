import { StyleSheet } from "react-native";
import { ThemedView } from "./ThemedView";
import { ThemedText } from "./ThemedText";
import { fontsDefaults } from "../themes";

type Props = {
  title: string;
  subTitle?: string;
};

export function Highlight({ title, subTitle }: Props) {
  return (
    <ThemedView style={styles.container}>
      <ThemedText style={styles.title}>{title}</ThemedText>
      <ThemedText style={styles.subTitle}>{subTitle}</ThemedText>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 32,
  },
  title: {
    textAlign: "center",
    fontSize: fontsDefaults.FONT_SIZE.XL,
    fontFamily: fontsDefaults.FONT_FAMILY.BOLD,
  },
  subTitle: {
    textAlign: "center",
    fontSize: fontsDefaults.FONT_SIZE.MD,
    fontFamily: fontsDefaults.FONT_FAMILY.REGULAR,
  },
});
