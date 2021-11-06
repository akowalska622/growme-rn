import { useTheme } from '@react-navigation/native';

import { EBaseColors } from 'Constants/colors';

export const useCustomTheme = () => {
  const theme = useTheme();
  const colors = { ...theme.colors, disabled: EBaseColors.lightGrey, placeholder: EBaseColors.lightGrey }
  return { ...theme, colors };
}
