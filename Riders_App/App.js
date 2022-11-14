import * as React from 'react';
<<<<<<< HEAD
import AppTourScreen from './src/screens/AppTourScreen';
=======
<<<<<<< HEAD
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LoginScreen from './src/screens/LoginScreen';
=======
import {StyleSheet, Text, View} from 'react-native';
import Swiper from 'react-native-swiper';
>>>>>>> 320503698281444b9b4969fe44c14e1e02d124c3
>>>>>>> 81e2d670a4d4674412686cd7cf7920b1527ce88e

export default function App() {
  return (
    <AppTourScreen  />
  );
}

<<<<<<< HEAD
=======
const Tab = createBottomTabNavigator();

export default function App() {
  return (<LoginScreen/>
    // <NavigationContainer>
    //   <Tab.Navigator>
    //     <Tab.Screen name="Home" component={HomeScreen} />
    //     <Tab.Screen name="Settings" component={SettingsScreen} />
    //   </Tab.Navigator>
    // </NavigationContainer>
  );
}
>>>>>>> 81e2d670a4d4674412686cd7cf7920b1527ce88e
