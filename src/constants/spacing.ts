import { StyleSheet } from 'react-native';

enum ESpacing {
  small = 8,
  regular = 16,
  big = 22,
  veryBig = 44,
  large = 88,
}

export default StyleSheet.create({
  margin: {
    margin: ESpacing.regular,
  },
  marginVertical: {
    margin: ESpacing.regular,
  },
  padding: {
    padding: ESpacing.regular,
  },
});
