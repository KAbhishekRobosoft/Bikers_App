import {
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React from 'react';

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
        <View style={styles.inputTextView}>
          <Image
            source={require('../assets/images/user.png')}
            style={styles.userLogo}
          />
          <TextInput
            placeholder="Mobile Number/Email id"
            style={styles.textInput}></TextInput>
        </View>
        <View style={styles.inputTextView}>
          <Image
            source={require('../assets/images/locked.png')}
            style={styles.lockImg}
          />
          <TextInput
            placeholder="Password"
            style={styles.textInput}></TextInput>
          <Image
            source={require('../assets/images/eye.png')}
            style={styles.eyeImg}
          />
        </View>
        <Text style={styles.forgetText}>Forgot Password</Text>
      </View>
      <View style={{}}>
        <Text>Forget Password</Text>
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
    height: '25%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 99,
    height: 100,
    marginTop: 35,
  },
  loginContainer: {
    //backgroundColor: 'grey',
    width: '100%',
    height: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputTextView: {
    backgroundColor: 'grey',
    width: '90%',
    //height:'30%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
  userLogo: {width: 18, height: 24},
  lockImg: {width: 20, height: 24},
  eyeImg: {width: 24, height: 14, right: 10},
  textInput: {
    width: '90%',
    height: 50,
    // backgroundColor: 'red',
    marginVertical: 10,
    fontSize: 16,
    marginLeft: 10,
  },
  forgetText: {
    color: '#EF8B40',
    fontSize: 16,
    marginTop: 10,
    width: '90%',
    textAlign: 'right',
  },
});
