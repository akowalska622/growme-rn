import { Button } from 'react-native';
import { useDispatch } from 'react-redux';

import { Screen } from '../ui/Screen';
import { signOut } from '../redux/auth/actions/signOutActions';

export const ProfileScreen = () => {
  const dispatch = useDispatch();

  const handleLogOut = () => dispatch(signOut());

  return (
    <Screen>
      <Button title="Log out" onPress={handleLogOut} />
    </Screen>
  );
};
