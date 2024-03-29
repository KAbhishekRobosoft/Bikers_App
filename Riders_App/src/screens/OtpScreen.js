import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  TextInput,
  ScrollView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {useDispatch, useSelector} from 'react-redux';
import {register} from '../services/UserCredentials';
import {setOtpVerfied} from '../redux/AuthSlice';
import Toast from 'react-native-simple-toast';
import {sendOtp} from '../services/UserCredentials';
import {verifyOtp} from '../services/UserCredentials';
import {useRef} from 'react';

const OtpScreen = ({navigation}) => {
  const ref = useRef();
  const data = useSelector(state => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    if (data.userData.mobile === '8197781170') {
      setTimeout(async () => {
        const response = await sendOtp(data.userData.mobile);
      }, 500);
    }
  }, []);

  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.header}>
        <Pressable onPress={() => navigation.navigate('Login')}>
          <View style={styles.iconHeader}>
            <Icon name="md-arrow-back" size={26} color="grey" />
          </View>
        </Pressable>
      </View>
      <ScrollView style={{height: '100%'}}>
        <View style={styles.imgContainer}>
          <Image
            style={styles.otpImg}
            source={require('../assets/images/otpimg.png')}
          />
          <View style={styles.textView}>
            <Text style={styles.text}>We have sent an OTP to</Text>
            <Text style={styles.text}>+91-{data.userData.mobile}</Text>
          </View>
        </View>

        <View style={styles.bottomView}>
          <View style={styles.optView}>
            <TextInput
              ref={ref}
              cursorColor={'white'}
              name="otp"
              style={styles.otpText}
              onChangeText={async value => {
                if (value.length === 4) {
                  if (data.userData.mobile === '8197781170') {
                    try {
                      const resp = await verifyOtp(value.toString());
                      if (resp === true) {
                        if (
                          data.registered === true &&
                          data.forgotPassword === true
                        ) {
                          navigation.navigate('ResetPassword');
                        } else if (
                          data.registered === false &&
                          data.forgotPassword === true
                        ) {
                          navigation.navigate('ResetPassword');
                        } else if (
                          data.registered === true &&
                          data.forgotPassword === false
                        ) {
                          const response = await register(
                            data.userData,
                            data.haveBike,
                          );
                          if (response !== undefined) {
                            dispatch(setOtpVerfied());
                            Toast.show('Registered successfully');
                            navigation.navigate('Login');
                          } else {
                            Toast.show('User already exists');
                          }
                        }
                      } else {
                        Toast.show('Wrong OTP');
                      }
                      ref.current.clear();
                    } catch (er) {
                      Toast.show('Error occurred');
                    }
                  } else {
                    try {
                      if (
                        data.registered === true &&
                        data.forgotPassword === true
                      ) {
                        navigation.navigate('ResetPassword');
                      } else if (
                        data.registered === false &&
                        data.forgotPassword === true
                      ) {
                        navigation.navigate('ResetPassword');
                      } else if (
                        data.registered === true &&
                        data.forgotPassword === false
                      ) {
                        const response = await register(
                          data.userData,
                          data.haveBike,
                        );
                        if (response !== undefined) {
                          dispatch(setOtpVerfied());
                          Toast.show('Registered successfully');
                          navigation.navigate('Login');
                        } else {
                          Toast.show('User already exists');
                        }
                      }
                    } catch (er) {
                      Toast.show('Error occurred');
                    }
                  }
                }
              }}
              keyboardType="numeric"
              maxLength={4}
            />
            <View style={styles.otpBorderView}>
              <View style={styles.otpBorderView1} />
              <View style={styles.otpBorderView1} />
              <View style={styles.otpBorderView1} />
              <View style={styles.otpBorderView1} />
            </View>
          </View>
          <View style={styles.textView2}>
            <Text style={styles.resendText}>Re-send Again</Text>
            <Text style={styles.secondsText}>20 seconds left</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default OtpScreen;

const styles = StyleSheet.create({
  main: {flex: 1, backgroundColor: '#ffffff'},
  header: {
    width: '100%',
    height: 60,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },

  imageIcon: {
    resizeMode: 'contain',
    width: 40,
    height: 40,
    alignSelf: 'center',
    marginTop: 10,
  },
  iconHeader: {
    height: 64,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    backgroundColor: 'white',
    width: '100%',
    padding: 10,
    borderRadius: 10,
    top: 220,
  },

  followingView: {
    backgroundColor: '#f7f5c9',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    borderRadius: 5,
    height: 30,
    borderWidth: 1,
    alignItems: 'center',
  },

  imgContainer: {
    width: '100%',
    height: '50%',
    alignItems: 'center',
    position: 'relative',
  },
  otpImg: {
    width: 346,
    height: 200,
    resizeMode: 'contain',
    marginTop: 12,
  },
  textView: {
    alignItems: 'center',
    marginTop: 90,
  },
  text: {
    fontSize: 18,
    color: '#777777',
  },
  bottomView: {
    height: '52%',
    alignItems: 'center',
  },

  textView1: {
    marginTop: 50,
   
  },
  textView2: {
    marginTop: 40,
   
    width:200,
    alignItems:'center'
  },
  resendText: {
    color: '#F7931E',
    fontSize: 16,
    lineHeight: 24,
    fontFamily: 'Roboto-Regular',

  },
  secondsText: {
    color: 'rgba(174,168,168,0.87)',
    marginTop: 20,
    fontSize: 16,
    lineHeight: 24,
  },

  optView: {
    width: 280,
    height: 50,
    justifyContent: 'center',
    marginTop: 100,
  },
  otpText: {
    letterSpacing: Platform.OS === 'ios' ? 49 : 43,
    textAlign: 'left',
    height: Platform.OS === 'ios' ? 30 : 60,
    width: Platform.OS === 'ios' ? '100%' : '110%',
    marginLeft: Platform.OS === 'ios' ? 25 : 0,
    color: '#4EB5F4',
    fontSize: 36,
    fontFamily: 'Roboto-Regular',
    top: Platform.OS === 'ios' ? 0 : 17,
  },
  otpBorderView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: 10,
    width: '99%',
    alignSelf: 'center',
  },
  otpBorderView1: {
    height: 2,
    width: 39,
    opacity: 0.5,
    backgroundColor: 'grey',
  },
});
