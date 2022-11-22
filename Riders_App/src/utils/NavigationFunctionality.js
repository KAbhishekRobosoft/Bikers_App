import React,{useEffect} from 'react'
import {View,ActivityIndicator} from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { setToken } from '../redux/AuthSlice';
import AppTourStack from './AppTourStack'
import StackNavigation from './StackNavigation';
import PracScreen from '../screens/PracScreen';
import NewUserStack from './NewUserStack';
import { getVerifiedKeys } from './Functions';

function NavigationFunctionality() {
    const authData= useSelector(state=>state.auth)
    const dispatch= useDispatch()


    useEffect(() => {
        setTimeout(async () => {
          let userToken,cred;
          userToken = null;
          cred= null
          try {
             userToken = await AsyncStorage.getItem('token');
             console.log(userToken)
             cred = await getVerifiedKeys(userToken)
             console.log("hello")
             console.log(cred)
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
            (authData.userToken === null) ? <StackNavigation /> :((authData.userToken !== null && authData.otpVerified) ? <NewUserStack /> : null)
        ))
}

export default NavigationFunctionality