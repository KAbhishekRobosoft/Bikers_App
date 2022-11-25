import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Pressable,
  Image,
  StyleSheet
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {PlaceholderTextFieldOwnerManual} from '../components/InputFields';
import {useDispatch, useSelector} from 'react-redux';
import ButtonLarge from '../components/Buttons';
import {Field, Formik} from 'formik';
import * as yup from 'yup';

function ProfileUpdationScreen({navigation}) {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white',}}>
    <View style={styles.mainView}>
      <View style={[styles.header]}>
        <View style={styles.subHeader}>
          <Pressable
            onPress={() => {
              navigation.goBack();
            }}>
            <Icon
              name="md-arrow-back"
              color="white"
              size={25}
              style={styles.icon}
            />
          </Pressable>
          <Text style={styles.headerText}>Edit Profile Details</Text>
        </View>
      </View>
      <Image style={{height:180,width:180,alignSelf:"center",marginTop:30}} source={require('../assets/images/profileUpdate.png')} />
        <View style={styles.personalDetailView}>
          <View
            style={{
              flexDirection: 'row',
              marginTop: 20,
              marginHorizontal: '5%',
              justifyContent: 'space-between',
            }}>
            <Text style={styles.personaldetailText}>
              Edit Profile
            </Text>
          </View>
          <View style={{width: '90%', alignSelf: 'center', marginTop: 10}}>
            <Formik
              // validationSchema={personalDetailsValidation}
              initialValues={{
                userName: '',
                aboutUser: '',
              }}
              onSubmit={(values, {resetForm}) =>
                submitForm(values, {resetForm})
              }>
              {({values, handleSubmit, isValid, resetForm}) => (
                <>
                  <Field
                    component={PlaceholderTextFieldOwnerManual}
                    name="licence"
                    placeholder="Username"
                    keyboardType="default" 
                  />
                  <Field
                    component={PlaceholderTextFieldOwnerManual}
                    name="name"
                    placeholder="Short description"
                    keyboardType="default"
                  />
                  <View style={styles.btn}>
                    <ButtonLarge
                      title="Submit"
                      onPress={handleSubmit}
                      disabled={!isValid}
                    />
                  </View>

                </>
              )}
            </Formik>
          </View>
        </View>
    </View>
  </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    mainView: {
      backgroundColor: 'white',
    },
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
      justifyContent: 'space-between',
      opacity: 0.9,
    },
    subHeader: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    headerText: {
      color: '#FFFFFF',
      fontSize: 20,
      fontWeight: '500',
      marginLeft: 15,
      fontFamily: 'Roboto-Medium',
    },
    icon: {
      marginHorizontal: 20,
    },
    editImage: {
      resizeMode: 'contain',
      marginHorizontal: 25,
      width: 24,
      height: 27,
    },
    personalDetailView: {
      //height:Platform.OS==='ios'? 584:630,
      alignSelf: 'center',
      backgroundColor: '#FFFFFF',
      width: '90%',
      marginTop: 15,
      shadowColor: 'rgba(175,170,170,0.5)',
      shadowOffset: {
        width: 0,
        height: 0,
      },
      shadowRadius: 5,
      shadowOpacity: 1,
      elevation: 10,
      borderRadius: 8,
    },
    personaldetailText: {
      fontFamily: 'Roboto-Regular',
      fontSize: 20,
      lineHeight: 26,
      color: '#ED7F2C',
      width: '90%',
    },
    btn: {
      alignSelf: 'center',
      marginVertical: Platform.OS === 'ios' ? 30 : 40,
      marginBottom: 40,
     
    },
  });

export default ProfileUpdationScreen