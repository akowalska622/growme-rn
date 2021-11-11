import { ReactNode } from 'react';
import { View } from 'react-native';
import { useSelector } from 'react-redux';

import { Snackbar } from 'UI/Snackbar';
import { selectFirstNotification } from 'Redux/notifications/notificationsSelectors';
import { styles } from './Screen.styles';

interface IScreenProps {
  children: ReactNode;
  style?: object;
}

export const Screen = ({ children, style }: IScreenProps) => {
  const [notificationId, notification] =
    useSelector(selectFirstNotification) ?? [];

  return (
    <View style={[styles.screen, style]}>
      {children}
      {notification && <Snackbar id={notificationId} {...notification} />}
    </View>
  );
};
