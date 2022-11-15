import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AppTourScreen from '../screens/AppTourScreen';
import BikeConfirmationScreen from '../screens/BikeConfirmationScreen';
import LoginScreen from '../screens/LoginScreen';
import OtpScreen from '../screens/OtpScreen'
import ResetPasswordScreen from '../screens/ResetPasswordScreen'
import SuccessPasswordScreen from '../screens/SuccessPasswordScreen'
import Register from '../screens/RegisterScreen';

const Stack = createNativeStackNavigator();

function StackNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='AppTourScreen'>
        <Stack.Screen options={{headerShown: false}} name="Tour" component={AppTourScreen} />
        <Stack.Screen options={{headerShown: false}} name="Login" component={LoginScreen} />
        <Stack.Screen options={{headerShown: false}} name="Register" component={Register} />
        <Stack.Screen options={{headerShown: false}} name="Otp" component={OtpScreen} />
        <Stack.Screen options={{headerShown: false}} name="Confirm" component={BikeConfirmationScreen} />
        <Stack.Screen options={{headerShown: false}} name="ResetPassword" component={ResetPasswordScreen} />
        <Stack.Screen options={{headerShown: false}} name="ResetSuccess" component={SuccessPasswordScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default StackNavigation;
