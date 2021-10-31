import { StyleSheet } from 'react-native';

// TODO: extract duplicated styles
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  signInContainer: {
    flex: 0.8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  switchContextContainer: {
    flex: 0.2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {
    backgroundColor: 'white',
    borderRadius: 5,
    height: 40,
    margin: 5,
    padding: 15,
    width: 200,
  },
});