import "@expo/metro-runtime";

import { StyleSheet, StatusBar, useColorScheme } from "react-native";
import { ThemedView } from "./src/components/ThemedView";
import { Groups } from "./src/screens/Groups";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";
import { Loading } from "./src/components/Loading";
import { ThemeContextProvider } from "./src/contexts/ThemeContext";
import { NewGroup } from "./src/screens/NewGroup";
import { Players } from "./src/screens/Players";

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  const selectedTheme = useColorScheme();

  return (
    <ThemeContextProvider>
      <StatusBar
        barStyle={selectedTheme === "dark" ? "light-content" : "dark-content"}
      />
      {fontsLoaded ? <Players></Players> : <Loading></Loading>}
    </ThemeContextProvider>
  );
}
