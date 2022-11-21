import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Image,
  TextInput,
  Platform,
  Text,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list';

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

export const PlaceholderTextField = props => {
  return (
    <View>
      <View style={styles.inputTextView2}>
        <View style={styles.placeholderView}>
          {props.value ? (
            <View style={styles.commonPlaceholder}>
              <Text style={styles.text}>{props.placeholder}</Text>
            </View>
          ) : (
            <></>
          )}
          <TextInput
            name={props.name}
            placeholder={props.placeholder}
            placeholderTextColor={'#4F504F'}
            style={styles.typedText}
            keyboardType={props.keyboardType}
            value={props.value}
            onChangeText={props.onChangeText}
          />
        </View>
      </View>
    </View>
  );
};
export const GarageInputField = props => {
  return (
    <Pressable onPress={props.onPress}>
      <View style={styles.garageView}>
        <Image source={props.source} style={styles.imageIcons} />
        <Text style={styles.optionsText}>{props.text}</Text>
      </View>
    </Pressable>
  );
};

export const DropDownInputField = props => {
  return (
    <View>
      <View style={styles.container}>
        <SelectList data={props.data} setSelected={props.setSelected} boxStyles={styles.dropDownBox} inputStyles={styles.dropDropInput} dropdownStyles={styles.dropDown} values={props.selected} placeholder={props.placeholder}/>
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
    alignItems: 'flex-end',
  },
  inputTextView2: {
    width: '100%',
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
  typedText: {
    width: '90%',
    marginVertical: Platform.OS === 'android' ? -17 : -3,
    fontSize: 16,
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
    width: '85%',
  },
  commonPlaceholder: {
    paddingBottom: 5,
  },
  garageView: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 70,
    borderBottomColor: 'rgba(151,151,151,0.85)',
    borderBottomWidth: 1,
    paddingLeft: 20,
  },
  imageIcons: {
    height: 32,
    width: 31,
    resizeMode: 'contain',
  },
  optionsText: {
    color: '#515251',
    fontSize: 14,
    fontFamily: 'Roboto-Medium',
    marginLeft: 10,
  },
  container: {
    flexDirection: 'column',
  },
  title: {
    color: '#949CA5',
    fontSize: 18,
    marginHorizontal: 20,
  },
  dropDownBox: {
    height: 41,
    width: '89%',
    borderColor: '#FFFFFF',
    backgroundColor: '#FFFFFF',
    borderRadius: 4,
    marginHorizontal: 39,
    marginVertical: 35,
    borderWidth: 1
  },
  dropDropInput: {
    height: 41,
    width: '85%',
    fontSize: 16,
    color: '#3C4858',
    alignSelf: 'center',
    marginHorizontal: -19.5,
    marginTop: 25,
  },
  dropDown: {
    width: '85%',
    backgroundColor: '#FFFFFF',
    borderColor: '#FFFFFF',
    borderRadius: 4,
    marginHorizontal: 39,
    marginVertical: 35
  },
});
