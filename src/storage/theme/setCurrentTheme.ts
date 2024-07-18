import AsyncStorage from "@react-native-async-storage/async-storage";
import { APPLICATION_THEME } from "../storageConfig";
import { ThemeNames } from "../../themes";

export async function setCurrentTheme(theme: ThemeNames): Promise<void> {
  await AsyncStorage.setItem(APPLICATION_THEME, theme);
}
