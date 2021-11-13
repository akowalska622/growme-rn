import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useColorScheme } from 'react-native';
import { useSelector } from 'react-redux';

import { AuthScreen } from 'Screens/AuthScreen';
import { HomeScreen } from 'Screens/HomeScreen';
import { LinksScreen } from 'Screens/LinksScreen';
import { ProfileScreen } from 'Screens/ProfileScreen';
import { ScheduleScreen } from 'Screens/ScheduleScreen';

import { Ionicons } from '@expo/vector-icons';
import { darkTheme, lightTheme } from 'Constants/themes';
import { selectIsAuthenticated } from 'Redux/auth/authSelectors';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export const Navigation = () => {
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const scheme = useColorScheme();

  return (
    <NavigationContainer theme={scheme === 'dark' ? darkTheme : lightTheme}>
      {isAuthenticated ? (
        <Tab.Navigator initialRouteName="Home">
          <Tab.Screen
            component={HomeScreen}
            name="Home"
            options={{
              tabBarIcon: ({ color, size }) => (
                <Ionicons color={color} name="home-outline" size={size} />
              ),
            }}
          />
          <Tab.Screen
            component={ScheduleScreen}
            name="Schedule"
            options={{
              tabBarIcon: ({ color, size }) => (
                <Ionicons color={color} name="calendar-outline" size={size} />
              ),
            }}
          />
          <Tab.Screen
            component={ProfileScreen}
            name="Profile"
            options={{
              tabBarIcon: ({ color, size }) => (
                <Ionicons color={color} name="person-outline" size={size} />
              ),
            }}
          />
          {__DEV__ && (
            <Tab.Screen
              component={LinksScreen}
              name="Storybook"
              options={{
                tabBarIcon: ({ color, size }) => (
                  <Ionicons color={color} name="book-outline" size={size} />
                ),
              }}
            />
          )}
        </Tab.Navigator>
      ) : (
        <Stack.Navigator>
          <Stack.Screen
            component={AuthScreen}
            name="Authentication"
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};
