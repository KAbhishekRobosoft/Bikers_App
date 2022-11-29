import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {NavigationContainer} from '@react-navigation/native';
import OwnersManualScreen from '../screens/OwnersManualScreen';
import OwnersManualDetailScreen from '../screens/OwnersManualDetailScreen';
import { OwnerManualEdit } from '../screens/OwnerManualEditableScreen';
import {MyGarage} from '../screens/MyGarageScreen'
import { BookService } from '../screens/BookServiceScreen';
import {ToolKit} from '../screens/ToolKitScreen'
import {Accessories} from '../screens/AccessoriesScreen'
import OwnerManualStack from './OwnerManualStack';
import BookServiceStack from './BookServiceStack';
import ServiceRecordStack from './ServiceRecordsStack';
import AddDetailsStack from './AddDetailsStack';
const Stack = createNativeStackNavigator();

function MyGarageStack() {
  return (
      <Stack.Navigator initialRouteName="Garage">
        <Stack.Screen
          options={{headerShown: false}}
          name="Garage"
          component={MyGarage}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="BookServiceStack"
          component={BookServiceStack}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="ServiceRecordStack"
          component={ServiceRecordStack}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="OwnersManualStack"
          component={OwnerManualStack}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="ToolKit"
          component={ToolKit}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Accessories"
          component={Accessories}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="AddDetailsStack"
          component={AddDetailsStack}
        />
      
      </Stack.Navigator>
  );
}

export default MyGarageStack;