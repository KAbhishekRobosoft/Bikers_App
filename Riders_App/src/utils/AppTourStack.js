import React from 'react';
import AppTourScreen from '../screens/AppTourScreen';
import BikeConfirmationScreen from '../screens/BikeConfirmationScreen';
import LoginScreen from '../screens/LoginScreen';
import OtpScreen from '../screens/OtpScreen';
import ResetPasswordScreen from '../screens/ResetPasswordScreen';
import SuccessPasswordScreen from '../screens/SuccessPasswordScreen';
import Register from '../screens/RegisterScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import NumberEntryScreen from '../screens/NumberEntryScreen';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';

const Stack = createStackNavigator();

function AppTourStack() {
  return (
    <Stack.Navigator initialRouteName="AppTourScreen">
      <Stack.Screen
        options={{
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
        name="Tour"
        component={AppTourScreen}
      />
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
        name="NumberEntry"
        component={NumberEntryScreen}
      />
    </Stack.Navigator>
  );
}

export default AppTourStack;
