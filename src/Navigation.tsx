import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useColorScheme } from 'react-native';
import { useSelector } from 'react-redux';

import { AuthScreen } from 'Screens/AuthScreen';
import { HomeScreen } from 'Screens/HomeScreen';
import { ProfileScreen } from 'Screens/ProfileScreen';

import { darkTheme, lightTheme } from 'Constants/themes';
import { isSignedInSelector } from './redux/auth/authSelectors';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export const Navigation = () => {
  const isSignedIn = useSelector(isSignedInSelector);
  const scheme = useColorScheme();

  return (
    <NavigationContainer theme={scheme === 'dark' ? darkTheme : lightTheme}>
      {isSignedIn ? (
        <Tab.Navigator>
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Profile" component={ProfileScreen} />
        </Tab.Navigator>
      ) : (
        <Stack.Navigator>
          <Stack.Screen
            name="Authentication"
            component={AuthScreen}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};
