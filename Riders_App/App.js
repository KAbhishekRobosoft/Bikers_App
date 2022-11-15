import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Register from './src/screens/RegisterScreen';

const App = () => {
  return (
    <Register />
  );
}

export default App;

