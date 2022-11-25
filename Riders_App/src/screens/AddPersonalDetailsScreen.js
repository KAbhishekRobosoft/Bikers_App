import React, {useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  TextInput,
  View,
  Text,
  Image,
  Pressable,
  ScrollView,
  TouchableOpacity,
  Platform,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {PlaceholderTextFieldOwnerManual} from '../components/InputFields';
import {BikeDetails} from '../components/BikeDetailsComponent';
import {useDispatch, useSelector} from 'react-redux';
import {addOwnerDetails, getOwnerDetails} from '../services/Auth';
import {setUserData} from '../redux/AuthSlice';
import ButtonLarge from '../components/Buttons';
import {Field, Formik} from 'formik';
import * as yup from 'yup';

export const AddPersonalDetails = ({navigation}) => {
  const useDetails = useSelector(state => state.auth.userData);
  const dispatch = useDispatch();

  // const [licence, setLicence] = useState();
  // const [name, setName] = useState();
  // const [DoorNo, setDoorNo] = useState();
  // const [city, setCity] = useState();
  // const [state, setState] = useState();
  // const [pincode, setPincode] = useState();
  // const [mobile, setMobile] = useState();
  // const [email, setEmail] = useState();

  const submitForm = async (values, {resetForm}) => {
    console.log(values);

    const obj = {
      lisenceNumber: values.licence,
      city: values.city,
      state: values.state,
      doorNumber: values.doorNumber,
      pincode: values.pincode,
    };
    const response = await addOwnerDetails(obj);
    const userData = {
      lisenceNumber: values.licence,
      city: values.city,
      state: values.state,
      doorNumber: values.doorNumber,
      pincode: values.pincode,
      name: useDetails.name,
      mobile: useDetails.mobile,
      email: useDetails.email,
    };
    dispatch(setUserData(userData));
    
    resetForm((initialValues = ''));
   
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
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
            <Text style={styles.headerText}>Add Personal Details</Text>
          </View>
        </View>
        <ScrollView
          style={{height: '91%'}}
          showsVerticalScrollIndicator={false}>
          <View style={styles.personalDetailView}>
            <View
              style={{
                flexDirection: 'row',
                marginTop: 20,
                marginHorizontal: '5%',
                justifyContent: 'space-between',
              }}>
              <Text style={styles.personaldetailText}>
                Add Personal Details
              </Text>
            </View>
            <View style={{width: '90%', alignSelf: 'center', marginTop: 10}}>
              <Formik
                //validationSchema={personalDetailsValidation}
                initialValues={{
                  licence: '',
                  name: '',
                  doorNumber: '',
                  city: '',
                  state: '',
                  pincode: '',
                  mobile: '',
                  email: '',
                }}
                onSubmit={(values, {resetForm}) =>
                  submitForm(values, {resetForm})
                }>
                {({values, handleSubmit, isValid, resetForm}) => (
                  <>
                    <Field
                      component={PlaceholderTextFieldOwnerManual}
                      name="licence"
                      placeholder="Licence No."
                      keyboardType="numeric"
                      value={values.licence}
                    />
                    <Field
                      component={PlaceholderTextFieldOwnerManual}
                      name="name"
                      placeholder="Name"
                      keyboardType="default"
                      value={values.name}
                      editable={false}
                      defaultValue={useDetails.name}
                    />
                    <Field
                      component={PlaceholderTextFieldOwnerManual}
                      name="doorNumber"
                      placeholder="Door No."
                      keyboardType="default"
                      value={values.doorNumber}
                    />
                    <Field
                      component={PlaceholderTextFieldOwnerManual}
                      name="city"
                      placeholder="City"
                      keyboardType="default"
                      value={values.city}
                    />
                    <Field
                      component={PlaceholderTextFieldOwnerManual}
                      name="state"
                      placeholder="State"
                      keyboardType="default"
                      value={values.state}
                    />
                    <Field
                      component={PlaceholderTextFieldOwnerManual}
                      name="pincode"
                      placeholder="Pincode"
                      keyboardType="numeric"
                      value={values.pincode}
                    />
                    <Field
                      component={PlaceholderTextFieldOwnerManual}
                      name="mobile"
                      placeholder="Mobile"
                      keyboardType="default"
                      value={values.mobile}
                      editable={false}
                      defaultValue={useDetails.mobile}
                    />
                    <Field
                      component={PlaceholderTextFieldOwnerManual}
                      name="email"
                      placeholder="Email"
                      keyboardType="default"
                      value={values.email}
                      editable={false}
                      defaultValue={useDetails.email}
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
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

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
