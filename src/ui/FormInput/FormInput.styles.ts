import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    margin: 5,
  },
  errorInput: {
    borderBottomWidth: 3,
    borderColor: 'red',
  },
  errorMessage: {
    color: 'red',
  },
  label: {
    marginLeft: 6,
    textAlign: 'left',
  },
  textInput: {
    backgroundColor: 'white',
    borderBottomWidth: 3,
    borderColor: 'blue',
    borderRadius: 5,
    color: 'black',
    height: 40,
    paddingLeft: 5,
    width: 250,
  },
});
