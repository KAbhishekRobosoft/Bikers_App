import {Field, Formik} from 'formik';
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
import {PlaceholderTextField} from '../components/InputFields';
import {DropDownInputField} from '../components/InputFields';
import {Dropdown} from 'react-native-material-dropdown';
import SelectDropdown from 'react-native-select-dropdown';
import InsetShadow from 'react-native-inset-shadow';
import ButtonLarge from '../components/Buttons';
import * as yup from 'yup';

export const BookService = ({navigation}) => {
  const [number, setNumber] = useState();
  const [vehicleType, setvehicleType] = useState();
  const [vehicleNumber, setvehicleNumber] = useState();
  const [selected, setSelected] = useState();
  const data = [
    {
      key: 'Free service',
      value: 'Free service',
    },
    {
      key: 'General service',
      value: 'General service',
    },
    {
      key: 'Breakdown assistance',
      value: 'Breakdown assistance',
    },
  ];

  const BookServiceValidation = yup.object().shape({
    mobileNumber: yup
      .string()
      .matches(/(\d){10}\b/, 'Enter a valid mobile number')
      .required(''),
  });

  return (
    <SafeAreaView style={{backgroundColor: '#FFFFFF', flex: 1}}>
      <View style={[styles.header, styles.shadow]}>
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
        <Text style={styles.headerText}>Book a Service</Text>
      </View>
      <ScrollView
        style={{
          width: '80%',
          // height: '80%',
          // borderWidth: 1,
          alignSelf: 'center',
        }}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}>
        <Formik
        validationSchema={BookServiceValidation}
          initialValues={{
            mobileNumber: '',
            vehicleType: '',
            vehicleNumber: '',
          }}>
          {({isValid, handleSubmit, values}) => (
            <>
              <View style={styles.firstInputField}>
                <Field
                  component={PlaceholderTextField}
                  name="mobileNumber"
                  placeholder="Mobile number"
                  keyboardType="number-pad"
                  value={values.mobileNumber}
                />
                <Image
                  source={require('../assets/images/edit.png')}
                  style={styles.editImage}
                />
              </View>
              <Field
                component={PlaceholderTextField}
                name="vehicleType"
                placeholder="Vehicle type"
                keyboardType="default"
                value={values.vehicleType}
              />
              <Field
                component={PlaceholderTextField}
                name="vehicleNumber"
                placeholder="Vehicle number"
                keyboardType="default"
                value={values.vehicleNumber}
              />
              <DropDownInputField
                data={data}
                values={selected}
                setSelected={value => setSelected(value)}
                placeholder="Service Type"
              />
              <Text style={styles.commentText}>Comments</Text>
              <View style={styles.commentTextInputView}>
                <InsetShadow>
                  <TextInput multiline={true} style={{padding: 10}} />
                </InsetShadow>
              </View>
              <View style={styles.btnView}>
                <ButtonLarge
                  title="FIND A DEALER"
                  //disabled={!isValid}
                  onPress={() => navigation.navigate('SearchService')}
                />
              </View>
            </>
          )}
        </Formik>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    width: '100%',
    height: 64,
    backgroundColor: '#ED7E2B',
    alignItems: 'center',
    shadowColor: 'rgba(0,0,0,0.24)',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 4,
    shadowOpacity: 0.9,
    elevation: 5,
    opacity: 0.9,
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
  firstInputField: {
    flexDirection: 'row',
  },
  editImage: {
    resizeMode: 'contain',
    height: 18,
    width: 18,
    marginLeft: -30,
    marginTop: 50,
  },
  dropDown: {
    backgroundColor: '#FFFFFF',
    width: '100%',
  },
  commentText: {
    color: '#4F504F',
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
  },
  commentTextInputView: {
    height: 71,
    marginTop: 8,
  },
  btnView: {
    alignItems: 'center',
    marginVertical: Platform.OS === 'android' ? 60 : 60,
  },
});
