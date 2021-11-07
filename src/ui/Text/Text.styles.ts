import { StyleSheet } from 'react-native';

import { ColorType } from 'Constants/colors';
import { EFontSizes, EFontWeights } from 'Constants/typography';
import { useCustomTheme } from 'Hooks/useCustomTheme';

export const getStyles = (color: ColorType) => {
  const { colors } = useCustomTheme();

  return StyleSheet.create({
    base: {
      color: colors[color],
    },
    titleOne: {
      fontWeight: EFontWeights.light,
      fontSize: EFontSizes.titleOne,
    },
    titleTwo: {
      fontWeight: EFontWeights.regular,
      fontSize: EFontSizes.titleTwo,
    },
    titleThree: {
      fontWeight: EFontWeights.regular,
      fontSize: EFontSizes.titleThree,
    },
    headline: {
      fontWeight: EFontWeights.semiBold,
      fontSize: EFontSizes.headline,
    },
    body: {
      fontWeight: EFontWeights.regular,
      fontSize: EFontSizes.body,
    },
    callout: {
      fontWeight: EFontWeights.regular,
      fontSize: EFontSizes.callout,
    },
    subhead: {
      fontWeight: EFontWeights.regular,
      fontSize: EFontSizes.subhead,
    },
    footnote: {
      fontWeight: EFontWeights.regular,
      fontSize: EFontSizes.footnote,
    },
    caption: {
      fontWeight: EFontWeights.regular,
      fontSize: EFontSizes.caption,
    },
  });
};
