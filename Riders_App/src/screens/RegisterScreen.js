import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Platform,
} from 'react-native';
import ButtonLarge from '../components/Buttons';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Input} from '../components/InputFields';
import {Password} from '../components/InputFields';
import {Formik, Field} from 'formik';
import * as yup from 'yup';

const registerValidationSchema = yup.object().shape({
  name: yup
    .string()
    .required('Name is required'),
  mobileNumber: yup
    .string()
    .matches(/(\d){10}\b/, 'Enter a valid mobile number')
    .required('Mobile Number is required'),
  email: yup
    .string()
    .matches(/(\d){4}\b/, 'mPin must have a number')
    .max(4, ({max}) => `mPin must be${max} of characters`)
    .required('Email is required'),
  password: yup
    .string()
    .oneOf([yup.ref('mpin')], 'Mpin do not match')
    .required('Password is required'),
});

const Register = () => {
  return (
    <View>
      <SafeAreaView>
        <View style={[styles.header, styles.shadow]}>
          <Icon
            name="arrow-left"
            color={'white'}
            size={16}
            style={styles.icon}
          />
          <Text style={styles.headerText}>Register</Text>
        </View>
        <ScrollView style={styles.scrollview}>
          <Formik>
            {({handleSubmit, isValid}) => (
              <>
                <Field
                  component={Input}
                  name="name"
                  placeholder="Name"
                  source={require('../assets/images/user.png')}
                  styleUser={styles.name}
                  keyboardType="default"
                  secureTextEntry={false}
                  returnKey="next"
                />
                <Field
                  component={Input}
                  name="mobileNumber"
                  placeholder="Registerted mobile number"
                  source={require('../assets/images/phone-call.png')}
                  styleUser={styles.call}
                  keyboardType="numeric"
                  secureTextEntry={false}
                  returnKey="next"
                />
                <Field
                  component={Input}
                  name="email"
                  placeholder="Email"
                  source={require('../assets/images/new-email-outline.png')}
                  styleUser={styles.email}
                  keyboardType="email-address"
                  secureTextEntry={false}
                />
                <Field
                  component={Password}
                  name="password"
                  placeholder="Password"
                  source={require('../assets/images/locked.png')}
                  styleUser={styles.lock}
                  keyboardType="default"
                  secureTextEntry={true}
                />
                <View style={styles.btnView}>
                  <ButtonLarge title="REGISTER" />
                </View>
              </>
            )}
          </Formik>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    width: '100%',
    height: 64,
    backgroundColor: '#ED7E2B',
    alignItems: 'center',
    shadowColor: 'grey',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 3,
    shadowOpacity: 0.9,
    elevation: 5,
  },
  shadow: {
    backgroundColor: '#ED7E2B',
    shadowColor: 'grey',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 3,
    shadowOpacity: 0.9,
    elevation: 5,
  },
  headerText: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '500',
    marginLeft: 25,
    fontFamily: 'Roboto-Medium',
  },
  icon: {
    marginHorizontal: 20,
  },
  name: {
    width: 18,
    height: 24,
    // marginTop: 35,
  },
  call: {
    width: 23.78,
    height: 23.78,
    // marginTop: 35,
  },
  email: {
    width: 24,
    height: 16,
    // marginTop: 35,
  },
  lock: {
    width: 19.56,
    height: 24,
    // marginTop: 35,
  },
  btnView: {
    alignItems: 'center',
    marginVertical: Platform.OS === 'android' ? 100 : 80,
  },
  scrollview: {
    height: '90%',
  },
});
