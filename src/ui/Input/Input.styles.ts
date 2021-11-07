import { Animated, StyleSheet } from 'react-native';

import { EFontSizes } from 'Constants/typography';
import { Spacing } from 'Constants';
import { useCustomTheme } from '../../hooks/useCustomTheme';

const inputHorizontalPadding = 15;
const inputHeight = 50;

export const getLabelStyles = (labelAnimatedValue: Animated.Value) => {
  const interpolate = (outputRange: number[]) =>
    labelAnimatedValue.interpolate({
      inputRange: [0, 1],
      outputRange,
    });

  return {
    fontSize: interpolate([EFontSizes.body, EFontSizes.subhead]),
    left: interpolate([inputHorizontalPadding, 0]),
    top: interpolate([15, -18]),
  };
};

export const getStyles = (isValid: boolean, isIcon: boolean) => {
  const { colors } = useCustomTheme();

  return StyleSheet.create({
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
    label: {
      color: colors.disabled,
      position: 'absolute',
      zIndex: 1,
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
