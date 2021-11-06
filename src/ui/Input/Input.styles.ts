import { StyleSheet } from 'react-native';

import { Spacing, Typography } from 'Constants';
import { useCustomTheme } from '../../hooks/useTheme';

export const styles = () => {
  const { colors } = useCustomTheme();
  const paddingLeft = 15;

  return StyleSheet.create({
    container: {
      ...Spacing.marginVertical,
      position: 'relative',
    },
    textInput: {
      backgroundColor: colors.card,
      borderBottomWidth: 3,
      borderTopLeftRadius: 5,
      borderTopRightRadius: 5,
      color: colors.text,
      height: 50,
      paddingLeft,
      width: 250,
    },
    invalidInput: {
      borderColor: colors.notification,
    },
    validInput: {
      borderColor: colors.primary,
    },
    errorMessage: {
      color: colors.notification,
    },
    label: {
      color: colors.disabled,
      position: 'absolute',
      zIndex: 1,
    },
    labelOnFocus: {
      ...Typography.subhead,
      left: 0,
      top: -18,
    },
    placeholder: {
      ...Typography.body,
      left: paddingLeft,
      top: 15,
    },
  });
};
