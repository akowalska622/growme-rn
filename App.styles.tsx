import { StyleSheet } from 'react-native';

import { Colors, Layout, Spacing } from 'Constants';

const styles = StyleSheet.create({
  container: {
    ...Colors().background,
    ...Layout.center,
    ...Spacing.padding,
  },
});

export default styles;
