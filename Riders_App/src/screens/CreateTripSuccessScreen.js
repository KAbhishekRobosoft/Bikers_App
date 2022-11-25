import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Success} from '../components/SuccessComponent';
import {deSetRegistered} from '../redux/AuthSlice';
import { deleteAllTripContacts } from '../redux/ContactSlice';
import { deleteMilestonesData } from '../redux/MileStoneSlice';
import { deleteStoreTrip } from '../redux/MileStoneSlice';
import { setInitialState } from '../redux/MileStoneSlice';
export const CreateTripSuccess = ({navigation}) => {
  const data = useSelector(state => state.contact.contactsData);
  const auth = useSelector(state => state.auth)
  const state = useSelector(state => state.milestone.initialState)

  const dispatch = useDispatch();
  return (
    <Success
      greet="Success!!"
      text2="You have created a new trip"
      onPress={() => {
        dispatch(deSetRegistered());
        // dispatch(deleteAllTripContacts());
        dispatch(deleteMilestonesData());
        if(!auth.registered){
          dispatch(setInitialState(state))
          navigation.navigate('BottomTabLoginNavigation')
        }
      }}
    />
  );
};
