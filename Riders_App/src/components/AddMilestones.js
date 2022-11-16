import React from 'react';
import {Text, SafeAreaView, View, StyleSheet, TextInput} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';

export const Milestone = () => {
  return (
    <SafeAreaView>
      <View style={styles.milestoneView}>
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 0, y: 0.45}}
          colors={['#fbe5d4', 'rgba(255,255,255,0)']}
          style={styles.gradient}>
          <View style={styles.textView}>
            <Text style={styles.milestoneText}>Milestone 1</Text>
            <Icon name='times' size={20} color={'#A4A4A4'} style={styles.times}/>
          </View>
          <Text style={styles.description}>
            This is to make a break journey inbetween your trip
          </Text>
          <View style={styles.fromView}>
            <TextInput
              placeholder="From"
              placeholderTextColor={'rgba(79,80,79,0.92)'}
              style={styles.textFrom}
            />
          </View>
          <View style={styles.locationView}>
            <Icon
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
    backgroundColor: 'white',
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
    justifyContent: 'space-between'
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
    height: 24,
    alignSelf: 'flex-start',
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
