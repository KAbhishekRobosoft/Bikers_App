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
      await AsyncStorage.setItem(
        'token',
        JSON.stringify(response.access_token),
      );
      return response.access_token;
    }
  } else {
    return 'Enter access token';
  }
}

export const month = {
  1: 'Jan',
  2: 'Feb',
  3: 'Mar',
  4: 'Apr',
  5: 'May',
  6: 'Jun',
  7: 'Jul',
  8: 'Aug',
  9: 'Sep',
  10: 'Oct',
  11: 'Nov',
  12: 'Dec',
};
