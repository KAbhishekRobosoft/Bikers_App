import React, {useState} from 'react';
import {
  Text,
  SafeAreaView,
  View,
  StyleSheet,
  TextInput,
  Pressable,
  ToastAndroid,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/FontAwesome';
import {useDispatch} from 'react-redux';
import {setMileStone} from '../redux/MileStoneSlice';
import {setMileStoneData} from '../redux/MileStoneSlice';
import {useSelector} from 'react-redux';
import {getCoordinates} from '../services/Auth';
import {calculateRoute} from '../services/Auth';
import Toast from 'react-native-simple-toast'

export const Milestone = () => {
  const mileStoneData = useSelector(state => state.milestone.milestoneData);
  console.log('', mileStoneData);
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const dispatch = useDispatch();

  return (
    <SafeAreaView>
      <View style={styles.milestoneView}>
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 0, y: 0.45}}
          colors={['#fbe5d4', 'rgba(255,255,255,0)']}
          style={styles.gradient}>
          <View style={styles.textView}>
            <Text style={styles.milestoneText}>
              Milestone {mileStoneData.length + 1}
            </Text>
            <Pressable
              onPress={async () => {

                if ((from, to !== '')) {
                  const resp = await getCoordinates(from);
                  const resp1 = await getCoordinates(to);
                  const dist = await calculateRoute(
                    resp.lat,
                    resp.lon,
                    resp1.lat,
                    resp1.lon,
                  );
                  const msInHour = 1000 * 60 * 60;
                  if (
                    resp !== undefined &&
                    resp1 !== undefined &&
                    dist !== undefined
                  ) {
                    const obj = {
                      id: mileStoneData.length + 1,
                      source: [
                        {
                          place: from,
                          latitude: resp.lat,
                          longitude: resp.lon,
                        },
                      ],
                      destination: [
                        {
                          place: to,
                          latitude: resp1.lat,
                          longitude: resp1.lon,
                        },
                      ],
                      distance: dist.summary.lengthInMeters / 1000,
                      duration: Math.round(
                            Math.abs(
                              new Date(dist.summary.arrivalTime) -
                                new Date(dist.summary.departureTime),
                            ) / msInHour,
                          )
                    };
                    dispatch(setMileStoneData(obj));
                    dispatch(setMileStone(false));
                  }
                  else{
                    Toast.show('Enter proper location')
                  }
                } else {
                  dispatch(setMileStone(false));
                }
              }}>
              <Icon
                name="close"
                size={20}
                color={'#A4A4A4'}
                style={styles.times}
              />
            </Pressable>
          </View>
          <Text style={styles.description}>
            This is to make a break journey inbetween your trip
          </Text>
          <View style={styles.fromView}>
            <TextInput
              placeholder="From"
              placeholderTextColor={'rgba(79,80,79,0.92)'}
              style={styles.textFrom}
              onChangeText={value => setFrom(value)}
            />
          </View>
          <View style={styles.locationView}>
            <Icon2
              name="map-marker"
              color="#A4A4A4"
              style={styles.locationImage}
              size={16}
            />
            <View style={styles.locationNamesView}>
              <Text style={styles.textUdupi}>Udupi</Text>
              <Text style={styles.textCurrentLocation}>current location</Text>
            </View>
          </View>
          <View style={styles.toView}>
            <TextInput
              placeholder="To"
              placeholderTextColor={'rgba(79,80,79,0.92)'}
              style={styles.textFrom}
              onChangeText={value => setTo(value)}
            />
          </View>
        </LinearGradient>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  milestoneView: {
    shadowColor: 'grey',
    shadowOffset: {
      width: 3,
      height: 3,
    },
    shadowOpacity: 0.1,
    elevation: 5,
    // backgroundColor: 'white',
    height: 230,
    width: 321,
    alignSelf: 'center',
    borderRadius: 13,
  },
  gradient: {
    height: 230,
    width: 321,
    borderRadius: 13,
    alignSelf: 'center',
  },
  textView: {
    flexDirection: 'row',
    marginVertical: 17,
    marginHorizontal: 19,
    justifyContent: 'space-between',
  },
  milestoneText: {
    color: 'rgba(79,80,79,0.92)',
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
  },
  description: {
    color: 'rgba(219,62,62,0.92)',
    fontFamily: 'Roboto-Regular',
    fontSize: 11,
    marginHorizontal: 19,
  },
  fromView: {
    marginHorizontal: 19,
    marginVertical: 7,
    borderColor: '#B4B3B3',
    borderBottomWidth: 1,
    alignItems: 'baseline',
    width: 285,
  },
  textFrom: {
    // height: 24,
    alignSelf: 'flex-start',
    width: '60%',
    color: 'black',
    borderWidth: 1,
    // marginTop: 10
  },
  locationView: {
    height: 48,
    width: 285,
    flexDirection: 'row',
    shadowColor: 'grey',
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowRadius: 1,
    shadowOpacity: 0.3,
    elevation: 5,
    backgroundColor: 'white',
    marginHorizontal: 19,
  },
  locationImage: {
    marginHorizontal: 7,
    marginVertical: 5,
  },
  locationNamesView: {
    flexDirection: 'column',
  },
  textUdupi: {
    fontFamily: 'Roboto-Regular',
    color: '#717171',
    fontSize: 14,
    lineHeight: 19,
  },
  textCurrentLocation: {
    fontFamily: 'Roboto-Regular',
    color: 'rgba(182,182,182,0.8)',
    fontSize: 12,
    lineHeight: 16,
  },
  toView: {
    marginHorizontal: 19,
    marginVertical: 18,
    borderColor: '#B4B3B3',
    borderBottomWidth: 1,
    alignItems: 'baseline',
    width: 285,
  },
});
