import {
  Image,
  ImageBackground,
  KeyboardAvoidingView,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React from 'react';
import ButtonLarge from '../components/Buttons';
import {Input} from '../components/InputFields';
import {Password} from '../components/InputFields';
const LoginScreen = () => {
  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.logoView}>
        <Image
          source={require('../assets/images/appicon.png')}
          style={styles.logo}
        />
      </View>
      <View style={styles.loginContainer}>
        <View style={styles.inputTextView1}>
          <Input
            source={require('../assets/images/user.png')}
            placeholderTextColor="grey"
            placeholder="Mobile Number/Email id"
            styleUser={styles.userLogo}
          />
        </View>
        <View style={styles.inputTextView2}>
          <Password
            source={require('../assets/images/locked.png')}
            placeholderTextColor="grey"
            placeholder="Password"
            styleUser={styles.lockImg}
            keyboardType="numeric"
          />
        </View>
        <Text style={styles.forgetText}>Forgot Password</Text>
        <View style={styles.buttonView}>
          <ButtonLarge title="LOGIN" />
        </View>
      </View>
      <View style={styles.bottomView}>
        <ImageBackground
          style={styles.bgImage}
          source={require('../assets/images/BG.png')}>
          <View style={styles.bottomImgView}>
            <Image
              style={styles.bottomImg1}
              source={require('../assets/images/fb.png')}
            />
            <Image
              style={styles.bottomImg2}
              source={require('../assets/images/g.png')}
            />
          </View>
          <View style={styles.bottomTextView}>
            <Text style={styles.bottomText1}>Don't have an account?</Text>
            <Text style={styles.bottomText2}> Register</Text>
          </View>
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  logoView: {
    width: '100%',
    height: '22%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 99,
    height: 100,
    marginTop: 70,
  },
  loginContainer: {
    width: '100%',
    height: '45%',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  inputTextView1: {
    width: '120%',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: '8%',
  },
  inputTextView2: {
    width: '116%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingRight: '9%',
  },
  userLogo: {width: 18, height: 24},
  lockImg: {width: 20, height: 24},
  eyeImg: {width: 24, height: 14, right: 10},
  textInput: {
    width: '90%',
    height: 50,
    marginVertical: 7,
    fontSize: 16,
    marginLeft: 10,
    fontFamily: 'Roboto-Regular',
  },
  forgetText: {
    color: '#EF8B40',
    fontSize: 16,
    marginTop: 20,
    width: '88%',
    textAlign: 'right',
    fontFamily: 'Roboto-Regular',
  },
  buttonView: {
    marginTop: 30,
    position: 'absolute',
    bottom: 0,
  },
  bottomView: {
    width: '100%',
    height: '100%',
  },
  bgImage: {
    width: '100%',
    height: 261,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomImgView: {
    flexDirection: 'row',
    width: '35%',
    justifyContent: 'space-between',
    marginTop: 40,
    height: '30%',
    alignItems: 'center',
  },
  bottomImg1: {
    width: 60,
    height: 60,
    paddingHorizontal: 10,
  },
  bottomImg2: {
    width: 57,
    height: 57,
    paddingHorizontal: 10,
  },
  bottomTextView: {
    flexDirection: 'row',
    marginVertical: 40,
  },
  bottomText1: {
    color: '#ADAFB1',
    fontSize: 16,
    fontFamily: 'Roboto-Regular',
  },
  bottomText2: {
    color: '#F49D5C',
    fontSize: 16,
    fontFamily: 'Roboto-Regular',
  },
});
