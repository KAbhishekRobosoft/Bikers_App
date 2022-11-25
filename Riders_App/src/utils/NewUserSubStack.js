import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import WelcomeAboardScreen from '../screens/WelcomeAboardScreen';
import CreateTrip from '../screens/CreateTripScreen';
import BottomTabNavigation from './BottomTabNavigation';
import { ContactDisplay } from '../screens/Contact';
import { TripSummary } from '../screens/TripSummaryScreen';
import {CreateTripSuccess} from '../screens/CreateTripSuccessScreen';
import { SearchCity } from '../screens/SearchCityScreen';

const Stack = createNativeStackNavigator();

const NewUserSubStack = () => {
  return (
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
      <Stack.Screen
        options={{headerShown: false}}
        name="Contacts"
        component={ContactDisplay}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="TripSummary"
        component={TripSummary}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="CreateTripSuccess"
        component={CreateTripSuccess}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="SearchCity"
        component={SearchCity}
      />
    </Stack.Navigator>
  );
};

export default NewUserSubStack;

const styles = StyleSheet.create({});
