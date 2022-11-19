import React from 'react';
import RegisterUserIntro from '../screens/RegisterUserIntro';
import ImageSuccessPage from '../screens/ImageSuccessPage';
import NewUserSubStack from './NewUserSubStack';
import { useSelector } from 'react-redux';
import PracScreen from '../screens/PracScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack= createNativeStackNavigator()

function NewUserStack() {
    const authData= useSelector(state=>state.auth)
  return (
    authData.registered ? (
    <Stack.Navigator initialRouteName="RegisterUserIntro">
      <Stack.Screen
        options={{headerShown: false}}
        name="newUserTour"
        component={RegisterUserIntro}
      />

      <Stack.Screen
        options={{headerShown: false}}
        name="ImageSuccess"
        component={ImageSuccessPage}
      />

      <Stack.Screen
        options={{headerShown: false}}
        name="subStack"
        component={NewUserSubStack}
      />
    </Stack.Navigator>) : <PracScreen />
  )
}

export default NewUserStack;
