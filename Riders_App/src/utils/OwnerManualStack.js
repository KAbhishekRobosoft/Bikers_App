import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import OwnersManualScreen from '../screens/OwnersManualScreen';
import OwnersManualDetailScreen from '../screens/OwnersManualDetailScreen';
import OwnerManualEdit from '../screens/OwnerManualEditableScreen';

const Stack = createNativeStackNavigator();

function OwnerManualStack() {
  return (
      <Stack.Navigator initialRouteName="OwnersManual">
        <Stack.Screen
          options={{headerShown: false}}
          name="OwnersManual"
          component={OwnersManualScreen}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="OwnersManualDetail"
          component={OwnersManualDetailScreen}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="OwnerManualEdit"
          component={OwnerManualEdit}
        />
        
      </Stack.Navigator>
  );
}

export default OwnerManualStack;