import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LoginScreen from './src/screens/LoginScreen';
import OtpScreen from './src/screens/OtpScreen';
import ResetPasswordScreen from './src/screens/ResetPasswordScreen';
import SuccessPasswordScreen from './src/screens/SuccessPasswordScreen';


import Register from './src/screens/RegisterScreen';

const App = () => {
  return (
    <OtpScreen />
  );
}

export default App;

