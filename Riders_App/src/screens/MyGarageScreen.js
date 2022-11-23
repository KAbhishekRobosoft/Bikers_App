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
import {GarageInputField} from '../components/InputFields';

export const MyGarage = ({navigation}) => {
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
        <View style={{marginTop: 30}}>
          <GarageInputField
            text="Book a Service"
            source={require('../assets/images/telemarketer.png')}
            onPress={() => navigation.navigate('BookServiceStack')}
          />
          <GarageInputField
            text="Service Records"
            source={require('../assets/images/folder.png')}
            onPress={() => console.log('Service Records')}
          />
          <GarageInputField
            text="Owners Manual"
            source={require('../assets/images/notebook-of-spring-with-lines-page.png')}
            onPress={() => navigation.navigate('OwnersManualStack')}
          />
          <GarageInputField
            text="Tool Kit"
            source={require('../assets/images/tOLS.png')}
            onPress={() => navigation.navigate('ToolKit')}
          />
          <GarageInputField
            text="Accessories"
            source={require('../assets/images/helmet.png')}
            onPress={() => navigation.navigate('Accessories')}
          />
        </View>
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
