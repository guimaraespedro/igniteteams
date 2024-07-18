import AsyncStorage from "@react-native-async-storage/async-storage";
import { PLAYER_COLLECTION } from "../storageConfig";
import { getPlayersByGroup } from "./getPlayersByGroup";

export async function removePlayerFromGroup(
  playerName: string,
  group: string
): Promise<void> {
  try {
    const storagePlayers = await getPlayersByGroup(group);
    const filteredPlayers = await storagePlayers.filter(
      (p) => p.name !== playerName
    );

    const newPlayers = JSON.stringify(filteredPlayers);
    await AsyncStorage.setItem(`${PLAYER_COLLECTION}-${group}`, newPlayers);
  } catch (error) {
    throw error;
  }
}
