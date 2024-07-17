import { useColorScheme } from "react-native";

import { themes } from "../themes";

export function useThemeColor(
  propertyName: keyof typeof themes.dark & keyof typeof themes.light
) {
  const themeInUse = useColorScheme() ?? "light";

  return themes[themeInUse][propertyName];
}
