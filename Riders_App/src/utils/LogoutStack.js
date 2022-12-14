import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LogoutScreen from '../screens/LogoutScreen';
import AddBikeDetails from '../screens/AddBikeDetailsScreen';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';

const Stack = createStackNavigator();

function LogoutStack() {
  return (
    <Stack.Navigator initialRouteName="LogoutScreen">
      <Stack.Screen
        options={{
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
        name="LogoutScreen"
        component={LogoutScreen}
      />
      <Stack.Screen
        options={{
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
        name="AddBikeDetails"
        component={AddBikeDetails}
      />
    </Stack.Navigator>
  );
}

export default LogoutStack;
