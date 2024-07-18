import AsyncStorage from "@react-native-async-storage/async-storage";
import { APPLICATION_THEME } from "../storageConfig";
import { ThemeNames } from "../../themes";

export async function getCurrentTheme(): Promise<ThemeNames | null> {
  try {
    const theme = await AsyncStorage.getItem(APPLICATION_THEME);
    return theme as ThemeNames;
  } catch (error) {
    console.error("Error getting theme from AsyncStorage: ", error);
    return null;
  }
}
