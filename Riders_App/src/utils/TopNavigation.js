import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {BikeDetails} from '../components/BikeDetailsComponent';
import {PersonalDetails} from '../components/PersonalDetailsComponent';

const Tab = createMaterialTopTabNavigator();

const TopNavigation = ({editable}) => {
  return (
    <Tab.Navigator
      initialRouteName="PersonalDetails"
      screenOptions={{
        tabBarLabelStyle: {
          fontSize: 16,
          color: '#ED7F2C',
          fontFamily: 'Roboto-Regular',
          lineHeight: 21,
          marginTop: 10,
          textAlign: 'left',
          width: '130%',
          textTransform: 'none',
        },
        tabBarStyle: {
          width: '100%',
          paddingHorizontal: '5%',
        },
        tabBarItemStyle: {
          alignSelf: 'flex-start',
        },
        tabBarIndicatorStyle: {
          backgroundColor: '#ED7F2C',
          marginLeft: '8%',
          width: 12,
          height: 2,
          alignSelf: 'flex-start',
        },
      }}>
      <Tab.Screen
        name="Home"
        component={PersonalDetails}
        options={{title: 'Personal Details', upperCaseLabel: false}}
      />
      <Tab.Screen
        name="Settings"
        component={BikeDetails}
        options={{title: 'Bike Details'}}
        editable={editable}
      />
    </Tab.Navigator>
  );
};

export default TopNavigation;