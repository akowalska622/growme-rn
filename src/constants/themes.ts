import { DarkTheme, DefaultTheme } from '@react-navigation/native';

import { EBaseColors } from './colors';

// from DarkTheme: background, cards, border
const darkTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    notification: EBaseColors.orange,
    primary: EBaseColors.green,
    text: EBaseColors.white,
  },
};

// from DefaultTheme: background, cards, border
const lightTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    notification: EBaseColors.orange,
    primary: EBaseColors.green,
    text: EBaseColors.darkGrey,
  },
};

export { darkTheme, lightTheme };
