const defaultColors = {
  WHITE: "#FFFFFF",

  GREEN_700: "#00875F",
  GREEN_500: "#00B37E",

  RED: "#F75A68",
  RED_DARK: "#AA2834",

  GRAY_700: "#121214",
  GRAY_600: "#202024",
  GRAY_500: "#29292E",
  GRAY_400: "#323238",
  GRAY_300: "#7C7C8A",
  GRAY_200: "#C4C4CC",
  GRAY_100: "#E1E1E6",
};

export const themes = {
  dark: {
    BACKGROUND: defaultColors.GRAY_700, // Dark background
    TEXT: defaultColors.GRAY_100, // Light text
    PRIMARY: defaultColors.GREEN_500, // Primary color
    SECONDARY: defaultColors.GREEN_700, // Secondary color
    ERROR: defaultColors.RED, // Error color
    ERROR_DARK: defaultColors.RED_DARK, // Dark error color
    BORDER: defaultColors.GRAY_400, // Border color
    CARD: defaultColors.GRAY_600, // Card background
    PLACEHOLDER: defaultColors.GRAY_300, // Placeholder text
    WHITE: defaultColors.WHITE, // White
    ICON: defaultColors.WHITE,
  },
  light: {
    BACKGROUND: defaultColors.WHITE, // Light background
    TEXT: defaultColors.GRAY_700, // Dark text
    PRIMARY: defaultColors.GREEN_500, // Primary color
    SECONDARY: defaultColors.GREEN_700, // Secondary color
    ERROR: defaultColors.RED, // Error color
    ERROR_DARK: defaultColors.RED_DARK, // Dark error color
    BORDER: defaultColors.GRAY_200, // Border color
    CARD: defaultColors.GRAY_100, // Card background
    PLACEHOLDER: defaultColors.GRAY_300, // Placeholder text
    WHITE: defaultColors.WHITE, // White
    ICON: defaultColors.GRAY_700,
  },
};

export const fontsDefaults = {
  FONT_FAMILY: {
    REGULAR: "Roboto_400Regular",
    BOLD: "Roboto_700Bold",
  },
  FONT_SIZE: {
    SM: 14,
    MD: 16,
    LG: 18,
    XL: 24,
  },
};
