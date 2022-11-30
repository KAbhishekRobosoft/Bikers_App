import React, {useEffect, useState} from 'react';
import {
  View,
  TextInput,
  SafeAreaView,
  StyleSheet,
  Image,
  Pressable,
  FlatList,
  Modal,
  Text,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import AllTripList from '../components/AllTripList';
import {UserTrips} from '../services/Auth';
import {getVerifiedKeys} from '../utils/Functions';
import {SearchUserTrips} from '../services/Auth';
import {setToken} from '../redux/AuthSlice';
import WelcomeAboardScreen2 from './WelcomeAbroadScreen2';

const AllTrips = ({navigation}) => {
  const [tripDetails, setTripDetails] = useState([]);
  const authData = useSelector(state => state.auth);
  const state = useSelector(state => state.milestone.initialState);
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(async () => {
      const key = await getVerifiedKeys(authData.userToken);
      dispatch(setToken(key));
      const tripdata = await UserTrips(key);
      setTripDetails(tripdata);
    }, 500);
  }, [state]);

  const renderItem = details => {
    return (
      <AllTripList
        navigation={navigation}
        image={details.item.tripImage}
        placeName={details.item.tripName}
        startDateText={details.item.startDate.toString()}
        endDateText={details.item.endDate.toString()}
        statusText={details.item.tripStatus}
        month={details.item.startTime.toString()}
        id={details.item._id}
      />
    );
  };
  const handleSearch = async value => {
    const key = await getVerifiedKeys(authData.userToken);
    const response = await SearchUserTrips(key, value);
    setTripDetails(response);
  };

  return (
    <>
      {tripDetails.length == 0 ? (
        <>
          <WelcomeAboardScreen2/>
        </>
      ) : (
        <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
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
              onChangeText={text => handleSearch(text)}
              style={styles.inputText}
            />
          </View>
          <FlatList
            data={tripDetails}
            keyExtractor={details => details._id}
            renderItem={renderItem}></FlatList>

          <Pressable
            style={styles.addButton}
            onPress={() => navigation.navigate('CreateTrip')}>
            <Image source={require('../assets/images/addtrip.png')} />
          </Pressable>
        </SafeAreaView>
      )}
    </>
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
    width: '70%',
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

export default AllTrips;
