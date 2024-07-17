import { createContext, useState, useContext } from "react";
import { themes } from "@/src/themes";
import { useColorScheme } from "react-native";

type Context = {
  theme: typeof themes.dark | typeof themes.light;
  toggleTheme: () => void;
};

type Theme = typeof themes.dark & typeof themes.light;

const ThemeContext = createContext<Context>({
  theme: themes.dark,
  toggleTheme: () => {},
});

type ContextProvider = {
  children: React.ReactNode;
};

export const useTheme = () => useContext(ThemeContext);

export const ThemeContextProvider = ({ children }: ContextProvider) => {
  const defaultTheme = useColorScheme() ?? "dark";
  const [theme, setTheme] = useState<Theme>(themes[defaultTheme]);

  function toggleTheme() {
    const newTheme = theme === themes.dark ? "light" : "dark";
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
