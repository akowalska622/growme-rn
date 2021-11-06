import { StyleSheet } from 'react-native';
import { useTheme } from '@react-navigation/native';

import { Spacing, Typography } from 'Constants';

export const styles = () => {
  const { colors } = useTheme();
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
      color: 'grey', // TODO: fix `disabled` color
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
