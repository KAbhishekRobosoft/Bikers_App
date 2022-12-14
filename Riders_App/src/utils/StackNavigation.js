import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BikeConfirmationScreen from '../screens/BikeConfirmationScreen';
import LoginScreen from '../screens/LoginScreen';
import OtpScreen from '../screens/OtpScreen';
import ResetPasswordScreen from '../screens/ResetPasswordScreen';
import SuccessPasswordScreen from '../screens/SuccessPasswordScreen';
import Register from '../screens/RegisterScreen';
import NumberEntryScreen from '../screens/NumberEntryScreen';

import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';

const Stack = createStackNavigator();

function StackNavigation() {
  return (
    <Stack.Navigator initialRouteName="LoginScreen">
      <Stack.Screen
        options={{
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
        name="Login"
        component={LoginScreen}
      />
      <Stack.Screen
        options={{
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
        name="NumberEntry"
        component={NumberEntryScreen}
      />
      <Stack.Screen
        options={{
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
        name="ResetPassword"
        component={ResetPasswordScreen}
      />
      <Stack.Screen
        options={{
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
        name="ResetSuccess"
        component={SuccessPasswordScreen}
      />
      <Stack.Screen
        options={{
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
        name="Confirm"
        component={BikeConfirmationScreen}
      />
      <Stack.Screen
        options={{
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
        name="Register"
        component={Register}
      />
      <Stack.Screen
        options={{
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
        name="Otp"
        component={OtpScreen}
      />
    </Stack.Navigator>
  );
}

export default StackNavigation;
