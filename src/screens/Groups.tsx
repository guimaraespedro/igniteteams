import { StyleSheet } from "react-native";
import { ThemedView } from "../components/ThemedView";
import { Highlight } from "../components/Highlight";
import { Header } from "../components/Header";
import { GroupCard } from "../components/GroupCard";
import { ThemedText } from "../components/ThemedText";
import { useState } from "react";
import { FlatList } from "react-native";
import { Button } from "../components/Button";

export function Groups() {
  const [groups, setGroups] = useState<string[]>([]);

  return (
    <ThemedView style={styles.container}>
      <Header></Header>
      <Highlight title="Teams" subTitle="Play with your team" />

      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <GroupCard key={item} title={item} />}
        contentContainerStyle={groups.length === 0 && { flex: 1 }}
        ListEmptyComponent={() => (
          <ThemedText style={{ textAlign: "center", marginTop: 24 }}>
            Start creating a new team!
          </ThemedText>
        )}
      />
      <Button title="Create new team"></Button>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
});
