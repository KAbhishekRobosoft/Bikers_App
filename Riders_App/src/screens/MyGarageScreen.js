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
  ScrollView,
} from 'react-native';
import {useSelector} from 'react-redux';
import {GarageInputField} from '../components/InputFields';

export const MyGarage = ({navigation}) => {
  const hadBike = useSelector(state => state.auth.userCredentials);
  console.log(hadBike)
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
        {hadBike.haveBike ? (
          <View style={{marginTop: 30}}>
            <GarageInputField
              text="Book a Service"
              source={require('../assets/images/telemarketer.png')}
              onPress={() => navigation.navigate('BookServiceStack')}
              disabled = {false}
            />
            <GarageInputField
              text="Service Records"
              source={require('../assets/images/folder.png')}
              onPress={() => navigation.navigate('ServiceRecordStack')}
              disabled = {false}
            />
            <GarageInputField
              text="Owners Manual"
              source={require('../assets/images/notebook-of-spring-with-lines-page.png')}
              onPress={() => navigation.navigate('OwnersManualStack')}
              disabled = {false}
            />
            <GarageInputField
              text="Tool Kit"
              source={require('../assets/images/tOLS.png')}
              onPress={() => navigation.navigate('ToolKit')}
              disabled = {false}
            />
            <GarageInputField
              text="Accessories"
              source={require('../assets/images/helmet.png')}
              onPress={() => navigation.navigate('Accessories')}
              disabled = {false}
            />
          </View>
        ) : (
          <View style={{marginTop: 30}}>
            <GarageInputField
              text="Book a Service"
              source={require('../assets/images/telemarketer.png')}
              onPress={() => navigation.navigate('BookServiceStack')}
              disabled = {true}
            />
            <GarageInputField
              text="Service Records"
              source={require('../assets/images/folder.png')}
              onPress={() => navigation.navigate('ServiceRecordStack')}
              disabled = {true}
            />
            <GarageInputField
              text="Owners Manual"
              source={require('../assets/images/notebook-of-spring-with-lines-page.png')}
              onPress={() => navigation.navigate('OwnersManualStack')}
              disabled = {true}
            />
            <GarageInputField
              text="Tool Kit"
              source={require('../assets/images/tOLS.png')}
              onPress={() => navigation.navigate('ToolKit')}
              disabled = {false}
            />
            <GarageInputField
              text="Accessories"
              source={require('../assets/images/helmet.png')}
              onPress={() => navigation.navigate('Accessories')}
              disabled = {false}

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
