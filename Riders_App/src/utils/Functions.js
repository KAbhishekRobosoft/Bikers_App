import jwtDecode from 'jwt-decode';
import {refreshToken} from '../services/Auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

export function isTokenExpired(token) {
  var decoded = jwtDecode(token);

  if (decoded.exp < Date.now() / 1000) {
    return true;
  } else {
    return false;
  }
}

export async function getVerifiedKeys(key) {
  if (key) {
    if (!isTokenExpired(key)) {
      return key;
    } else {
      const response = await refreshToken(key);
      await AsyncStorage.setItem('token', JSON.stringify(response.token));
      return response;
    }
  } else {
    return "Enter access token"
  }
}
