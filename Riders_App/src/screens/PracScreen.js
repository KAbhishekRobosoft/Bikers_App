import React, { useEffect } from 'react';
import {View, Text, Button} from 'react-native';
import { useSelector,useDispatch } from 'react-redux';
import { refreshToken } from '../services/Auth';
import { setToken } from '../redux/RidersSlice';
import { logOut } from '../redux/RidersSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';

function PracScreen() {
    const authData= useSelector(state=>state.auth)
    const dispatch= useDispatch()

    async function checkOut(){
        try {
          await AsyncStorage.removeItem('token');
        } catch (e) {
          console.log(e);
        }
      }

    useEffect(()=>{
          authData.userToken !== null && setTimeout(async ()=>{
          const resp= await refreshToken(authData.userToken)
          dispatch(setToken(resp.access_token))
     }, 1000);
    },[])

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button
        onPress={() => {
          checkOut();
          dispatch(logOut());
        }}
        title="logout"
      />
    </View>
  );
}

export default PracScreen;
