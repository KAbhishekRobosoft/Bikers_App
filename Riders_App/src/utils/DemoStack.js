import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ServiceCenterScreen from '../screens/ServiceCenterScreen';
import SearchServiceScreen from '../screens/SearchServiceScreen';
import {NavigationContainer} from '@react-navigation/native';
import SearchServiceComponent from '../components/SearchServiceComponent';
const Stack = createNativeStackNavigator();

function DemoStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SearchServiceScreen">
        <Stack.Screen
          options={{headerShown: false}}
          name="SearchServiceScreen"
          component={SearchServiceScreen}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="ServiceCenterScreen"
          component={ServiceCenterScreen}
        />
      
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default DemoStack;
