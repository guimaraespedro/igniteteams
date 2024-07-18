import { StyleSheet, FlatList, Switch } from "react-native";
import { useState, useCallback, useEffect } from "react";
import { useNavigation, useFocusEffect } from "@react-navigation/native";

import { Highlight } from "../components/Highlight";
import { Header } from "../components/Header";
import { GroupCard } from "../components/GroupCard";
import { ThemedText } from "../components/ThemedText";
import { Button } from "../components/Button";
import { ThemedSafeArea } from "../components/ThemedSafeArea";
import { getAllGroups } from "../storage/group/getAllGroups";
import { ThemedView } from "../components/ThemedView";
import { useTheme } from "../contexts/ThemeContext";
import { themes } from "../themes";

export function Groups() {
  const [groups, setGroups] = useState<string[]>([]);
  const { theme, toggleTheme } = useTheme();
  const [darkModeEnabled, setDarkModeEnabled] = useState(theme.type === "dark");

  const navigation = useNavigation();
  function handleNewGroup() {
    navigation.navigate("newGroup");
  }

  async function fetchGroups() {
    try {
      const existingGroups = await getAllGroups();
      setGroups(existingGroups);
    } catch (error) {
      console.log(error);
    }
  }

  function handleOpenGroup(group: string) {
    navigation.navigate("players", { group });
  }

  useEffect(() => {
    setDarkModeEnabled(theme.type === "dark");
  }, [theme]);

  useFocusEffect(
    useCallback(() => {
      fetchGroups();
    }, [])
  );

  return (
    <ThemedSafeArea style={styles.container}>
      <Header></Header>
      <ThemedView>
        <ThemedText>Dark Mode</ThemedText>
        <Switch value={darkModeEnabled} onValueChange={toggleTheme} />
      </ThemedView>
      <Highlight title="Teams" subTitle="Play with your team" />

      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <GroupCard
            onPress={() => handleOpenGroup(item)}
            key={item}
            title={item}
          />
        )}
        contentContainerStyle={groups.length === 0 && { flex: 1 }}
        ListEmptyComponent={() => (
          <ThemedText style={{ textAlign: "center", marginTop: 24 }}>
            Start creating a new team!
          </ThemedText>
        )}
      />
      <Button onPress={handleNewGroup} title="Create new team"></Button>
    </ThemedSafeArea>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
});
