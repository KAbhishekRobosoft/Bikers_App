import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ServiceCenterScreen from '../screens/ServiceCenterScreen';
import SearchServiceScreen from '../screens/SearchServiceScreen';
import {NavigationContainer} from '@react-navigation/native';
import SearchServiceComponent from '../components/SearchServiceComponent';
import OwnersManualScreen from '../screens/OwnersManualScreen';
import OwnersManualDetailScreen from '../screens/OwnersManualDetailScreen';
import { OwnerManualEdit } from '../screens/OwnerManualEditableScreen';
const Stack = createNativeStackNavigator();

function DemoStack() {
  return (
      <Stack.Navigator initialRouteName="SearchServiceScreen">
        <Stack.Screen
          options={{headerShown: false}}
          name="SearchServiceScreen"
          component={SearchServiceScreen}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="ServiceCenter"
          component={ServiceCenterScreen}
        />
      
      </Stack.Navigator>
  );
}

export default DemoStack;
