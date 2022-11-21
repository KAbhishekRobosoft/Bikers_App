import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ServiceCenterScreen from '../screens/ServiceCenterScreen';
import SearchServiceScreen from '../screens/SearchServiceScreen';
import {NavigationContainer} from '@react-navigation/native';
import SearchServiceComponent from '../components/SearchServiceComponent';
import OwnersManualScreen from '../screens/OwnersManualScreen';
import OwnersManualDetailScreen from '../screens/OwnersManualDetailScreen';
const Stack = createNativeStackNavigator();

function DemoStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="OwnersManualScreen">
        <Stack.Screen
          options={{headerShown: false}}
          name="OwnersManualScreen"
          component={OwnersManualScreen}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="OwnersManualDetailScreen"
          component={OwnersManualDetailScreen}
        />
        {/* <Stack.Screen
          options={{headerShown: false}}
          name="ServiceCenterScreen"
          component={OwnersManualDetailScreen}
        /> */}
      
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default DemoStack;
