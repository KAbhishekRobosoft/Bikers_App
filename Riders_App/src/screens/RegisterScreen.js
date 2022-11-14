import React from 'react';
import {View, Text, StyleSheet, SafeAreaView, ScrollView} from 'react-native';
import {ButtonLarge} from '../components/Buttons';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Input} from '../components/InputFields';
import {Password} from '../components/InputFields';
import {Formik, Field} from 'formik';
import * as yup from 'yup';

const Register = () => {
  return (
    <View>
      <SafeAreaView>
        <View style={styles.header}>
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
            {({handleSubmit, isValid, values}) => (
              <>
                <Field
                  component={Input}
                  name="name"
                  placeholder="Name"
                  source={require('../assets/images/user.png')}
                  styleUser={styles.name}
                />
                <Field
                  component={Input}
                  name="mobile number"
                  placeholder="Registerted mobile number"
                  source={require('../assets/images/phone-call.png')}
                  styleUser={styles.call}
                />
                <Field
                  component={Input}
                  name="email"
                  placeholder="Email"
                  source={require('../assets/images/new-email-outline.png')}
                  styleUser={styles.email}
                />
                <Field
                  component={Password}
                  name="password"
                  placeholder="Password"
                  source={require('../assets/images/locked.png')}
                  styleUser={styles.lock}
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
      width: 1,
      height: 1,
    },
    shadowRadius: 3,
    shadowOpacity: 0.9,
    opacity: 0.85,
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
  },
  call: {
    width: 23.78,
    height: 23.78,
  },
  email: {
    width: 24,
    height: 16,
  },
  lock: {
    width: 19.56,
    height: 24,
  },
  btnView: {
    alignItems: 'center',
    marginVertical: 80,
  },
  scrollview: {
    height: '90%',
  },
});
