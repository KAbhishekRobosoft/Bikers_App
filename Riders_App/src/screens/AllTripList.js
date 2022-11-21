import React from 'react';
import {
  View,
  TextInput,
  SafeAreaView,
  StyleSheet,
  Image,
  Pressable,
} from 'react-native';
import {exp} from 'react-native/Libraries/Animated/Easing';
import UpcomingList from '../components/AllTripList';

const UpcomingTrips = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.searchView}>
        <Image
          source={require('../assets/images/search.png')}
          style={styles.searchIcon}
        />
        <TextInput
          name="Search a Trip"
          placeholder="Search a Trip"
          placeholderTextColor="rgba(166,166,166,0.87)"
          fontFamily="Roboto-Medium"
          fontSize={12}
          alignSelf={'center'}
          marginLeft={6}
          // onChangeText={text => dispatch(filterContacts(text))}
          style={styles.inputText}
        />
      </View>
      <UpcomingList />

      <Pressable style={styles.addButton}>
        <Image source={require('../assets/images/addtrip.png')} />
      </Pressable>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  searchView: {
    height: 40,
    width: '90%',
    marginTop: 40,
    alignSelf: 'center',
    flexDirection: 'row',
    shadowColor: 'rgba(0,0,0,0.24)',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 4,
    shadowOpacity: 0.9,
    elevation: 5,
    opacity: 0.9,
    backgroundColor: 'white',
  },

  inputText: {
    marginLeft: 10,
  },

  searchIcon: {
    tintColor: 'grey',
    alignSelf: 'center',
    marginLeft: 12,
  },

  addButton: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 65,
    position: 'absolute',
    bottom: 50,
    right: 20,
    height: 65,
    paddingBottom: 15,
  },
});

export default UpcomingTrips;
