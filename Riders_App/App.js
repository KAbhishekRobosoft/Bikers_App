import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LoginScreen from './src/screens/LoginScreen'
import ResetPasswordScreen from './src/screens/ResetPasswordScreen';
import SuccessPasswordScreen from './src/screens/SuccessPasswordScreen';
import OtpScreen from './src/screens/OtpScreen';


const App = () => {
  return (
    <LoginScreen />
  );
}

export default App;

