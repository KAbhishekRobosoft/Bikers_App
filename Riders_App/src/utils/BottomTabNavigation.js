import {StyleSheet, Image} from 'react-native';
import React from 'react';
import CreateTrip from '../screens/CreateTripScreen';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import WelcomeAboardScreen from '../screens/WelcomeAboardScreen';
import MyGarageStack from './MyGarageStack';
import AddBikeDetails from '../screens/AddBikeDetailsScreen';
import { AddPersonalDetails } from '../screens/AddPersonalDetailsScreen';
import AllTripList from '../components/AllTripList';
import Profile from '../screens/Profile';
import ProfileStack from './ProfileStack';

const Tab = createMaterialBottomTabNavigator();

const BottomTabNavigation = () => {
  return (
    <Tab.Navigator
      shifting={true}
      initialRouteName=" WelcomeAboardScreen"
      activeColor="#ffffff"
      barStyle={{backgroundColor: '#ED7E2B', height: 65}}>
      <Tab.Screen
        name="Trips"
        component={WelcomeAboardScreen}
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
        name="Tab2"
        component={MyGarageStack}
        // listeners={{
        //   tabPress: e => {
        //     e.preventDefault();
        //   },
        // }}
        
        options={{title:"My Garage",
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
        component={AllTripList}
        listeners={{
          tabPress: e => {
            e.preventDefault();
          },
        }}
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
        // listeners={{
        //   tabPress: e => {
        //     e.preventDefault();
        //   },
        // }}
        component={ProfileStack}
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
        // listeners={{
        //   tabPress: e => {
        //     e.preventDefault();
        //   },
        // }}
        component={AddBikeDetails}
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
  );
};

export default BottomTabNavigation;

const styles = StyleSheet.create({});
