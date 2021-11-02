import { StyleSheet } from 'react-native';

export const styles = (colors: any) =>
  StyleSheet.create({
    customBtn: {
      alignItems: 'center',
      backgroundColor: colors.primary,
      borderColor: colors.primary,
      borderRadius: 25,
      borderStyle: 'solid',
      borderWidth: 1,
      display: 'flex',
      elevation: 5,
      justifyContent: 'center',
      height: 35,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      width: 150,
      //delete this
      marginBottom: 5,
    },
    outline: {
      backgroundColor: 'transparent',
      shadowColor: 'transparent',
    },
    alert: {
      backgroundColor: colors.notification,
      borderColor: colors.notification,
    },
    btnText: {
      color: '#fff',
      textTransform: 'uppercase',
    },
    alertText: {
      color: colors.notification,
    },
    outlineText: {
      color: colors.primary,
    },
  });
