import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  TextInput,
  Platform,
  Text,
  TouchableOpacity,
} from 'react-native';

export const Input = props => {
  const {
    field: {name, onBlur, onChange, value},
    form: {errors, touched, setFieldTouched},
    ...inputProps
  } = props;

  const hasError = errors[name] && touched[name];

  return (
    <View>
      <View style={[styles.inputTextView, hasError && styles.errorInput]}>
        <Image source={props.source} style={props.styleUser} />
        <View style={styles.placeholderView}>
          {value ? (
            <View style={styles.placeholder}>
              <Text style={styles.text}>{props.placeholder}</Text>
            </View>
          ) : (
            <></>
          )}
          <TextInput
            placeholder={props.placeholder}
            placeholderTextColor={'#4F504F'}
            style={styles.textInput}
            keyboardType={props.keyboardType}
            value={value}
            secureTextEntry={props.secureTextEntry}
            returnKeyType={props.returnKey}
            defaultValue={props.default}
            onChangeText={text => onChange(name)(text)}
            onBlur={() => {
              setFieldTouched(name);
              onBlur(name);
            }}
            {...inputProps}
          />
        </View>
      </View>

      {hasError && <Text style={styles.errorText}>{errors[name]}</Text>}
    </View>
  );
};

export const Password = props => {
  const {
    field: {name, onBlur, onChange, value},
    form: {errors, touched, setFieldTouched},
    ...inputProps
  } = props;

  const hasError = errors[name] && touched[name];

  return (
    <View>
      <View style={[styles.inputTextView, hasError && styles.errorInput]}>
        <Image source={props.source} style={props.styleUser} />
        <View style={styles.placeholderView}>
          {value ? (
            <View style={styles.placeholder}>
              <Text style={styles.text}>{props.placeholder}</Text>
            </View>
          ) : (
            <></>
          )}
          <TextInput
            placeholder={props.placeholder}
            placeholderTextColor={'#4F504F'}
            style={styles.textPassword}
            keyboardType={props.keyboardType}
            secureTextEntry={props.secureTextEntry}
            value={value}
            onChangeText={text => onChange(name)(text)}
            onBlur={() => {
              setFieldTouched(name);
              onBlur(name);
            }}
            {...inputProps}
          />
        </View>
        <View style={styles.iconView}>
          <TouchableOpacity onPress={props.onPress}>
            <Image
              source={require('../assets/images/eye.png')}
              style={styles.eye}
            />
          </TouchableOpacity>
        </View>
      </View>
      {hasError && <Text style={styles.errorText}>{errors[name]}</Text>}
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
    alignItems: 'flex-end',
  },
  inputView: {
    width: '90%',
  },
  imageUserView: {
    height: 26,
    width: '8%',
  },
  textInput: {
    marginVertical: Platform.OS === 'android' ? -17 : -3,
    fontSize: 16,
    marginLeft: 10,
    fontFamily: 'Roboto-Regular',
    color: '#4F504F',
  },
  textPassword: {
    width: '90%',
    marginVertical: Platform.OS === 'android' ? -17 : -3,
    fontSize: 16,
    marginLeft: 10,
    fontFamily: 'Roboto-Regular',
    color: '#4F504F',
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
  errorText: {
    fontSize: 10,
    color: 'red',
    alignSelf: 'center',
  },
  errorInput: {
    borderColor: 'red',
  },
  text: {
    height: 17,
    color: '#9F9F9F',
    fontSize: 14,
    letterSpacing: 0.29,
    lineHeight: 17,
  },
  placeholder: {
    marginLeft: 10,
    paddingBottom: 5,
  },
  placeholderView: {
    flexDirection: 'column',
    width: '85%'
  },
});
