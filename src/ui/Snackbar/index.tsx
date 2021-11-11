import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity, View, useWindowDimensions } from 'react-native';
import { useDispatch } from 'react-redux';

import { ENotificationTypes } from 'Enums/ENotificationTypes';
import { ESnackbarIcons } from 'Enums/ESnackbarIcons';
import { Text } from 'UI/Text';
import { dismissNotificationById } from 'Redux/notifications/notificationsActions';
import { getStyles } from './Snackbar.styles';
import { useCustomTheme } from 'Hooks/useCustomTheme';

interface ISnackbarProps {
  id: string;
  message: string;
  type: ENotificationTypes;
}

export const Snackbar = ({ id, message, type }: ISnackbarProps) => {
  const dispatch = useDispatch();
  const { width } = useWindowDimensions();
  const { colors } = useCustomTheme();
  const styles = getStyles(colors);

  const handleDismiss = () => dispatch(dismissNotificationById(id));

  return (
    <View style={[styles.base, styles[type], { width: width * 0.95 }]}>
      <View style={styles.mainContent}>
        <Ionicons
          name={ESnackbarIcons[type]}
          style={[styles.icon, styles.typeIcon]}
        />
        <Text color="background">{message}</Text>
      </View>
      <TouchableOpacity onPress={handleDismiss} style={styles.closeButton}>
        <Ionicons name="close-circle" style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
};
