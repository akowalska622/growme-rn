import { StyleSheet } from 'react-native';

import { Layout } from 'Constants';

export const styles = StyleSheet.create({
  signInContainer: {
    flex: 0.8,
    ...Layout.center,
  },
  switchContextContainer: {
    flex: 0.2,
    ...Layout.center,
  },
});
