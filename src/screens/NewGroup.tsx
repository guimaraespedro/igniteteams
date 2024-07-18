import { ThemedView } from "../components/ThemedView";
import { Alert, StyleSheet } from "react-native";
import { Header } from "../components/Header";
import { FontAwesome5 } from "@expo/vector-icons";
import { useTheme } from "../contexts/ThemeContext";
import { Highlight } from "../components/Highlight";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { ThemedSafeArea } from "../components/ThemedSafeArea";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { createGroup } from "../storage/group/createGroup";
import { AppError } from "../utils/AppError";

export function NewGroup() {
  const [groupName, setGroupName] = useState<string>("");
  const { theme } = useTheme();
  const navigation = useNavigation();

  function handleChangeText(text: string) {
    setGroupName(text);
  }

  async function handleNewGroup() {
    try {
      if (groupName.trim().length === 0) {
        Alert.alert("Error", "Group name cannot be empty.");
        return;
      }

      await createGroup(groupName);
      navigation.navigate("players", { group: groupName });
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert("Error", error.message);
      } else {
        Alert.alert(
          "Error",
          "Error creating group. Please try again later. Check your internet connection and try again."
        );
      }
    }
  }

  return (
    <ThemedSafeArea style={styles.container}>
      <Header showBackButton></Header>
      <ThemedView style={styles.content}>
        <FontAwesome5 name="users" size={32} color={theme.SECONDARY} />

        <Highlight
          title="New Group"
          subTitle="Create new group to add new people"
        />
        <Input
          value={groupName}
          onChangeText={(text) => handleChangeText(text)}
          placeholder="New group name..."
        ></Input>
        <Button onPress={handleNewGroup} title="Create"></Button>
      </ThemedView>
    </ThemedSafeArea>
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
    gap: 16,
  },
});
