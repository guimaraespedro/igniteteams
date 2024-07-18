import AsyncStorage from "@react-native-async-storage/async-storage";
import { PlayerStorageDto } from "./PlayerStorageDto";
import { PLAYER_COLLECTION } from "../storageConfig";

export async function getPlayersByGroup(
  group: string
): Promise<PlayerStorageDto[]> {
  try {
    const storage = await AsyncStorage.getItem(`${PLAYER_COLLECTION}-${group}`);
    const parsedPlayers = storage
      ? (JSON.parse(storage) as PlayerStorageDto[])
      : [];
    return parsedPlayers;
  } catch (err) {
    throw err;
  }
}
