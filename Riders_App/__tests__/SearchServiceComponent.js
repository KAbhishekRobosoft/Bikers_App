import {StyleSheet, Text, View, Image} from 'react-native';
import React, {useState} from 'react';
import {useEffect} from 'react';
import { StarComponent0, StarComponent1, StarComponent2, StarComponent3, StarComponent4, StarComponent5 } from './StarComponent';

const SearchServiceComponent = ({data, text}) => {
  return (
    <View>
      {data.length !== 0
        ? data.map(ele => {
            return (
              <View style={styles.serviceCenterView} key={ele._id}>
                <View style={styles.textView1}>
                  <Text style={styles.text1}>
                    {ele.dealerName},{ele.dealerCity}
                  </Text>
                  <Text style={styles.text2}>
                    {ele.dealerDistance ? ele.dealerDistance : 0 + 'km'}
                  </Text>
                </View>
                <Text style={styles.text3}>{ele.dealerDescription}</Text>
                <Text style={styles.text3}>+91 {ele.dealerPhoneNumber}</Text>
                <View style={styles.rating}>
                  {Math.floor(ele.dealerRating) === 0 ? (
                    <StarComponent0 />
                  ) : null}
                  {Math.floor(ele.dealerRating) === 1 ? (
                    <StarComponent1 />
                  ) : null}
                  {Math.floor(ele.dealerRating) === 2 ? (
                    <StarComponent2 />
                  ) : null}
                  {Math.floor(ele.dealerRating) === 3 ? (
                    <StarComponent3 />
                  ) : null}
                  {Math.floor(ele.dealerRating) === 4 ? (
                    <StarComponent4 />
                  ) : null}
                  {Math.floor(ele.dealerRating) === 5 ? (
                    <StarComponent5 />
                  ) : null}
                </View>
              </View>
            );
          })
        : null}
    </View>
  );
};

export default SearchServiceComponent;

const styles = StyleSheet.create({
  serviceCenterView: {
    width: '85%',
    height: 120,
    backgroundColor: 'white',
    alignSelf: 'center',
    marginVertical: 15,
    shadowColor: 'rgba(179,172,172,0.5)',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 3,
    shadowOpacity: 0.9,
    elevation: 5,
    borderRadius: 8,
    justifyContent: 'center',
  },
  textView1: {
    flexDirection: 'row',
    height: 20,
    width: '90%',
    alignSelf: 'center',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text1: {
    color: '#ED7E2B',
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    lineHeight: 21,
  },
  text2: {
    color: '#6F6D6D',
    fontFamily: 'Roboto-Regular',
    fontSize: 12,
    lineHeight: 18,
  },
  text3: {
    color: '#6F6D6D',
    fontFamily: 'Roboto-Regular',
    fontSize: 12,
    alignSelf: 'flex-start',
    marginLeft: '5.5%',
    lineHeight: 18,
  },
  rating: {
    flexDirection: 'row',
    marginLeft: '5.5%',
    height: 20,
    width: '30%',
    justifyContent: 'space-between',
  },
  ratingImg: {
    width: 16,
    height: 16,
    alignSelf: 'center',
    resizeMode: 'contain',
  },
});
