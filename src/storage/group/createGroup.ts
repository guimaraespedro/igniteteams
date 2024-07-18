import AsyncStorage from "@react-native-async-storage/async-storage";
import { GROUP_COLLECTION } from "../storageConfig";
import { getAllGroups } from "./getAllGroups";
import { AppError } from "@/src/utils/AppError";

export async function createGroup(groupName: string) {
  try {
    const alreadyCreatedGroups = await getAllGroups();

    const groupAlreadyExist = alreadyCreatedGroups.includes(groupName);

    if (groupAlreadyExist) {
      throw new AppError("Group already exists");
    }

    const newGorups = [...alreadyCreatedGroups, groupName];
    await AsyncStorage.setItem(GROUP_COLLECTION, JSON.stringify(newGorups));
  } catch (e) {
    throw e;
  }
}
