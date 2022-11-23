import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { BookService } from '../screens/BookServiceScreen';
import SearchServiceScreen from '../screens/SearchServiceScreen';
import { BookingSuccess } from '../screens/BookingSuccessScreen';
import ServiceCenterScreen from '../screens/ServiceCenterScreen';


const Stack = createNativeStackNavigator();

function BookServiceStack() {
  return (
      <Stack.Navigator initialRouteName='BookService'> 
        <Stack.Screen
          options={{headerShown: false}}
          name="BookService"
          component={BookService}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name="SearchService"
            component={SearchServiceScreen}
          />
        <Stack.Screen
          options={{headerShown: false}}
          name="ServiceCenter"
          component={ServiceCenterScreen}
        />
        {/* <Stack.Screen
          options={{headerShown: false}}
          name="ToolKit"
          component={ToolKit}
        /> */}
        <Stack.Screen
          options={{headerShown: false}}
          name="BookingSuccess"
          component={BookingSuccess}
        />
      
      </Stack.Navigator>
  );
}

export default BookServiceStack;