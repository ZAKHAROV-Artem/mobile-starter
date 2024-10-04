import { createThemeBuilder } from "@tamagui/theme-builder";

const palettes = {
  light: ["#FFFFFF"],
};
const templates = {
  base: {
    bg: 0,
  },
};

export const themes = createThemeBuilder()
  .addPalettes(palettes)
  .addTemplates(templates)
  .addThemes({
    light: {
      palette: "light",
      template: "base",
    },
  })
  .build();
