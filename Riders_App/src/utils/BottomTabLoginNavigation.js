import {Image} from 'react-native';
import React from 'react';
import AddBikeDetails from '../screens/AddBikeDetailsScreen';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import WelcomeAboardScreen from '../screens/WelcomeAboardScreen';
import MyGarageStack from './MyGarageStack';
import UpcomingList from '../screens/IndividualTripScreen';
import Profile from '../screens/Profile';
import ProfileStack from './ProfileStack';
import AllUserTrip from '../screens/AllUserTrip';

const Tab = createMaterialBottomTabNavigator();

const BottomTabLoginNavigation = () => {
  return (
    <Tab.Navigator
      shifting={true}
      initialRouteName="UpcomingList"
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
                  opacity: 0.7,
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
                  opacity: 3,
                }}
              />
            );
          },
        }}
      />

      <Tab.Screen
        name="All Trips"
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
                }}
              />
            );
          },
        }}
      />

      <Tab.Screen
      
        name="Profile"
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
        name="Logout"
        component={LogoutStack}
        // listeners={({navigation}) => ({
        //   tabPress: e => {
        //     e.preventDefault();
        //     navigation.navigate('Logout')
        //   },
        // })}
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

export default BottomTabLoginNavigation;


