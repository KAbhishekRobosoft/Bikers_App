import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Pressable,
} from 'react-native';
import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  addRecommendations,
  filterRecommendations,
} from '../redux/MileStoneSlice';
import uuid from 'react-native-uuid';

export const RecommendationTripSummary = ({recommendations}) => {
  return (
    <SafeAreaView>
      <View style={styles.containerView}>
        {recommendations.length !== 0 && (
          <Text style={styles.text}>Recommendation</Text>
        )}

        <ScrollView style={{}} horizontal>
          <View style={{flexDirection: 'row', marginTop: 20}}>
            {recommendations.length !== 0
              ? recommendations.map(e => {
                  return (
                    <View key={uuid.v4()}>
                      <Text style={styles.itemsText}>{e}</Text>
                    </View>
                  );
                })
              : null}
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const Recommendations = ({
  ridingGear,
  setRidingGear,
  setSummerWear,
  summerWear,
  setWinterWear,
  winterWear,
  setFood,
  setWater,
  food,
  water,
}) => {
  const dispatch = useDispatch();

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.text}>Recommendation</Text>
        <ScrollView
          horizontal
          style={styles.itemsView}
          bounces={false}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}>
          {!ridingGear ? (
            <Pressable
              onPress={() => {
                setRidingGear(true);
                dispatch(addRecommendations('Riding Gear'));
              }}>
              <Text style={styles.itemsText}>Riding Gear</Text>
            </Pressable>
          ) : (
            <Pressable
              onPress={() => {
                setRidingGear(false);
                dispatch(filterRecommendations('Riding Gear'));
              }}>
              <View style={styles.itemsView1}>
                <Text style={styles.itemsText1}>Riding Gear</Text>
              </View>
            </Pressable>
          )}
          {!winterWear ? (
            <Pressable
              onPress={() => {
                setWinterWear(true);
                dispatch(addRecommendations('Winter wear'));
              }}>
              <Text style={styles.itemsText}>Winter wear</Text>
            </Pressable>
          ) : (
            <Pressable
              onPress={() => {
                setWinterWear(false);
                dispatch(filterRecommendations('Winter wear'));
              }}>
              <View style={styles.itemsView1}>
                <Text style={styles.itemsText1}>Winter wear</Text>
              </View>
            </Pressable>
          )}
          {!summerWear ? (
            <Pressable
              onPress={() => {
                setSummerWear(true);
                dispatch(addRecommendations('Summer wear'));
              }}>
              <Text style={styles.itemsText}>Summer wear</Text>
            </Pressable>
          ) : (
            <Pressable
              onPress={() => {
                setSummerWear(false);
                dispatch(filterRecommendations('Summer wear'));
              }}>
              <View style={styles.itemsView1}>
                <Text style={styles.itemsText1}>Summer wear</Text>
              </View>
            </Pressable>
          )}
          {!water ? (
            <Pressable
              onPress={() => {
                setWater(true);
                dispatch(addRecommendations('Drinking water'));
              }}>
              <Text style={styles.itemsText}>Drinking water</Text>
            </Pressable>
          ) : (
            <Pressable
              onPress={() => {
                setWater(false);
                dispatch(filterRecommendations('Drinking water'));
              }}>
              <View style={styles.itemsView1}>
                <Text style={styles.itemsText1}>Drinking water</Text>
              </View>
            </Pressable>
          )}
          {!food ? (
            <Pressable
              onPress={() => {
                setFood(true);
                dispatch(addRecommendations('Food/Snacks'));
              }}>
              <Text style={styles.itemsText}>Food/Snacks</Text>
            </Pressable>
          ) : (
            <Pressable
              onPress={() => {
                setFood(false);
                dispatch(filterRecommendations('Food/Snacks'));
              }}>
              <View style={styles.itemsView1}>
                <Text style={styles.itemsText1}>Food/Snacks</Text>
              </View>
            </Pressable>
          )}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Recommendations;

const styles = StyleSheet.create({
  container: {
    height: 120,
    paddingHorizontal: 19,
    borderBottomWidth: 1,
    borderBottomColor: '#B4B3B3',

    paddingTop: 10,
  },
  containerView: {
    height: 120,
    paddingHorizontal: 19,
    paddingTop: 10,
  },
  text: {
    color: '#4F504F',
    fontSize: 18,
    fontFamily: 'Roboto-Regular',
    marginLeft: 10,
    marginTop: 10,
  },
  itemsView: {
    paddingTop: 20,
  },
  itemsText: {
    color: '#EE802E',
    fontSize: 14,
    fontFamily: 'Roboto-Regular',
    borderWidth: 1,
    borderRadius: 15,
    borderColor: '#979797',
    height: 29,
    textAlign: 'center',
    padding: 5,
    marginHorizontal: 10,
  },
  itemsText1: {
    color: '#FFFFFF',
    fontSize: 14,
    fontFamily: 'Roboto-Regular',
    marginHorizontal: 6,
    borderWidth: 0,
  },
  itemsView1: {
    borderWidth: 1,
    backgroundColor: '#EE802E',
    borderRadius: 15,
    borderColor: '#979797',
    justifyContent: 'center',
    height: 29,
    marginHorizontal: 9,
  },
});
