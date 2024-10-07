import { createThemeBuilder } from '@tamagui/theme-builder';

const palettes = {
  light: ['#000', '#000', '#000', '#fff'],
  dark: ['#fff', '#fff', '#fff', '#000'],
};
const templates = {
  base: {
    accentBackground: 0,
    accentColor: 0,
    background0: 1,
    background: 1,
    color: 3,
  },
};

export const themes = createThemeBuilder()
  .addPalettes(palettes)
  .addTemplates(templates)
  .addThemes({
    light: {
      template: 'base',
      palette: 'light',
    },
    dark: {
      template: 'base',
      palette: 'dark',
    },
  })
  .build();
