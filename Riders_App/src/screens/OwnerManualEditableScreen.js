import {Formik, Field} from 'formik';
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
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {PlaceholderTextFieldOwnerManual} from '../components/InputFields';
import {BikeDetails} from '../components/BikeDetailsComponent';
import {useDispatch, useSelector} from 'react-redux';
import {updateOwnerDetails} from '../services/Auth';
import {useRoute} from '@react-navigation/native';
import { setUserData } from '../redux/AuthSlice';
// import route

export const OwnerManualEdit = ({navigation}) => {
  const userDetails = useSelector(state => state.auth.userData);
  const dispatch = useDispatch();


  // const [licence, setLicence] = useState();
  // const [name, setName] = useState();
  // const [DoorNo, setDoorNo] = useState();
  // const [city, setCity] = useState();
  // const [state, setState] = useState();
  // const [pincode, setPincode] = useState();
  // const [mobile, setMobile] = useState();
  // const [email, setEmail] = useState();

  const update = async (values) => {
    console.log('values',values)
    const obj = {
      city: values.city,
      state: values.state,
      doorNumber: values.doorNumber,
      pincode: values.pincode,
      lisenceNumber:values.licence
    };
    await updateOwnerDetails(obj);
    dispatch(setUserData(obj));
    navigation.navigate('OwnersManualDetail')
  };
  //console.log('userDetails', userDetails);
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
                color={'white'}
                size={25}
                style={styles.icon}
              />
            </Pressable>
            <Text style={styles.headerText}>Owners Manual</Text>
          </View>
          <Pressable>
            <Image
              source={require('../assets/images/share.png')}
              style={styles.editImage}
            />
          </Pressable>
        </View>
        <ScrollView style={{height: '88%'}}>
          <View style={styles.personalDetailView}>
            <Formik
              initialValues={{
                licence:userDetails.lisenceNumber,
                name: userDetails.userName,
                doorNumber: userDetails.doorNumber,
                city: userDetails.city,
                state: userDetails.state,
                pincode: userDetails.pincode,
                mobile: '',
                email: '',
              }}
              onSubmit={
                (values) => update(values)
                //console.log('00')
              }>
              {({values, handleSubmit, isValid, resetForm}) => (
                <>
                  <View
                    style={{
                      flexDirection: 'row',
                      marginTop: 20,
                      marginHorizontal: '5%',
                      justifyContent: 'space-between',
                    }}>
                    <Text style={styles.personaldetailText}>
                      Personal Details
                    </Text>
                    <Pressable onPress={handleSubmit}>
                      <Image source={require('../assets/images/save.png')} />
                    </Pressable>
                  </View>
                  <View
                    style={{width: '90%', alignSelf: 'center', marginTop: 20}}>
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
                    />
                    <Field
                      component={PlaceholderTextFieldOwnerManual}
                      name="email"
                      placeholder="Email"
                      keyboardType="default"
                      value={values.email}
                      editable={false}
                    />
                  </View>
                </>
              )}
            </Formik>
          </View>
          <View style={{marginTop: 10}}>
            <BikeDetails header="Bike Details" />
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
    height: 584,
    alignSelf: 'center',
    backgroundColor: '#FFFFFF',
    width: '90%',
    marginTop: 30,
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
});
