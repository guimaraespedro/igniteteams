import AsyncStorage from "@react-native-async-storage/async-storage";
import { GROUP_COLLECTION, PLAYER_COLLECTION } from "../storageConfig";

import { getAllGroups } from "./getAllGroups";

export async function removeGroup(group: string): Promise<void> {
  try {
    const storedGroups = await getAllGroups();
    const updatedGroups = storedGroups.filter((g) => g !== group);

    await AsyncStorage.setItem(GROUP_COLLECTION, JSON.stringify(updatedGroups));
    await AsyncStorage.removeItem(`${PLAYER_COLLECTION}-${group}`);
  } catch (error) {}
}
