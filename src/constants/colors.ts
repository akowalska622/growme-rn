import { StyleSheet } from 'react-native';

enum EBaseColors {
  darkGrey = '#232323',
  green = '#56AF6F',
  lightGrey = '#BBBBBB',
  navyBlue = '#17172F',
  orange = '#E59112',
  red = '#B05656',
  white = '#F3F3F3',
}

const darkModeColors = {
  alert: EBaseColors.red,
  background: EBaseColors.navyBlue,
  cards: EBaseColors.darkGrey,
  placeholder: EBaseColors.lightGrey,
  primary: EBaseColors.green,
  secondary: EBaseColors.orange,
  text: EBaseColors.white,
};

const lightModeColors = {
  alert: EBaseColors.red,
  background: EBaseColors.white,
  cards: EBaseColors.lightGrey,
  placeholder: EBaseColors.darkGrey,
  primary: EBaseColors.green,
  secondary: EBaseColors.orange,
  text: EBaseColors.navyBlue,
};

export default (isDarkMode = true) => StyleSheet.create({
    background: {
      backgroundColor: isDarkMode
        ? darkModeColors.background
        : lightModeColors.background,
    },
  });
