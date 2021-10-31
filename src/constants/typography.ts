import { StyleSheet } from 'react-native';

enum EFontWeights {
  light = '200',
  regular = '400',
  semiBold = '600',
  bold = '700',
}

enum EFontSizes {
  titleOne = 27,
  titleTwo = 21,
  titleThree = 19,
  headline = 16,
  body = 16,
  callout = 15,
  subhead = 14,
  footnote = 12,
  captionOne = 11,
  captionTwo = 11,
}

export default StyleSheet.create({
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
  captionOne: {
    fontWeight: EFontWeights.regular,
    fontSize: EFontSizes.captionOne,
  },
  captionTwo: {
    fontWeight: EFontWeights.regular,
    fontSize: EFontSizes.captionTwo,
  },
});
