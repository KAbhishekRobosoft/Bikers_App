import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import WelcomeAboardScreen from '../screens/WelcomeAboardScreen';
import CreateTrip from '../screens/CreateTripScreen';
import {NavigationContainer} from '@react-navigation/native';
import LoginScreen from '../screens/LoginScreen';
import BottomTabNavigation from './BottomTabNavigation';

const Stack = createNativeStackNavigator();

const NewUserSubStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="WelcomeAboardScreen">
        <Stack.Screen
          options={{headerShown: false}}
          name="WelcomeAboardScreen"
          component={BottomTabNavigation}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="CreateTrip"
          component={CreateTrip}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NewUserSubStack;

const styles = StyleSheet.create({});
