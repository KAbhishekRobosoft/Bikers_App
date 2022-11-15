import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TextInput,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import ButtonLarge from '../components/Buttons';

const ResetPasswordScreen = () => {
  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.header}>
        <Icon name="arrow-left" size={24} color="grey" />
      </View>
      <View style={styles.imgContainer}>
        <Image
          style={styles.resetImg}
          source={require('../assets/images/resetImg.png')}
        />
        <View style={styles.textView}>
          <Text style={styles.resetText}>Reset Password</Text>
        </View>
      </View>
      <View style={styles.bottomView}>
        <View style={styles.inputTextView}>
          <TextInput
            placeholderTextColor="grey"
            placeholder="New Password"
            style={styles.textInput}
          />
        </View>
        <View style={styles.inputTextView}>
          <TextInput
            placeholderTextColor="grey"
            placeholder="Confirm Password"
            style={styles.textInput}
          />
        </View>
        <View style={styles.btn}>
          <ButtonLarge title="RESET" />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ResetPasswordScreen;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  header: {
    width: '100%',
    height: 60,
    justifyContent: 'center',
    paddingHorizontal: 15,
  },
  imgContainer: {
    width: '100%',
    height: '38%',
    alignItems: 'center',
    position: 'relative',
  },
  resetImg: {
    width: 290,
    height: 200,
    resizeMode: 'contain',
    marginTop: 10,
  },
  textView: {
    position: 'absolute',
    bottom: 0,
    alignItems: 'center',
  },
  resetText: {
    fontSize: 20,
    color: '#575656',
    fontFamily: 'Roboto-Regular',

  },
  bottomView: {
    height: '52%',
    alignItems: 'center',
    paddingTop: 40,
  },

  textInput: {
    width: '100%',
    height: 50,
    marginVertical: 7,
    fontSize: 16,
    fontFamily: 'Roboto-Regular',
    color: 'black',
  },
  inputTextView: {
    width: '85%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 5,
    borderBottomWidth: 1,
    borderColor: '#B4B3B3',
    height: 50,
    marginTop: 15,
    paddingTop:"5%"
  },
  btn: {
    marginTop: 40,
  },
});
