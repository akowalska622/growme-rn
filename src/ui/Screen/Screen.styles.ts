import { StyleSheet } from 'react-native';

import { Layout, Spacing } from 'Constants';

export const styles = StyleSheet.create({
  screen: {
    flex: 1,
    ...Layout.center,
    ...Spacing.padding,
  }
});
