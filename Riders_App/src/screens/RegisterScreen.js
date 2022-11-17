import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Platform,
  Pressable,
} from 'react-native';
import ButtonLarge from '../components/Buttons';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Input} from '../components/InputFields';
import {Password} from '../components/InputFields';
import {Formik, Field} from 'formik';
import * as yup from 'yup';
import {register} from '../services/Auth';
import axios from 'axios';

const registerValidationSchema = yup.object().shape({
  userName: yup.string().required('Name is required'),
  mobile: yup
    .string()
    .matches(/(\d){10}\b/, 'Enter a valid mobile number')
    .required(''),
  email: yup
    .string()
    .matches(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      'Email must have a number, special character, small and capital alphabets.',
    )
    .required('Email is required'),
  password: yup
    .string()
    .matches(/\w*[a-z]\w*/, 'Password must have a small letter')
    .matches(/\w*[A-Z]\w*/, 'Password must have a capital letter')
    .matches(/\d/, 'Password must have a number')
    .min(6, ({min}) => `Password must be at least ${min} characters`)
    .required(''),
});

const Register = ({navigation}) => {
  const [secureText, setSecureText] = useState(true);

  return (
    <View>
      <SafeAreaView>
        <View style={[styles.header, styles.shadow]}>
          <Pressable
            onPress={() => {
              navigation.goBack();
            }}>
            <Icon
              name="arrow-left"
              color={'white'}
              size={16}
              style={styles.icon}
            />
          </Pressable>
          <Text style={styles.headerText}>Register</Text>
        </View>
        <ScrollView style={styles.scrollview}>
          <Formik
            validationSchema={registerValidationSchema}
            initialValues={{
              userName: '',
              password: '',
              mobile: '',
              email: '',
            }}
            onSubmit={async values => {
              const response = await register(values);
              alert(response.data.message);
            }}>
            {({isValid, handleSubmit, values}) => (
              <>
                <Field
                  component={Input}
                  name="userName"
                  placeholder="Name"
                  value={values.userName}
                  source={require('../assets/images/user.png')}
                  styleUser={styles.name}
                  keyboardType="default"
                  secureTextEntry={false}
                  returnKey="next"
                  
                />
                <Field
                  component={Input}
                  name="mobile"
                  placeholder="Registerted mobile number"
                  value={values.mobile}
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
                  value={values.email}
                  source={require('../assets/images/new-email-outline.png')}
                  styleUser={styles.email}
                  keyboardType="email-address"
                  secureTextEntry={false}
                />
                <Field
                  component={Password}
                  name="password"
                  placeholder="Password"
                  value={values.password}
                  source={require('../assets/images/locked.png')}
                  styleUser={styles.lock}
                  keyboardType="default"
                  secureTextEntry={secureText}
                  onPress={() => setSecureText(!secureText)}
                />
                <View style={styles.btnView}>
                  <ButtonLarge
                    title="REGISTER"
                    disabled={!isValid}
                    onPress={handleSubmit}
                  />
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
  form1: {
    marginTop: Platform.OS == 'ios' ? 14 : 15,
  },

  form: {
    marginTop: Platform.OS == 'ios' ? 40 : 30,
  },
  text: {
    height: 17,
    marginBottom: Platform.OS == 'ios' ? 10 : -2,
    color: Platform.OS == 'ios' ? '#7A7A7A' : '#7A7A7A',
    // fontFamily: 'Proxima Nova
    fontSize: 14,
    letterSpacing: 0.29,
    lineHeight: 17,
  },
});
