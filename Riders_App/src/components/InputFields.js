import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  TextInput,
} from 'react-native';

export const Input = props => {
  return (
    <View style={styles.container}>
      <View style={styles.inputTextView}>
        <View style={styles.imageUserView}>
          <Image source={props.source} style={props.styleUser} />
        </View>
        <TextInput
          placeholder={props.placeholder}
          placeholderTextColor={'#4F504F'}
          style={styles.textInput}
        />
      </View>
    </View>
  );
};

export const Password = props => {
  return (
    <View style={styles.container}>
      <View style={styles.inputTextView}>
        <View style={styles.imageUserView}>
          <Image source={props.source} style={props.styleUser} />
        </View>
        <TextInput
          placeholder={props.placeholder}
          placeholderTextColor={'#4F504F'}
          style={styles.textInput}
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
  container: {
    alignItems: 'center',
    height: 75,
  },
  inputTextView: {
    width: '80%',
    flexDirection: 'row',
    marginTop: 25,
    borderColor: '#B4B3B3',
    borderBottomWidth: 1,
  },
  imageUserView: {
    marginTop: 36,
    height: 26,
    width: '8%'
  },
  textInput: {
    width: '80%',
    height: 55,
    marginVertical: 7,
    fontSize: 16,
    marginLeft: 10,
    fontFamily: 'Roboto-Regular',
    color: '#4F504F',
    paddingTop: 35,
    textAlign: 'left'
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
