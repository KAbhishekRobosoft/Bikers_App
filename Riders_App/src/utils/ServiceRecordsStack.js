import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import OwnersManualScreen from '../screens/OwnersManualScreen';
import OwnersManualDetailScreen from '../screens/OwnersManualDetailScreen';
import { OwnerManualEdit } from '../screens/OwnerManualEditableScreen';
import ServiceRecord from '../screens/ServiceRecordScreen';
import BookingSummary from '../screens/BookingSummaryScreen';
import Invoice from '../screens/Invoice';
const Stack = createNativeStackNavigator();

function ServiceRecordStack() {
  return (
      <Stack.Navigator initialRouteName="ServiceRecords">
        <Stack.Screen
          options={{headerShown: false}}
          name="ServiceRecords"
          component={ServiceRecord}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="BookingSummary"
          component={BookingSummary}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Invoice"
          component={Invoice}
        />
        
      </Stack.Navigator>
  );
}

export default ServiceRecordStack;