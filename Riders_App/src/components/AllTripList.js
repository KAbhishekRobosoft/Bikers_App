import React from 'react';
import {View, StyleSheet, Text, ImageBackground, Image} from 'react-native';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';

const AllTripList = ({image, placeName, dateText, statusText}) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={{uri: image}}
        resizeMode="cover"
        style={styles.image}>
        <View style={styles.listContainer}>
          <View style={styles.textContainer}>
            <Text style={styles.placeName}>{placeName}</Text>
            <Text style={styles.dateText}>{dateText}</Text>
            <View style={styles.statusContainer}>
              <Text style={styles.statusText}>{statusText}</Text>
            </View>
          </View>
          <Pressable>
            <Image
              source={require('../assets/images/close.png')}
              style={styles.closeImage}
            />
          </Pressable>
        </View>
      </ImageBackground>
    </View>
  );
};

export default AllTripList;

const styles = StyleSheet.create({
  container: {
    height: 140,
    width: '90%',
    alignSelf: 'center',
    marginTop: 20,
    backgroundColor: 'grey',
    borderRadius: 5,
  },

  listContainer: {flexDirection: 'row', justifyContent: 'space-between'},
  image: {
    height: 140,
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

  statusContainer: {
    height: 21,
    borderColor: '#FFFFFF',
    borderRadius: 10,
    borderWidth: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
  },

  statusText: {
    color: '#FFFFFF',
    height: 16,
    lineHeight: 16,
    fontSize: 12,
    fontFamily: 'Roboto',
    fontWeight: '500',
    letterSpacing: 0,
  },

  textContainer: {
    marginLeft: 14,
    marginTop: 10,
  },

  closeImage: {
    tintColor: '#FFFFFF',
    height: 30,
    width: 30,
    marginRight: 5,
    marginTop: 5,
  },
});
