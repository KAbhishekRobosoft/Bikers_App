import {SafeAreaView, StyleSheet, Text, View,TextInput} from 'react-native';
import React, {useState} from 'react';
import OTPInputView from '@twotalltotems/react-native-otp-input';

const OtpDemo = () => {
  const [clear, setClear] = useState(false);
  const [code, setCode] = useState('');
console.log(code);
  return (
    <SafeAreaView
      style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
      <View style={styles.optView}>
        <TextInput
          name="otp"
          style={styles.otpText}
          onChangeText={value => {
            if (value.length === 4) {
              setCode(value);
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
    </SafeAreaView>
  );
};

export default OtpDemo;

const styles = StyleSheet.create({
  
  optView: {
    width: 280,
    height: 50,
    justifyContent: "center",
  },
  otpText: {
    letterSpacing: 47,
    textAlign: "left",
    height: Platform.OS === "ios" ? 30 : 40,
    marginLeft: 28,
    color: "#4EB5F4",
    fontSize: 36,
    fontFamily:'Roboto-Regular',
  },
  otpBorderView: {
    flexDirection: "row",
    justifyContent: "space-around",
    height: 10,
    width: "99%",
  },
  otpBorderView1: {
    height: 2,
    width: 39,
    opacity: 0.5,
    backgroundColor: "grey",
  },


});
