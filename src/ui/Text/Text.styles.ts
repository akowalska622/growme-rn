import { StyleSheet } from 'react-native';

import { EFontSizes, EFontWeights } from 'Constants/typography';

export const getStyles = (color: string) =>
  StyleSheet.create({
    base: {
      color,
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
