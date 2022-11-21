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
  ToastAndroid,
} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {selectMarked} from '../redux/ContactSlice';
import {selectUnMarked} from '../redux/ContactSlice';
import {addTripContacts} from '../redux/ContactSlice';
import {deleteTripContacts} from '../redux/ContactSlice';
import Toast from 'react-native-simple-toast';

export const ContactFlatList = () => {
  const dispatch = useDispatch();
  const data = useSelector(state => state.contact.contactsData);
  const contactData = useSelector(state => state.contact.addTripContacts);

  const handleTick = contacts => {
    if (contactData.length > 5) Toast.show('Only 5 members in a trip');
    else {
      dispatch(selectMarked(contacts));
      dispatch(addTripContacts(contacts));
    }
  };

  const handleUnTick = contacts => {
    dispatch(selectUnMarked(contacts));
    dispatch(deleteTripContacts(contacts));
  };

  return (
    <FlatList
      data={data}
      renderItem={({item}) => (
        <View style={styles.pressable} key={item.recordID}>
          <View style={styles.circleView}></View>
          <Text style={styles.contactName}>{item.givenName}</Text>
          {!item.marked ? (
            <Pressable
              onPress={() => {
                handleTick(item);
              }}>
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
