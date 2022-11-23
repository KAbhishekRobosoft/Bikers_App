import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {StarComponent5} from './StarComponent';

const NewServiceRecordDetails = () => {
  return (
    <View style={[styles.container, styles.shadow]}>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        colors={['#E59152', '#EFB97B']}
        style={styles.gradientCreateButton}>
        <Text
          style={{
            marginLeft: '25%',
            color: '#ffffff',
          }}>
          New
        </Text>
      </LinearGradient>
      <View style={styles.textContainer}>
        <View
          style={{
            flexDirection: 'row',
            marginLeft: '5%',
            alignItems: 'center',
          }}>
          <Text style={[styles.dateText, {color: '#ED7F2C'}]}>15</Text>
          <View style={{marginLeft: '5%'}}>
            <Text style={[styles.monthText, {color: '#ED7F2C'}]}>Nov</Text>
            <Text style={[styles.yearText, {color: '#ED7F2C'}]}>2017</Text>
          </View>
        </View>
        <View style={styles.line}></View>
        <View style={{justifyContent: 'flex-start', right: 20}}>
          <Text style={styles.serviceText}>General Service</Text>
          <StarComponent5 />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    shadowColor: 'rgba(175,170,170,0.5)',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 8,
    shadowOpacity: 0.9,
    elevation: 10,
    opacity: 0.9,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    height: 100,
    marginTop: 20,
  },
  shadow: {
    backgroundColor: '#FFFFFF',
    shadowColor: 'grey',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 3,
    shadowOpacity: 0.9,
    elevation: 5,
    borderRadius: 10,
  },

  gradientCreateButton: {
    shadowColor: 'rgba(100,100,100,0.5)',
    flexDirection: 'row',
    width: '17%',
    alignItems: 'center',
    alignSelf: 'flex-end',
    height: 27,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 8,
  },
  dateText: {
    fontFamily: 'Roboto Black',
    fontSize: 43,
    fontWeight: '900',
    height: 50,
    lineHeight: 50,
  },
  monthText: {
    fontFamily: 'Roboto Bold',
    fontSize: 18,
  },

  yearText: {
    fontFamily: 'Roboto',
    fontSize: 15,
  },
  line: {
    borderLeftWidth: 1,
    height: 62,
    opacity: 0.17,
    borderColor: '#979797;',
  },

  textContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  serviceText: {
    color: '#6F6D6D',
    fontFamily: 'Roboto',
    fontSize: 12,
    left: '5%',
  },
});
export default NewServiceRecordDetails;

export const PastServiceRecordDetails = () => {
  return (
    <View style={[styles.container, styles.shadow]}>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        colors={['#10B691', '#3EE1BC']}
        style={styles.gradientCreateButton}>
        <Text
          style={{
            marginLeft: '25%',
            color: '#ffffff',
          }}>
          Past
        </Text>
      </LinearGradient>
      <View style={styles.textContainer}>
        <View
          style={{
            flexDirection: 'row',
            marginLeft: '5%',
            alignItems: 'center',
          }}>
          <Text style={[styles.dateText, {color: '#1CB391'}]}>15</Text>
          <View style={{marginLeft: '5%'}}>
            <Text style={[styles.monthText, {color: '#1CB391'}]}>Nov</Text>
            <Text style={[styles.yearText, {color: '#1CB391'}]}>2017</Text>
          </View>
        </View>
        <View style={styles.line}></View>
        <View style={{justifyContent: 'flex-start', right: 20}}>
          <Text style={styles.serviceText}>General Service</Text>
          <StarComponent5 />
        </View>
      </View>
    </View>
  );
};