import {Formik} from 'formik';
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
import Icon from 'react-native-vector-icons/FontAwesome';
import {PlaceholderTextField} from '../components/InputFields';
import { DropDownInputField } from '../components/InputFields';

export const BookService = () => {
  const [number, setNumber] = useState();
  const [vehicleType, setvehicleType] = useState();
  const [vehicleNumber, setvehicleNumber] = useState();
  const [selectDropDown, setSelectDropDown] = useState("");
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

  return (
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
        <Text style={styles.headerText}>Book a Service</Text>
      </View>
      <ScrollView style={{width: '90%'}}>
        <Formik>
          {() => (
            <>
              <View style={styles.firstInputField}>
                <PlaceholderTextField
                  name="mobileNumber"
                  placeholder="Mobile number"
                  keyboardType="number-pad"
                  value={number}
                  onChangeText={value => setNumber(value)}
                />
                <Image
                  source={require('../assets/images/edit.png')}
                  style={styles.editImage}
                />
              </View>
              <PlaceholderTextField
                name="vehicleType"
                placeholder="Vehicle type"
                keyboardType="default"
                value={vehicleType}
                onChangeText={value => setvehicleType(value)}
              />
              <PlaceholderTextField
                name="vehicleNumber"
                placeholder="Vehicle number"
                keyboardType="default"
                value={vehicleNumber}
                onChangeText={value => setvehicleNumber(value)}
              />
              <DropDownInputField
                data={data}
                setSelectDropDown={(val) => setSelectDropDown(val)}
                values={selectDropDown}
              />
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
    marginLeft: -20,
    marginTop: 57,
  },
});
