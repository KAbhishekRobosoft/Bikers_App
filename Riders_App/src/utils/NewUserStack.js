import React from 'react';
import RegisterUserIntro from '../screens/RegisterUserIntro';
import ImageSuccessPage from '../screens/ImageSuccessPage';
import NewUserSubStack from './NewUserSubStack';
import {useSelector} from 'react-redux';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import UserLoginStack from './UserLoginNAvigationStack';
import {AddPersonalDetails} from '../screens/AddPersonalDetailsScreen';
import AddBikeDetails from '../screens/AddBikeDetailsScreen';

const Stack = createNativeStackNavigator();

function NewUserStack() {
  const bikeData = useSelector(state => state.shop.allBikeData);
  const authData = useSelector(state => state.auth);

  return authData.registered ? (
    bikeData.length > 0 ? (
      <Stack.Navigator initialRouteName="subStack">
        <Stack.Screen
          options={{headerShown: false}}
          name="subStack"
          component={NewUserSubStack}
        />
      </Stack.Navigator>
    ) : (
      <Stack.Navigator initialRouteName="RegisterUserIntro">
        <Stack.Screen
          options={{headerShown: false}}
          name="newUserTour"
          component={RegisterUserIntro}
        />

        <Stack.Screen
          options={{headerShown: false}}
          name="ImageSuccess"
          component={ImageSuccessPage}
        />

        <Stack.Screen
          options={{headerShown: false}}
          name="AddBikeDetails"
          component={AddBikeDetails}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="subStack"
          component={NewUserSubStack}
        />
      </Stack.Navigator>
    )
  ) : (
    <UserLoginStack />
  );
}

export default NewUserStack;
