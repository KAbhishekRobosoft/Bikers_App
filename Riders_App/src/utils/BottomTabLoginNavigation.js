import {StyleSheet, Image} from 'react-native';
import React from 'react';
import CreateTrip from '../screens/CreateTripScreen';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import WelcomeAboardScreen from '../screens/WelcomeAboardScreen';
import MyGarageStack from './MyGarageStack';
import UpcomingList from '../screens/AllTripScreen';

const Tab = createMaterialBottomTabNavigator();

const BottomTabLoginNavigation = () => {
  return (
    // <NavigationContainer>
    <Tab.Navigator
      shifting={true}
      initialRouteName="Home"
      activeColor="#ffffff"
      barStyle={{backgroundColor: '#ED7E2B', height: 65}}>
      <Tab.Screen
        name="Trips"
        component={UpcomingList}
        options={{
          tabBarLabel: 'Trips',
          tabBarIcon: ({focused}) => {
            return (
              <Image
                source={require('../assets/images/Bike.png')}
                style={{
                  tintColor: '#ffffff',
                  width: 35,
                  height: 22,
                  resizeMode: 'contain',
                }}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Trip2"
        component={MyGarageStack}
        options={{
          title: 'My Garage',
          tabBarIcon: ({focused}) => {
            return (
              <Image
                source={require('../assets/images/wrench.png')}
                style={{
                  tintColor: 'white',
                  width: 35,
                  height: 22,
                  resizeMode: 'contain',
                }}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Trip3"
        component={CreateTrip}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <Image
                source={require('../assets/images/list.png')}
                style={{
                  tintColor: 'white',
                  width: 35,
                  height: 22,
                  resizeMode: 'contain',
                }}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Trip4"
        component={CreateTrip}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <Image
                source={require('../assets/images/user.png')}
                style={{
                  tintColor: 'white',
                  width: 35,
                  height: 22,
                  resizeMode: 'contain',
                }}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Trip5"
        component={CreateTrip}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <Image
                source={require('../assets/images/more.png')}
                style={{
                  tintColor: 'white',
                  width: 22,
                  height: 22,
                  resizeMode: 'contain',
                }}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
    // </NavigationContainer>
  );
};

export default BottomTabLoginNavigation;

const styles = StyleSheet.create({});
