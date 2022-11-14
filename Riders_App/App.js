import * as React from 'react';
<<<<<<< HEAD
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LoginScreen from './src/screens/LoginScreen';
=======
import {StyleSheet, Text, View} from 'react-native';
import Swiper from 'react-native-swiper';
>>>>>>> 320503698281444b9b4969fe44c14e1e02d124c3

export default function App() {
  return (
    <Swiper style={styles.wrapper}>
      <View style={styles.slide1}>
        <Text style={styles.text}>Hello Swiper</Text>
      </View>
      <View style={styles.slide2}>
        <Text style={styles.text}>Beautiful</Text>
        <Text style={styles.text}>Beautiful amazing</Text>
      </View>
      <View style={styles.slide3}>
        <Text style={styles.text}>And simple</Text>
      </View>
    </Swiper>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (<LoginScreen/>
    // <NavigationContainer>
    //   <Tab.Navigator>
    //     <Tab.Screen name="Home" component={HomeScreen} />
    //     <Tab.Screen name="Settings" component={SettingsScreen} />
    //   </Tab.Navigator>
    // </NavigationContainer>
  );
}
