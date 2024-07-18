import AsyncStorage from "@react-native-async-storage/async-storage";
import { AppError } from "@/src/utils/AppError";
import { PLAYER_COLLECTION } from "../storageConfig";
import { PlayerStorageDto } from "./PlayerStorageDto";
import { getPlayersByGroup } from "./getPlayersByGroup";

export async function addPlayerByGroup(
  newPlayer: PlayerStorageDto,
  group: string
): Promise<void> {
  try {
    const storagePlayers = await getPlayersByGroup(group);
    const existingPlayer = storagePlayers.some(
      (p) => p.name === newPlayer.name
    );
    if (existingPlayer) {
      throw new AppError("Player already exists in this group");
    }

    await AsyncStorage.setItem(
      `${PLAYER_COLLECTION}-${group}`,
      JSON.stringify([...storagePlayers, newPlayer])
    );
  } catch (error) {
    throw new AppError("Error adding player to group");
  }
}
