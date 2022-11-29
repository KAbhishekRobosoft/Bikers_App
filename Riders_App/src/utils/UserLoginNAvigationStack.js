import React from 'react';
import RegisterUserIntro from '../screens/RegisterUserIntro';
import ImageSuccessPage from '../screens/ImageSuccessPage';
import NewUserSubStack from './NewUserSubStack';
import {useSelector} from 'react-redux';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomTabLoginNavigation from './BottomTabLoginNavigation';
import CreateTrip from '../screens/CreateTripScreen';
import {ContactDisplay} from '../screens/Contact';
import {TripSummary} from '../screens/TripSummaryScreen';
import {CreateTripSuccess} from '../screens/CreateTripSuccessScreen';
import {SearchCity} from '../screens/SearchCityScreen';
import GetParticularTripSummary from '../screens/GetParticularTripSummary';
import MapDisplayScreen from '../screens/MapDisplayScreen';
import ChatScreen from '../screens/ChatScreen';

const Stack = createNativeStackNavigator();

function UserLoginStack() {
  const authData = useSelector(state => state.auth);
  return (
    <Stack.Navigator initialRouteName="BottomTabLoginNavigation">
      <Stack.Screen
        options={{headerShown: false}}
        name="BottomTabLoginNavigation"
        component={BottomTabLoginNavigation}
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
      <Stack.Screen
        options={{headerShown: false}}
        name="particularTrip"
        component={GetParticularTripSummary}
      />

      <Stack.Screen
        options={{headerShown: false}}
        name="MapDisplay"
        component={MapDisplayScreen}
      />

      <Stack.Screen
        options={{headerShown: false}}
        name="ChatScreen"
        component={ChatScreen}
      />
    </Stack.Navigator>
  );
}
'CP6eYa1nKYmvo3zE3e78a7xGH9rGQeZB'

export default UserLoginStack;
