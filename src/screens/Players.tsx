import { StyleSheet, FlatList } from "react-native";
import { useState } from "react";
import { ThemedView } from "../components/ThemedView";
import { Header } from "../components/Header";
import { Highlight } from "../components/Highlight";
import { Input } from "../components/Input";
import { ButtonIcon } from "../components/ButtonIcon";
import { useTheme } from "../contexts/ThemeContext";
import { Filter } from "../components/Filter";
import { ThemedText } from "../components/ThemedText";
import { PlayerCard } from "../components/PlayerCard";
import { Button } from "../components/Button";

export function Players() {
  const [team, setTeam] = useState("Team A");
  const [players, setPlayers] = useState(["Pedro"]);
  const { theme } = useTheme();

  return (
    <ThemedView style={styles.container}>
      <Header showBackButton />
      <Highlight title="Players" subTitle="Add players and create the teams" />
      <ThemedView style={[{ backgroundColor: theme.CARD }, styles.form]}>
        <Input placeholder="Player name" autoCorrect={false} />
        <ButtonIcon icon="add" type="green" />
      </ThemedView>
      <ThemedView style={styles.headerList}>
        <FlatList
          data={["Team A", "Team B", "Team C", "Team D", "Team E", "Team F"]}
          keyExtractor={(item) => item}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <Filter
              onPress={() => setTeam(item)}
              isActive={item === team}
              title={item}
            />
          )}
        />
        <ThemedText>{players.length}</ThemedText>
      </ThemedView>
      <FlatList
        data={players}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <PlayerCard onRemove={() => {}} name={item} />
        )}
        ListEmptyComponent={() => (
          <ThemedText style={{ textAlign: "center", marginTop: 24 }}>
            No players found in {team}. Add some!
          </ThemedText>
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 24 }}
      />
      <Button title="Remove Team" type="red" />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
  form: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 6,
    marginBottom: 16,
  },
  headerList: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 32,
    marginBottom: 12,
  },
});
