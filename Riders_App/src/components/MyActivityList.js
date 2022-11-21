import React from 'react';
import {View, Text, StyleSheet, ImageBackground} from 'react-native';

const ActivityList = ({image}) => {
  return (
    <View>
      <View style={styles.container}>
        <ImageBackground
          source={{uri: image}}
          resizeMode="cover"
          style={styles.image}>
          <View style={styles.listContainer}>
            <View style={styles.textContainer}>
              <Text style={styles.placeName}>Reunion Manali</Text>
              <Text style={styles.dateText}>9-15 October</Text>
            </View>
          </View>
        </ImageBackground>
      </View>
      <View style={styles.point}></View>
      <Text style={styles.yearText}>2017</Text>
      <View style={styles.yearLine}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 110,
    width: '75%',
    alignSelf: 'center',
    marginTop: 20,
    backgroundColor: 'red',
    bottom: 20,
    left: 35,
  },

  listContainer: {flexDirection: 'row', justifyContent: 'space-between'},
  image: {
    height: 140,
    borderRadius: 5,
  },

  placeName: {
    color: '#FFFFFF',
    height: 28,
    lineHeight: 28,
    fontSize: 18,
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    letterSpacing: 0,
  },

  dateText: {
    color: '#FFFFFF',
    height: 28,
    lineHeight: 28,
    fontSize: 12,
    fontFamily: 'Roboto',
    fontWeight: '500',
    letterSpacing: 0,
  },
  textContainer: {
    padding: 20,
  },
  point: {
    height: 10,
    width: 10,
    backgroundColor: '#ED7E2B',
    shadowColor: '#D7762D',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 4,
    shadowOpacity: 0.9,
    elevation: 5,
    borderRadius: 10,
    top: 50,
    marginLeft: 17,
    position: 'absolute',
  },
  yearText: {
    color: '#727272',
    height: 28,
    lineHeight: 28,
    fontSize: 12,
    fontWeight: '500',
    fontFamily: 'Roboto',
    top: 42,
    left: 31,
    position: 'absolute',
  },
  yearLine: {
    borderColor: '#ED7E2B',
    height: 50,
    borderLeftWidth: 1,
    opacity: 0.53,
    left: 21.5,
    width: 3,
    // bottom: 65,
    top: 62,
    position: 'absolute',
  },
});

export default ActivityList;
