import { Animated, StyleSheet } from 'react-native';

import { EFontSizes } from 'Constants/typography';
import { Spacing } from 'Constants';
import { useCustomTheme } from '../../hooks/useTheme';

const inputPaddingLeft = 15;

export const getLabelStyles = (labelAnimation: Animated.Value) => {
  const { colors } = useCustomTheme();

  const interpolate = (outputRange: number[]) =>
    labelAnimation.interpolate({
      inputRange: [0, 1],
      outputRange,
    });

  return {
    fontSize: interpolate([EFontSizes.body, EFontSizes.subhead]),
    color: colors.disabled,
    left: interpolate([inputPaddingLeft, 0]),
    position: 'absolute',
    top: interpolate([15, -18]),
    zIndex: 1,
  };
};

export const getStyles = (isValid: boolean) => {
  const { colors } = useCustomTheme();

  return StyleSheet.create({
    errorMessage: {
      color: colors.notification,
    },
    inputWrapper: {
      ...Spacing.marginVertical,
      position: 'relative',
    },
    textInput: {
      backgroundColor: colors.card,
      borderBottomWidth: 3,
      borderColor: isValid ? colors.primary : colors.notification,
      borderTopLeftRadius: 5,
      borderTopRightRadius: 5,
      color: colors.text,
      height: 50,
      paddingLeft: inputPaddingLeft,
      width: 250,
    },
  });
};
