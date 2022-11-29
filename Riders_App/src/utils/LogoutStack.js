import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LogoutScreen from '../screens/LogoutScreen';
import AddBikeDetails from '../screens/AddBikeDetailsScreen';


const Stack = createNativeStackNavigator();

function LogoutStack() {
  return (
      <Stack.Navigator initialRouteName="LogoutScreen">
        <Stack.Screen
          options={{headerShown: false}}
          name="LogoutScreen"
          component={LogoutScreen}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="AddBikeDetails"
          component={AddBikeDetails}
        />
      </Stack.Navigator>
  );
}

export default LogoutStack;
