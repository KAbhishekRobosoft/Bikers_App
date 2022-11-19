import React from 'react'
import AppTourScreen from '../screens/AppTourScreen'
import StackNavigation from './StackNavigation'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Register from '../screens/RegisterScreen'
import { create } from 'react-test-renderer'
import BikeConfirmationScreen from '../screens/BikeConfirmationScreen'
const Stack= createNativeStackNavigator()

function AppTourStack() {
  return (
 
    <Stack.Navigator initialRouteName='AppTourScreen'>
      <Stack.Screen options={{headerShown: false}} name="Tour" component={AppTourScreen} />
      <Stack.Screen options={{headerShown: false}} name="AuthPage" component={StackNavigation} />
      <Stack.Screen options={{headerShown: false}} name="Confirm" component={BikeConfirmationScreen} />

    </Stack.Navigator>

  )
}

export default AppTourStack