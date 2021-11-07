import { Animated, StyleSheet } from 'react-native';

import { EFontSizes } from 'Constants/typography';
import { Spacing } from 'Constants';
import { useCustomTheme } from '../../hooks/useTheme';

const inputHorizontalPadding = 15;
const inputHeight = 50;

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
    left: interpolate([inputHorizontalPadding, 0]),
    position: 'absolute',
    top: interpolate([15, -18]),
    zIndex: 1,
  };
};

export const getStyles = (isValid: boolean, isIcon: boolean) => {
  const { colors } = useCustomTheme();

  return StyleSheet.create({
    errorMessage: {
      color: colors.notification,
      top: 1,
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
      height: inputHeight,
      paddingLeft: inputHorizontalPadding,
      paddingRight: isIcon ? inputHeight : inputHorizontalPadding,
      width: 250,
    },
    iconWrapper: {
      alignItems: 'center',
      height: inputHeight,
      justifyContent: 'center',
      position: 'absolute',
      right: 0,
      width: inputHeight,
    },
    icon: {
      color: colors.text,
      fontSize: EFontSizes.titleTwo,
    },
  });
};
