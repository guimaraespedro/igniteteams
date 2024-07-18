import { createContext, useState, useContext, useEffect } from "react";
import { themes } from "@/src/themes";
import { useColorScheme } from "react-native";
import { getCurrentTheme } from "../storage/theme/getCurrentTheme";
import { setCurrentTheme } from "../storage/theme/setCurrentTheme";

type Context = {
  theme: typeof themes.dark | typeof themes.light;
  toggleTheme: () => Promise<void>;
};

type Theme = typeof themes.dark & typeof themes.light;

const ThemeContext = createContext<Context>({
  theme: themes.light,
  toggleTheme: () => new Promise((resolve) => resolve()),
});

type ContextProvider = {
  children: React.ReactNode;
};

export const useTheme = () => useContext(ThemeContext);

export const ThemeContextProvider = ({ children }: ContextProvider) => {
  //const themeFromStorage = await getCurrentTheme();
  const defaultTheme = useColorScheme() ?? "light";
  const [theme, setTheme] = useState<Theme>(themes[defaultTheme]);

  useEffect(() => {
    async function fetchTheme() {
      const themeFromStorage = await getCurrentTheme();
      if (themeFromStorage && themes[themeFromStorage]) {
        setTheme(themes[themeFromStorage]);
      }
    }

    fetchTheme();
  }, []);

  async function toggleTheme() {
    const newTheme = theme === themes.dark ? "light" : "dark";
    await setCurrentTheme(newTheme);
    setTheme(themes[newTheme]);
  }

  return (
    <ThemeContext.Provider
      value={{
        theme: theme,
        toggleTheme: toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
