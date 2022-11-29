import {StyleSheet, Image, Platform} from 'react-native';
import React from 'react';
import CreateTrip from '../screens/CreateTripScreen';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import WelcomeAboardScreen from '../screens/WelcomeAboardScreen';
import MyGarageStack from './MyGarageStack';
import UpcomingList from '../screens/AllTripScreen';
import Profile from '../screens/Profile';
import ProfileStack from './ProfileStack';
import {AddPersonalDetails} from '../screens/AddPersonalDetailsScreen';
import AddBikeDetails from '../screens/AddBikeDetailsScreen';
import LogoutScreen from '../screens/LogoutScreen';
import pop, {BottomPopUpMenu} from '../components/PopUpMenu';
import { logOut } from '../redux/AuthSlice';
import LogoutStack from './LogoutStack';
const Tab = createMaterialBottomTabNavigator();

const BottomTabLoginNavigation = () => {
  return (
    <Tab.Navigator
      shifting={true}
      initialRouteName="Home"
      activeColor="#ffffff"
      barStyle={{backgroundColor: '#ED7E2B', height:Platform.OS==='ios'? 65:62}}>
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
        name="Trip3"
        component={UpcomingList}
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

const styles = StyleSheet.create({});
