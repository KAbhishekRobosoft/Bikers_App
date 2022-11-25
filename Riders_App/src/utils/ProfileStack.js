import React from 'react'
import Profile from '../screens/Profile'
import ProfileUpdationScreen from '../screens/ProfileUpdationScreen'
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

function ProfileStack() {
  return (
    <Stack.Navigator initialRouteName="Profile">
    <Stack.Screen
      options={{headerShown: false}}
      name="Profile"
      component={Profile}
    />
    <Stack.Screen
      options={{headerShown: false}}
      name="updateProfile"
      component={ProfileUpdationScreen}
    />
  </Stack.Navigator>
  )
}

export default ProfileStack