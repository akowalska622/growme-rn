import { StyleSheet } from 'react-native';

import { EBaseColors } from 'Constants/colors';
import { Layout } from 'Constants';
import { SNACKBAR_BORDER_RADIUS, SNACKBAR_HEIGHT } from './Snackbar.constant';

// TODO: fix colors type
export const getStyles = (colors: any) =>
  StyleSheet.create({
    base: {
      ...Layout.spaceBetween,
      borderRadius: SNACKBAR_BORDER_RADIUS,
      bottom: 10,
      color: colors.background,
      height: SNACKBAR_HEIGHT,
      paddingLeft: 16,
      paddingRight: 8,
      position: 'absolute',
      zIndex: 100,
    },
    success: {
      backgroundColor: EBaseColors.green,
    },
    failure: {
      backgroundColor: EBaseColors.orange,
    },
    mainContent: {
      ...Layout.row,
    },
    typeIcon: {
      marginRight: 8,
    },
    closeButton: {
      ...Layout.center,
      borderRadius: SNACKBAR_BORDER_RADIUS,
      height: SNACKBAR_HEIGHT,
      position: 'absolute',
      right: 0,
      width: SNACKBAR_HEIGHT,
    },
    icon: {
      color: colors.background,
      fontSize: 17,
    },
  });
