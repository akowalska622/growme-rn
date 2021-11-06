import { StyleSheet } from 'react-native';

// TODO: clean up styles
export const styles = StyleSheet.create({
  container: {
    margin: 8,
    position: 'relative',
  },
  errorInput: {
    borderBottomWidth: 3,
    borderColor: 'red',
  },
  errorMessage: {
    color: 'red',
  },
  label: {
    color: 'black',
    fontSize: 14,
    left: 0,
    position: 'absolute',
    top: -18,
    zIndex: 1,
  },
  placeholder: {
    color: 'grey',
    left: 5,
    position: 'absolute',
    top: 15,
    zIndex: 1,
  },
  textInput: {
    backgroundColor: 'white',
    borderBottomWidth: 3,
    borderColor: 'blue',
    borderRadius: 5,
    color: 'black',
    height: 50,
    paddingLeft: 5,
    width: 250,
  },
});
