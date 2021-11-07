import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useColorScheme } from 'react-native';
import { useSelector } from 'react-redux';

import { AuthScreen } from 'Screens/AuthScreen';
import { HomeScreen } from 'Screens/HomeScreen';
import { LinksScreen } from 'Screens/LinksScreen';
import { ProfileScreen } from 'Screens/ProfileScreen';

import { darkTheme, lightTheme } from 'Constants/themes';
import { selectAuthenticated } from 'Redux/auth/authSelectors';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export const Navigation = () => {
  const authenticated = useSelector(selectAuthenticated);
  const scheme = useColorScheme();

  return (
    <NavigationContainer theme={scheme === 'dark' ? darkTheme : lightTheme}>
      {authenticated ? (
        <Tab.Navigator>
          <Tab.Screen name="Profile" component={ProfileScreen} />
          <Tab.Screen name="Home" component={HomeScreen} />
          {__DEV__ && <Tab.Screen name="Storybook" component={LinksScreen} />}
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
