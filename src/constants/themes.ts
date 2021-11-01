import { DarkTheme, DefaultTheme } from '@react-navigation/native';

import { EBaseColors } from './colors';

// DarkTheme: background, cards, border
// additionally: disabled: EBaseColors.lightGrey,
const darkTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    disabled: EBaseColors.lightGrey,
    notification: EBaseColors.orange,
    primary: EBaseColors.green,
    text: EBaseColors.white,
  },
};

// DefaultTheme: background, cards, border
// additionally: disabled: EBaseColors.darkGrey,
const lightTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    disabled: EBaseColors.lightGrey,
    notification: EBaseColors.orange,
    primary: EBaseColors.green,
    text: EBaseColors.darkGrey,
  },
};

export { darkTheme, lightTheme };
