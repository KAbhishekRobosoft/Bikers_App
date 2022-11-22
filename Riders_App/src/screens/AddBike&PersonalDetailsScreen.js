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
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {PlaceholderTextFieldOwnerManual} from '../components/InputFields';
import {BikeDetails} from '../components/BikeDetailsComponent';
import {useDispatch, useSelector} from 'react-redux';
import {addOwnerDetails} from '../services/Auth';
import {setUserData} from '../redux/AuthSlice';
import ButtonLarge from '../components/Buttons';

export const AddBikeAndPersonalDetails = ({navigation}) => {
  const useDetails = useSelector(state => state.auth.userData);
  const dispatch = useDispatch();

  const [licence, setLicence] = useState();
  const [name, setName] = useState();
  const [DoorNo, setDoorNo] = useState();
  const [city, setCity] = useState();
  const [state, setState] = useState();
  const [pincode, setPincode] = useState();
  const [mobile, setMobile] = useState();
  const [email, setEmail] = useState();

  const submitForm = async () => {
    const obj = {
      lisenceNumber: licence,
      city: city,
      state: state,
      doorNumber: DoorNo,
      pincode: pincode,
    };
    const response = await addOwnerDetails(obj);
    const userData = {
      lisenceNumber: licence,
      city: city,
      state: state,
      doorNumber: DoorNo,
      pincode: pincode,
      name: useDetails.name,
      mobile: useDetails.mobile,
      email: useDetails.email,
    };
    dispatch(setUserData(userData));
    console.log(response);
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
                name="arrow-left"
                color={'white'}
                size={16}
                style={styles.icon}
              />
            </Pressable>
            <Text style={styles.headerText}>Add Details</Text>
          </View>
          <Pressable>
            <Image
              source={require('../assets/images/share.png')}
              style={styles.editImage}
            />
          </Pressable>
        </View>
        <ScrollView
          style={{height: '88%'}}
          bounces={false}
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
            <View style={{width: '90%', alignSelf: 'center', marginTop: 20}}>
              <PlaceholderTextFieldOwnerManual
                name="licence"
                placeholder="Licence No."
                keyboardType="default"
                value={licence}
                onChangeText={value => setLicence(value)}
              />
              <PlaceholderTextFieldOwnerManual
                name="name"
                placeholder="Name"
                keyboardType="default"
                value={name}
                onChangeText={value => setName(value)}
                editable={false}
              />
              <PlaceholderTextFieldOwnerManual
                name="doorNumber"
                placeholder="Door No."
                keyboardType="default"
                value={DoorNo}
                onChangeText={value => setDoorNo(value)}
              />
              <PlaceholderTextFieldOwnerManual
                name="city"
                placeholder="City"
                keyboardType="default"
                value={city}
                onChangeText={value => setCity(value)}
              />
              <PlaceholderTextFieldOwnerManual
                name="state"
                placeholder="State"
                keyboardType="default"
                value={state}
                onChangeText={value => setState(value)}
              />
              <PlaceholderTextFieldOwnerManual
                name="pincode"
                placeholder="Pincode"
                keyboardType="default"
                value={pincode}
                onChangeText={value => setPincode(value)}
              />
              <PlaceholderTextFieldOwnerManual
                name="mobile"
                placeholder="Mobile"
                keyboardType="default"
                value={mobile}
                onChangeText={value => setMobile(value)}
                editable={false}
              />
              <PlaceholderTextFieldOwnerManual
                name="email"
                placeholder="Email"
                keyboardType="default"
                value={email}
                onChangeText={value => setEmail(value)}
                editable={false}
              />
            </View>
          </View>
          <View style={{marginTop: 10}}>
            <BikeDetails
              header="Add Bike Details"
              editable={true}
              vehicleType={true}
              vehicleNumber={true}
            />
          </View>
          <View style={styles.btn}>
            <ButtonLarge title="Submit" onPress={submitForm} />
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
  btn: {
    alignSelf: 'center',
    marginVertical: 30,
  },
});
