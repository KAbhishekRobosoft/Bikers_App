import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Pressable,
  Image,
  ScrollView,
  TextInput,
} from 'react-native';
import React, {useRef, useState} from 'react';
import {BikeDetails} from '../components/BikeDetailsComponent';
import Icon from 'react-native-vector-icons/Ionicons';
import ButtonLarge from '../components/Buttons';
import {addBikeDetails, getBikeDetails} from '../services/Auth';
import {useDispatch, useSelector} from 'react-redux';
import {addBikeType, addBikeData} from '../redux/AccessoriesSlice';
import {Formik, Field} from 'formik';
import  {getVerifiedKeys}  from '../utils/Functions'

import * as yup from 'yup';

const AddBikeDetails = () => {
  const authData=useSelector(state=>state.auth)
  const [vehicleType, setvehicleType] = useState('');
  const [vehicleNo, setvehicleNo] = useState('');
  const [engine, setEngine] = useState('');
  const [frameNo, setFrameNo] = useState('');
  const [batteryMake, setBatteryMake] = useState('');
  const [regNo, setRegNo] = useState('');
  const [model, setModel] = useState('');
  const [color, setColor] = useState('');
  const [dealerCode, setDealerCode] = useState('');
  const [defaultValue, setDefaultValue] = useState('');
  const ref = useRef();
  const dispatch = useDispatch();
  //console.log(vehicleType,vehicleNo,engine,dealerCode);

  const submit = async () => {
    console.log('click');
    const obj = {
      vehicleType: vehicleType,
      vehicleNumber: vehicleNo,
      engineNumber: engine,
      frameNumber: frameNo,
      batteryMake: batteryMake,
      registerNumber: regNo,
      model: model,
      color: color,
      dealerCode: dealerCode,
    };
    let cred=await getVerifiedKeys(authData.userToken)
    await addBikeDetails(obj); // <-----------API  CAll
    const response = await getBikeDetails(cred);
    const BikeTypes = response.map(e => {
      return e.vehicleType;
    });

    //console.log('ppp', response);
    dispatch(addBikeType(BikeTypes));
    dispatch(addBikeData(response)); // <-----------Redux
  };

  return (
    <SafeAreaView style={{backgroundColor: '#ffffff'}}>
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
          <Text style={styles.headerText}>Add Bike Details</Text>
        </View>
      </View>
      <ScrollView style={{ backgroundColor:'white', height: '91%'}}>
       {/* <Formik 
       //validationSchema={personalDetailsValidation}
       initialValues={{
        
       }}
       /> */}
        <View style={styles.container}>
          <View style={styles.inputView}>
            <Text style={styles.text}>Vehicle Type</Text>
            <View style={styles.inputTextView}>
              <Text>:</Text>
              <TextInput
                ref={ref}
                style={styles.inputText}
                placeholder="Vehicle Type"
                placeholderTextColor="#4F504F"
                onChangeText={value => {
                  setvehicleType(value);
                }}
              />
            </View>
          </View>
          <View style={styles.inputView}>
            <Text style={styles.text}>Vehicle No</Text>
            <View style={styles.inputTextView}>
              <Text>:</Text>
              <TextInput
                ref={ref}
                style={styles.inputText}
                placeholder="Vehicle No"
                placeholderTextColor="#4F504F"
                onChangeText={value => {
                  setvehicleNo(value);
                }}
              />
            </View>
          </View>
          <View style={styles.inputView}>
            <Text style={styles.text}>Engine</Text>
            <View style={styles.inputTextView}>
              <Text>:</Text>
              <TextInput
                ref={ref}
                style={styles.inputText}
                placeholder="Engine"
                placeholderTextColor="#4F504F"
                onChangeText={value => {
                  setEngine(value);
                }}
              />
            </View>
          </View>
          <View style={styles.inputView}>
            <Text style={styles.text}>Frame No</Text>
            <View style={styles.inputTextView}>
              <Text>:</Text>
              <TextInput
                ref={ref}
                style={styles.inputText}
                placeholder="Frame No"
                placeholderTextColor="#4F504F"
                onChangeText={value => {
                  setFrameNo(value);
                }}

                // defaultValue={defaultValue?BikeDetails[0].frameNumber:null}
              />
            </View>
          </View>
          <View style={styles.inputView}>
            <Text style={styles.text}>Battery make</Text>
            <View style={styles.inputTextView}>
              <Text>:</Text>

              <TextInput
                ref={ref}
                style={styles.inputText}
                placeholder="Battery make"
                placeholderTextColor="#4F504F"
                onChangeText={value => {
                  setBatteryMake(value);
                }}

                // defaultValue={defaultValue?BikeDetails[0].batteryMake:null}
              />
            </View>
          </View>
          <View style={styles.inputView}>
            <Text style={styles.text}>Reg No.</Text>
            <View style={styles.inputTextView}>
              <Text>:</Text>

              <TextInput
                ref={ref}
                style={styles.inputText}
                placeholder="Reg No."
                placeholderTextColor="#4F504F"
                onChangeText={value => {
                  setRegNo(value);
                }}

                /// defaultValue={defaultValue?BikeDetails[0].registerNumber:null}
              />
            </View>
          </View>
          <View style={styles.inputView}>
            <Text style={styles.text}>Model</Text>
            <View style={styles.inputTextView}>
              <Text>:</Text>

              <TextInput
                ref={ref}
                keyboardType='numeric'
                style={styles.inputText}
                placeholder="Model"
                placeholderTextColor="#4F504F"
                onChangeText={value => {
                  setModel(value);
                }}
              />
            </View>
          </View>
          <View style={styles.inputView}>
            <Text style={styles.text}>Color</Text>
            <View style={styles.inputTextView}>
              <Text>:</Text>
              <TextInput
                ref={ref}
                style={styles.inputText}
                placeholder="Color"
                placeholderTextColor="#4F504F"
                onChangeText={value => {
                  setColor(value);
                }}
              />
            </View>
          </View>
          <View style={styles.inputViewLast}>
            <Text style={styles.text}>
              <Text style={styles.text}>Dealer code</Text>
            </Text>
            <View style={styles.inputTextView}>
              <Text>:</Text>
              <TextInput
                //ref={ref}
                style={styles.inputText}
                placeholder="Dealer code"
                placeholderTextColor="#4F504F"
                onChangeText={value => {
                  setDealerCode(value);
                }}
              />
            </View>
          </View>
        </View>
        <View style={styles.btn}>
          <ButtonLarge title="Submit" onPress={submit} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AddBikeDetails;

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
  btn: {
    alignSelf: 'center',
    marginVertical: 30,
  },
  container: {
    backgroundColor: 'white',
    width: '90%',
    alignSelf: 'center',
    shadowColor: 'rgba(175,170,170,0.5)',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 2,
    shadowOpacity: 0.9,
    elevation: 20,
    borderRadius: 8,
    marginTop: 30,
  },
  inputView: {
    width: '89%',
    height: 70,
    borderBottomWidth: 1,
    borderBottomColor: '#B4B3B3',
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 3,
    paddingTop: 30,
  },
  inputViewLast: {
    width: '86%',
    height: 70,
    borderBottomColor: '#B4B3B3',
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 20,
  },
  text: {
    alignSelf: 'center',
    fontFamily: 'Roboto-Bold',
    fontSize: 14,
    color: '#4F504F',
    textAlign: 'left',
    lineHeight: 42,
    width: 90,
  },
  inputText: {
    fontFamily: 'Roboto-Regular',
    fontSize: 14,
    color: '#4F504F',
    textAlign: 'center',
    width: '80%',
  },
  inputTextView: {
    alignItems: 'center',
    width: '68%',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  bikeDetailText: {
    color: '#ED7E2B',
    fontFamily: 'Roboto-Regular',
    fontSize: 20,
    lineHeight: 26,
    marginTop: 25,
    marginLeft: '5.6%',
  },
});
