import { Button } from 'react-native';
import { useDispatch } from 'react-redux';

import { Screen } from 'UI/Screen';
import { signOut } from 'Redux/auth/actions/signOutActions';

export const ProfileScreen = () => {
  const dispatch = useDispatch();

  const handleLogOut = () => dispatch(signOut());

  return (
    <Screen>
      <Button title="Log out" onPress={handleLogOut} />
    </Screen>
  );
};
