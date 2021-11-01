import { Button, View } from 'react-native';
import { useDispatch } from 'react-redux';

import { signOut } from '../redux/auth/authActions';
import { styles } from './ProfileScreen.styles';

export const ProfileScreen = () => {
  const dispatch = useDispatch();

  const handleLogOut = () => dispatch(signOut());

  return (
    <View style={styles.container}>
      <Button title="Log out" onPress={handleLogOut} />
    </View>
  );
};
