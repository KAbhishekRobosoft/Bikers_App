import React from 'react';
import {View, StyleSheet, Image, TextInput, Platform} from 'react-native';

export const Input = props => {
  return (
    <View>
      <View style={styles.inputTextView}>
        <Image source={props.source} style={props.styleUser} />
        <TextInput
          placeholder={props.placeholder}
          placeholderTextColor={'#4F504F'}
          style={styles.textInput}
          keyboardType={props.keyboardType}
          secureTextEntry={props.secureTextEntry}
          returnKeyType={props.returnKey}
        />
      </View>
    </View>
  );
};

export const Password = props => {
  return (
    <View>
      <View style={styles.inputTextView}>
        <Image source={props.source} style={props.styleUser} />

        <TextInput
          placeholder={props.placeholder}
          placeholderTextColor={'#4F504F'}
          style={styles.textPassword}
          keyboardType={props.keyboardType}
          secureTextEntry={props.secureTextEntry}
        />
        <View style={styles.iconView}>
          <Image
            source={require('../assets/images/eye.png')}
            style={styles.eye}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputTextView: {
    width: '80%',
    height: 60,
    flexDirection: 'row',
    marginTop: 25,
    borderColor: '#B4B3B3',
    borderBottomWidth: 1,
    paddingBottom: 10,
    marginLeft: 40,
    // backgroundColor: 'grey',
    alignItems: 'flex-end',
  },
  imageUserView: {
    height: 26,
    width: '8%',
  },
  textInput: {
    width: '80%',
    // height: Platform.OS === 'android' ? 70 : 55,
    marginVertical: Platform.OS === 'android' ? -17 : -3,
    fontSize: 16,
    marginLeft: 10,
    fontFamily: 'Roboto-Regular',
    color: '#4F504F',
    // alignSelf: 'flex-end',
    // paddingTop: 40,
  },
  textPassword: {
    width: '83%',
    // height: Platform.OS === 'android' ? 70 : 55,
    marginVertical: Platform.OS === 'android' ? -17 : -3,
    fontSize: 16,
    marginLeft: 10,
    fontFamily: 'Roboto-Regular',
    color: '#4F504F',
    // alignSelf: 'flex-end',
    // paddingTop: 40,
  },
  user: {
    width: 23,
    height: 23.78,
  },
  lockImg: {
    width: 24,
    height: 24,
  },
  eye: {
    width: 24,
    height: 14,
  },
  iconView: {
    paddingTop: 45,
  },
});
