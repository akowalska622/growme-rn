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

import { EScreenIconNames } from 'Enums/EScreenIconNames';
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
        <Tab.Navigator
          initialRouteName="Home"
          screenOptions={({ route }) => ({
            tabBarIcon: ({ color, size }) => {
              const routeName = route.name.toLowerCase();
              const iconName = EScreenIconNames[routeName]; // TODO: fix TS error
              return <Ionicons color={color} name={iconName} size={size} />;
            },
          })}
        >
          <Tab.Screen component={HomeScreen} name="Home" />
          <Tab.Screen component={ScheduleScreen} name="Schedule" />
          <Tab.Screen component={ProfileScreen} name="Profile" />
          {__DEV__ && <Tab.Screen component={LinksScreen} name="Storybook" />}
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
