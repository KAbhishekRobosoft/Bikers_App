import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  Platform,
  TextInput,
  FlatList,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Contacts from 'react-native-contacts';
import {PermissionsAndroid} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useDispatch, useSelector} from 'react-redux';
import {selectMarked} from '../redux/ContactSlice';
import {selectUnMarked} from '../redux/ContactSlice';
import { addTripContacts } from '../redux/ContactSlice';

export const ContactFlatList = () => {
  const dispatch = useDispatch();
  const data = useSelector(state => state.contact.contactsData);
  console.log(data.addTripContacts)
  const handleTick = contacts => {
    dispatch(selectMarked(contacts));
    dispatch(addTripContacts(contacts))
  };

  const handleUnTick = contacts => {
    dispatch(selectUnMarked(contacts));
  };

  return (
    <FlatList
      data={data}
      renderItem={({item}) => (
        <View style={styles.pressable} key={item.recordID}>
          <View style={styles.circleView}></View>
          <Text style={styles.contactName}>{item.givenName}</Text>
          {!item.marked ? (
            <Pressable onPress={() => {handleTick(item)}}>
              <Image
                source={require('../assets/images/untick.png')}
                style={styles.tickImage}
              />
            </Pressable>
          ) : (
            <Pressable onPress={() => handleUnTick(item)}>
              <Image
                source={require('../assets/images/tick.png')}
                style={styles.tickImage}
              />
            </Pressable>
          )}
        </View>
      )}
    />
  );
};
const styles = StyleSheet.create({
  pressable: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 65,
  },
  tickImage: {
    width: 27,
    height: 27,
    marginHorizontal: '5%',
  },
  contactName: {
    marginHorizontal: 10,
    fontFamily: 'Roboto-Regular',
    fontSize: 14,
    color: 'rgba(0,0,0,0.87)',
    width: '50%',
    lineHeight: 21,
  },
  circleView: {
    backgroundColor: 'rgba(0,0,0,0.38)',
    width: 41.04,
    height: 41,
    borderRadius: 20,
    marginLeft: 60,
  },
});
