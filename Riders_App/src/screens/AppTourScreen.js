import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import Swiper from 'react-native-swiper';
import SmallButton from '../components/SmallButton';
import ButtonLarge from '../components/Buttons'

function AppTourScreen() {
  
  return (
    <Swiper
      dotStyle={{width: 10, height: 10, borderRadius: 10}}
      dotColor="#F7931E"
      activeDotStyle={{width: 14, height: 14, borderRadius: 10}}
      activeDotColor="orange"
      loop={false}>
      <View style={styles.slide1}>
        <View style={styles.appIntroBut1}>
          <SmallButton name="Skip" />
        </View>
        <Image
          style={styles.appIntroPic1}
          source={require('../assets/images/Illustration.png')}
        />
        <Text style={styles.appIntroText1}>Ride Free</Text>
        <Text style={styles.appIntroText2}>
          Create a hassle free ride{'\n'}anytime and anywhere
        </Text>
      </View>
      <View style={styles.slide2}>
        <View style={styles.appIntroBut1}>
          <SmallButton name="Skip" />
        </View>
        <Image
          style={styles.appIntroPic2}
          source={require('../assets/images/Illustartion_2.png')}
        />
        <Text style={styles.appIntroText3}>Know your Bike</Text>
        <Text style={styles.appIntroText2}>Keep your bike fettle!</Text>
      </View>
      <View style={styles.slide3}>
        <Image
          style={styles.appIntroPic3}
          source={require('../assets/images/Illustration_3.png')}
        />
        <Text style={styles.appIntroText4}>Your Cart</Text>
        <Text style={styles.appIntroText2}>Book bike online and shop{'\n'}accessories</Text>
        <View style={styles.registerButton}>
            <ButtonLarge title="REGISTER" />
        </View>
      </View>
    </Swiper>
  );
}

const styles = StyleSheet.create({
  wrapper: {},
  slide1: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems:"center"
  },

  appIntroBut1: {
    alignSelf: 'flex-end',
    marginRight: 10,
    marginTop: 19,
  },

  registerButton:{
    width:'100%',
    alignItems:"center",
    marginTop:27

  },

  appIntroPic3: {
    width: '100%',
    marginTop: 74.96,
    height: '38%',
  },

  appIntroText2: {
    fontFamily: 'Roboto-Regular',
    lineHeight: 19,
    fontSize: 14,
    textAlign: 'center',
    marginTop: 23,
    color: '#717171',
  },

  appIntroText4: {
    lineHeight: 29,
    fontSize: 22,
    fontFamily: 'Roboto-Regular',
    textAlign: 'center',
    marginTop:34.04
  },

  appIntroText3: {
    fontFamily: 'Roboto-Regular',
    lineHeight: 29,
    fontSize: 22,
    textAlign: 'center',
    marginTop: 35,
    color: '#585858',
  },

  appIntroText1: {
    marginTop: 34,
    textAlign: 'center',
    fontFamily: 'Roboto-Regular',
    lineHeight: 25,
    fontSize: 22,
  },

  appIntroPic1: {
    marginTop: 16,
  },

  appIntroPic2: {
    marginTop: 45,
    marginLeft: 10,
    marginRight: 14,
  },

  slide2: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems:"center"
  },

  slide3: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems:"center"
  },

  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
});

export default AppTourScreen;
