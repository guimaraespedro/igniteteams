import { StyleSheet, FlatList, Alert, TextInput } from "react-native";
import { useEffect, useRef, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";

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
import { ThemedSafeArea } from "../components/ThemedSafeArea";
import { addPlayerByGroup } from "../storage/player/addPlayerByGroup";
import { AppError } from "../utils/AppError";
import { getPlayersByTeam } from "../storage/player/getPlayersByTeam";
import { PlayerStorageDto } from "../storage/player/PlayerStorageDto";
import { removePlayerFromGroup } from "../storage/player/removePlayerFromGroup";
import { removeGroup } from "../storage/group/removeGroup";

type RouteParams = {
  group: string;
};

export function Players() {
  const [team, setSelectedTeam] = useState("Team A");
  const [players, setPlayers] = useState<PlayerStorageDto[]>([]);
  const [newPlayer, setNewPlayer] = useState("");
  const { theme } = useTheme();
  const navigation = useNavigation();

  const route = useRoute();
  const { group } = route.params as RouteParams;

  const newPlayerInputRef = useRef<TextInput>(null);

  useEffect(() => {
    fetchPlayersByTeam();
  }, [group, team]);

  function handleChangeInput(text: string) {
    setNewPlayer(text);
  }

  async function handleAddPlayer() {
    if (newPlayer.trim().length === 0) {
      return Alert.alert("Error", "Player name cannot be empty.");
    }

    try {
      await addPlayerByGroup({ team, name: newPlayer }, group);
      await fetchPlayersByTeam();
      newPlayerInputRef.current?.blur();
      setNewPlayer("");
    } catch (error) {
      if (error instanceof AppError) {
        return Alert.alert("New player", error.message);
      } else {
        Alert.alert("New player", "An error occurred while adding the player.");
      }
    }
  }

  async function handleDeletePlayer(playerName: string) {
    try {
      await removePlayerFromGroup(playerName, group);
      fetchPlayersByTeam();
    } catch (error) {
      Alert.alert(
        "Delete player",
        "There was an error while deleting the player."
      );
    }
  }

  async function fetchPlayersByTeam() {
    try {
      const playersByTeam = await getPlayersByTeam(team, group);
      setPlayers(playersByTeam);
    } catch (error) {
      console.log(error);
    }
  }

  async function handleRemoveGroup() {
    try {
      await removeGroup(group);
      navigation.navigate("groups");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <ThemedSafeArea style={styles.container}>
      <Header showBackButton />
      <Highlight title={group} subTitle="Add players and create the teams" />
      <ThemedView style={[{ backgroundColor: theme.CARD }, styles.form]}>
        <Input
          inputRef={newPlayerInputRef}
          value={newPlayer}
          onChangeText={handleChangeInput}
          placeholder="Player name"
          autoCorrect={false}
          onSubmitEditing={handleAddPlayer}
          returnKeyType="done"
        />
        <ButtonIcon onPress={handleAddPlayer} icon="add" type="green" />
      </ThemedView>
      <ThemedView style={styles.headerList}>
        <FlatList
          data={["Team A", "Team B"]}
          keyExtractor={(item) => item}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <Filter
              onPress={() => setSelectedTeam(item)}
              isActive={item === team}
              title={item}
            />
          )}
        />
        <ThemedText>{players.length}</ThemedText>
      </ThemedView>
      <FlatList
        data={players}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <PlayerCard
            onRemove={() => handleDeletePlayer(item.name)}
            name={item.name}
          />
        )}
        ListEmptyComponent={() => (
          <ThemedText style={{ textAlign: "center", marginTop: 24 }}>
            No players found in {team}. Add some!
          </ThemedText>
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 24 }}
      />
      <Button onPress={handleRemoveGroup} title="Remove Group" type="red" />
    </ThemedSafeArea>
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
