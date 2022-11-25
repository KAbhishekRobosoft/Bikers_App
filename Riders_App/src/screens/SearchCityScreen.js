import React, {useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  TextInput,
  View,
  Text,
  Image,
  Pressable,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {searchCity} from '../services/Auth';
import uuid from 'react-native-uuid';
import { whereTo } from '../redux/MileStoneSlice';
import { useDispatch } from 'react-redux';

export const SearchCity = ({navigation}) => {
  const [text, setText] = useState('');
  const [data, setData] = useState([]);
  const dispatch = useDispatch();

  const search = async value => {
    setText(value);
    const Data = await searchCity(value);
    setData(Data);
  };
  return (
    <SafeAreaView>
      <View style={styles.container}>
        {text ? (
          <View style={styles.form1}></View>
        ) : (
          <View style={styles.form}></View>
        )}
        <View>
          <>
            {text ? (
              <View style={styles.placeholder}>
                <Text style={styles.text}>Where To?</Text>
              </View>
            ) : (
              <></>
            )}
          </>
        </View>
        <View style={{flexDirection: 'row'}}>
          <TextInput
            name="search"
            placeholder="Where To?"
            placeholderTextColor={'rgba(141,138,138,0.87)'}
            value={text}
            onChangeText={value => search(value)}
            style={styles.textInput}
          />
          <Icon
            name="times"
            size={20}
            color={'#A4A4A4'}
            style={styles.times}
          />
        </View>
      </View>
      {data.length !== 0
        ? data.map(ele => {
            return (
              <Pressable key={uuid.v4()} onPress={() => {
                navigation.navigate('CreateTrip');
                dispatch(whereTo(ele.geo.name))
              }}>
                <View
                  style={styles.resultContainer}>
                  <View style={styles.locationImage}>
                    <Image
                      source={require('../assets/images/Facebook_Places.png')}
                      style={styles.image}
                    />
                    <View style={styles.cityView}>
                      <Text style={styles.cityName}>{ele.geo.name}</Text>
                      <Text style={styles.cityCode}>Udupi - 576105</Text>
                    </View>
                    <View style={styles.kmView}>
                      <Text style={styles.km}>300 km</Text>
                    </View>
                  </View>
                </View>
              </Pressable>
            );
          })
        : null}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 36,
    flexDirection: 'column',
    height: 60,
    borderBottomWidth: 1,
    borderBottomColor: '#B4B3B3',
  },
  placeholder: {
    marginTop: 7,
  },
  textInput: {
    color: 'rgba(0,0,0,0.87)',
    fontFamily: 'Roboto-Medium',
    fontSize: 16,
    fontWeight: '500',
    height: 20,
    width: '80%',
  },
  resultContainer: {
    height: 70,
    borderBottomWidth: 1,
    marginHorizontal: 36,
    borderBottomColor: '#979797',
    marginTop: 30,
  },
  image: {
    height: 19,
    width: 14,
  },
  locationImage: {
    flexDirection: 'row',
  },
  cityView: {
    marginLeft: 10,
    width: '78%',
  },
  cityName: {
    color: 'rgba(0,0,0,0.87)',
    fontFamily: 'Roboto-Medium',
    fontSize: 16,
    fontWeight: '500',
  },
  cityCode: {
    color: 'rgba(118,115,115,0.87)',
    fontFamily: 'Roboto-Regular',
    fontSize: 14,
    marginVertical: 5,
  },
  km: {
    marginTop: 20,
    fontFamily: 'Roboto-Regular',
    fontSize: 14,
    color: '#888585',
  },
  form1: {
    marginTop: Platform.OS == 'ios' ? 14 : 15,
  },

  form: {
    marginTop: Platform.OS == 'ios' ? 40 : 30,
  },
  text: {
    height: 17,
    color: Platform.OS == 'ios' ? '#7A7A7A' : '#7A7A7A',
    fontSize: 14,
    letterSpacing: 0.29,
    lineHeight: 17,
  },
  times: {
    marginHorizontal: '14%',
  },
});
