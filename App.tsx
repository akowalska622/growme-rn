import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Colors, Layout, Spacing } from 'Constants';

const App = () => {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    ...Colors().background,
    ...Layout.center,
    ...Spacing.padding,
  },
});

export default App;
