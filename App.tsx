import "@expo/metro-runtime";

import { StatusBar } from "react-native";

import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";
import { Loading } from "./src/components/Loading";
import { ThemeContextProvider } from "./src/contexts/ThemeContext";
import { NavigationContainer } from "@react-navigation/native";
import { AppRoutes } from "./src/routes/app.routes";
import { ThemedView } from "./src/components/ThemedView";

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  return (
    <ThemeContextProvider>
      <StatusBar />
      {fontsLoaded ? (
        <ThemedView style={{ flex: 1 }}>
          <NavigationContainer>
            <AppRoutes></AppRoutes>
          </NavigationContainer>
        </ThemedView>
      ) : (
        <Loading></Loading>
      )}
    </ThemeContextProvider>
  );
}
