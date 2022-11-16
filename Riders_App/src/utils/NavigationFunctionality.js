import React,{useEffect} from 'react'
import {View,ActivityIndicator,Button} from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { setToken } from '../redux/RidersSlice';
import AppTourStack from './AppTourStack';
import StackNavigation from './StackNavigation';
import { logout } from '../redux/RidersSlice';
import PracScreen from '../screens/PracScreen';

function NavigationFunctionality() {
    const authData= useSelector(state=>state.auth)
    const dispatch= useDispatch()

    async function checkOut(){
      try {
        await AsyncStorage.removeItem('token');
      } catch (e) {
        console.log(e);
      }
    }

    useEffect(() => {
        setTimeout(async () => {
          let userToken;
          userToken = null;
          try {
             userToken = await AsyncStorage.getItem('token');
          } catch (e) {
            console.log(e);
          }
          dispatch(setToken(userToken))
        }, 1000);
      }, [authData.userToken]);
    
      if (authData.isLoading) {
        return (
          <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <ActivityIndicator color="green" size="large" />
          </View>
        );
      }

  return (
    
        authData.infoPage !== false ?<AppTourStack /> :(
            authData.userToken === null ? <StackNavigation /> :<PracScreen />
        ))
}

export default NavigationFunctionality