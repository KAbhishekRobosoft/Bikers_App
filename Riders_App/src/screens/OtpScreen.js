import {SafeAreaView, StyleSheet, Text, View, Image, Pressable} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import OTPInputView from '@twotalltotems/react-native-otp-input';

const OtpScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.header}>
      <Pressable onPress= {()=>navigation.goBack()}>
        <Icon name="arrow-left" size={24} color="grey" />
        </Pressable>
      </View>
      <View style={styles.imgContainer}>
        <Image
          style={styles.otpImg}
          source={require('../assets/images/otpimg.png')}
        />
        <View style={styles.textView}>
          <Text style={styles.text}>We have sent an OTP to</Text>
          <Text style={styles.text}>+91-1234567890</Text>
        </View>
      </View>
      <View style={styles.bottomView}>
        <View style={styles.otpView}>
          <OTPInputView
            style={{width: '80%', height: 200, color: '#4EB5F4'}}
            pinCount={4}
            // code={this.state.code} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
            // onCodeChanged = {code => { this.setState({code})}}
            autoFocusOnLoad
            codeInputFieldStyle={styles.underlineStyleBase}
            codeInputHighlightStyle={styles.underlineStyleHighLighted}
            onCodeFilled={code => {
              console.log(`Code is ${code}, you are good to go!`);
              
            }}
          />
        </View>
        <View style={styles.textView1}>
          <Text style={styles.resendText}>Re-send Again</Text>
        </View>
        <View style={styles.textView2}>
          <Text style={styles.secondsText}>20 seconds left</Text>
        </View>
      </View>
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
    paddingHorizontal: 15,
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
    position: 'absolute',
    bottom: 0,
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    color: '#777777',
  },
  bottomView: {
    height: '52%',
    alignItems: 'center',
  },
  otpView: {
    width: 250,
    height: 60,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textView1: {
    marginTop: 50,
  },
  textView2: {
    marginTop: 30,
  },
  resendText: {
    color: '#F7931E',
  },
  secondsText: {
    color: 'rgba(174,168,168,0.87)',
  },
  underlineStyleBase: {
    width: 30,
    height: 45,
    borderWidth: 0,
    borderBottomWidth: 1,
  },

  underlineStyleHighLighted: {
    borderColor: '#D8D8D8',
  },
});
