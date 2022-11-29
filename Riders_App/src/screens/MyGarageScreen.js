import React, {useEffect, useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  TextInput,
  View,
  Text,
  Image,
  Pressable,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {GarageInputField} from '../components/InputFields';
import {addBikeData, addBikeType} from '../redux/AccessoriesSlice';
import {getBikeDetails} from '../services/Auth';
import {getVerifiedKeys} from '../utils/Functions';
import {setLoading, deSetLoading} from '../redux/MileStoneSlice';
export const MyGarage = ({navigation}) => {
  const hadBike = useSelector(state => state.auth.userData);
  //console.log(hadBike.haveBike)
  const dispatch = useDispatch();
  const bikeType = useSelector(state => state.shop.bikeType);
  const authData = useSelector(state => state.auth);
  const loading = useSelector(state => state.milestone.isLoading);
  useEffect(() => {
    dispatch(deSetLoading());
    const get = async () => {
      let cred = await getVerifiedKeys(authData.userToken);
      const response = await getBikeDetails(cred);
      const BikeTypes = response.map(e => {
        return e.vehicleType;
      });
      console.log('bike tpyes', BikeTypes);
      dispatch(addBikeType(BikeTypes));
     // console.log('bikeType', bikeType[0]);
      dispatch(addBikeData(response));
      //console.log(response);
      dispatch(setLoading());
    };
    get();
  }, []);
  if (loading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size="large" color="orange" />
      </View>
    );
  }

  return (
    <SafeAreaView>
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}>
        <View style={styles.serviceDueView}>
          <Text style={styles.daysText}>15 Days</Text>
          <Text style={styles.daysDescription}>Next Service due</Text>
        </View>
        <Image
          source={require('../assets/images/meter.png')}
          style={styles.meterImage}
        />
        {
        // hadBike.haveBike
        true
         ? (
          <View style={{marginTop: 30}}>
            <GarageInputField
              text="Book a Service"
              source={require('../assets/images/telemarketer.png')}
              onPress={() => navigation.navigate('BookServiceStack')}
              disabled={false}
            />
            <GarageInputField
              text="Service Records"
              source={require('../assets/images/folder.png')}
              onPress={() => navigation.navigate('ServiceRecordStack')}
              disabled={false}
            />
            <GarageInputField
              text="Owners Manual"
              source={require('../assets/images/notebook-of-spring-with-lines-page.png')}
              onPress={() => {
                if (bikeType[0] === undefined) {
                  navigation.navigate('AddDetailsStack');
                } else {
                  navigation.navigate('OwnersManualStack');
                }
              }}
              disabled={false}
            />
            <GarageInputField
              text="Tool Kit"
              source={require('../assets/images/tOLS.png')}
              onPress={() => navigation.navigate('ToolKit')}
              disabled={false}
            />
            <GarageInputField
              text="Accessories"
              source={require('../assets/images/helmet.png')}
              onPress={() => navigation.navigate('Accessories')}
              disabled={false}
            />
          </View>
        ) : (
          <View style={{marginTop: 30}}>
            <GarageInputField
              text="Book a Service"
              source={require('../assets/images/telemarketer.png')}
              onPress={() => navigation.navigate('BookServiceStack')}
              disabled={true}
            />
            <GarageInputField
              text="Service Records"
              source={require('../assets/images/folder.png')}
              onPress={() => navigation.navigate('ServiceRecordStack')}
              disabled={true}
            />
            <GarageInputField
              text="Owners Manual"
              source={require('../assets/images/notebook-of-spring-with-lines-page.png')}
              onPress={() => navigation.navigate('OwnersManualStack')}
              disabled={true}
            />
            <GarageInputField
              text="Tool Kit"
              source={require('../assets/images/tOLS.png')}
              onPress={() => navigation.navigate('ToolKit')}
              disabled={false}
            />
            <GarageInputField
              text="Accessories"
              source={require('../assets/images/helmet.png')}
              onPress={() => navigation.navigate('Accessories')}
              disabled={false}
            />
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  serviceDueView: {
    alignItems: 'center',
    marginTop: 25,
  },
  daysText: {
    fontFamily: 'Roboto-Medium',
    fontSize: 17,
    color: '#E08B4D',
    lineHeight: 19,
  },
  daysDescription: {
    fontFamily: 'Roboto-Medium',
    fontSize: 14,
    color: '#E08B4D',
    lineHeight: 19,
  },
  meterImage: {
    height: 170,
    width: 320,
    alignSelf: 'center',
    marginTop: 30,
  },
});
