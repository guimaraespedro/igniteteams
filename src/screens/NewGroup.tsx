import { ThemedView } from "../components/ThemedView";
import { StyleSheet } from "react-native";
import { Header } from "../components/Header";
import { FontAwesome5 } from "@expo/vector-icons";
import { useTheme } from "../contexts/ThemeContext";
import { Highlight } from "../components/Highlight";
import { Button } from "../components/Button";
import { Input } from "../components/Input";

export function NewGroup() {
  const { theme } = useTheme();

  return (
    <ThemedView style={styles.container}>
      <Header showBackButton></Header>
      <ThemedView style={styles.content}>
        <FontAwesome5 name="users" size={32} color={theme.SECONDARY} />

        <Highlight
          title="New Group"
          subTitle="Create new group to add new people"
        />
        <Input placeholder="New group name..."></Input>
        <Button title="Create"></Button>
      </ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
  content: {
    flex: 1,
    alignItems: "center",
  },
});
