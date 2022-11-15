import {
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React from 'react';
import {ButtonLarge} from '../components/Buttons';

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
          <Image
            source={require('../assets/images/user.png')}
            style={styles.userLogo}
          />
          <TextInput
            placeholderTextColor="grey"
            placeholder="Mobile Number/Email id"
            style={styles.textInput}
          />
        </View>
        <View style={styles.inputTextView2}>
          <Image
            source={require('../assets/images/locked.png')}
            style={styles.lockImg}
          />
          <TextInput
            placeholderTextColor="grey"
            placeholder="Password"
            style={styles.textInput}
          />
          <Image
            source={require('../assets/images/eye.png')}
            style={styles.eyeImg}
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
              style={styles.bottomImg}
              source={require('../assets/images/fb.png')}
            />
            <Image
              style={styles.bottomImg}
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
    marginTop: 35,
  },
  loginContainer: {
    width: '100%',
    height: '45%',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  inputTextView1: {
    width: '85%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderColor: '#B4B3B3',
  },
  inputTextView2: {
    width: '85%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    paddingHorizontal: 24,
    borderBottomWidth: 1,
    borderColor: '#B4B3B3',
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
    width: '90%',
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
    width: '32%',
    justifyContent: 'space-between',
    marginTop: 40,
  },
  bottomImg: {
    width: 49,
    height: 49,
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
