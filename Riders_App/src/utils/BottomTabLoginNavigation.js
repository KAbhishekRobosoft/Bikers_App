import {Image} from 'react-native';
import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import UpcomingList from '../screens/IndividualTripScreen';
import LogoutStack from '../utils/LogoutStack';
import Profile from '../screens/Profile';
import AllUserTrip from '../screens/AllUserTrip';
import {MyGarage} from '../screens/MyGarageScreen';
const Tab = createMaterialBottomTabNavigator();

const BottomTabLoginNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName="UpcomingList"
      activeColor="#ffffff"
      inactiveColor="blue"
      barStyle={{backgroundColor: '#ED7E2B', height: 59}}>
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
        name="Garage"
        component={MyGarage}
        options={{
          title: 'My Garage',
          tabBarIcon: ({focused}) => {
            return (
              <Image
                source={require('../assets/images/wrench.png')}
                style={{
                  tintColor: 'white',
                  width: 35,
                  height: 25,
                  resizeMode: 'contain',
                }}
              />
            );
          },
        }}
      />

      <Tab.Screen
        name="Activities"
        component={AllUserTrip}
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
                  opacity: 0.9,
                }}
              />
            );
          },
        }}
      />

      <Tab.Screen
        name="Profile"
        component={Profile}
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
                  opacity: 0.8,
                }}
              />
            );
          },
        }}
      />

      <Tab.Screen
        name="Logout"
        component={LogoutStack}
        options={{
          title: 'More',
          tabBarIcon: ({focused}) => {
            return (
              <Image
                source={require('../assets/images/more.png')}
                style={{
                  tintColor: 'white',
                  width: 27,
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

export default BottomTabLoginNavigation;
