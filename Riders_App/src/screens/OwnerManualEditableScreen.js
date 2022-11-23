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
import Icon from 'react-native-vector-icons/Ionicons';
import {PlaceholderTextFieldOwnerManual} from '../components/InputFields';
import {BikeDetails} from '../components/BikeDetailsComponent';
import {useSelector} from 'react-redux';
export const OwnerManualEdit = ({navigation}) => {
  const userDetails = useSelector(state => state.auth.userData);

  const [licence, setLicence] = useState();
  const [name, setName] = useState();
  const [DoorNo, setDoorNo] = useState();
  const [city, setCity] = useState();
  const [state, setState] = useState();
  const [pincode, setPincode] = useState();
  const [mobile, setMobile] = useState();
  const [email, setEmail] = useState();
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
            <View
              style={{
                flexDirection: 'row',
                marginTop: 20,
                marginHorizontal: '5%',
                justifyContent: 'space-between',
              }}>
              <Text style={styles.personaldetailText}>Personal Details</Text>
              <Image source={require('../assets/images/save.png')} />
            </View>
            <View style={{width: '90%', alignSelf: 'center', marginTop: 20}}>
              <PlaceholderTextFieldOwnerManual
                name="licence"
                placeholder="Licence No."
                keyboardType="default"
                defaultValue={userDetails.lisenceNumber}
                onChangeText={value => setLicence(value)}
              />
              <PlaceholderTextFieldOwnerManual
                name="name"
                placeholder="Name"
                keyboardType="default"
                value={name}
                onChangeText={value => setName(value)}
                defaultValue={userDetails.name}
              />
              <PlaceholderTextFieldOwnerManual
                name="doorNumber"
                placeholder="Door No."
                keyboardType="default"
                value={DoorNo}
                onChangeText={value => setDoorNo(value)}
                defaultValue={userDetails.doorNumber}
              />
              <PlaceholderTextFieldOwnerManual
                name="city"
                placeholder="City"
                keyboardType="default"
                value={city}
                onChangeText={value => setCity(value)}
                defaultValue={userDetails.city}
              />
              <PlaceholderTextFieldOwnerManual
                name="state"
                placeholder="State"
                keyboardType="default"
                value={state}
                onChangeText={value => setState(value)}
                defaultValue={userDetails.state}
              />
              <PlaceholderTextFieldOwnerManual
                name="pincode"
                placeholder="Pincode"
                keyboardType="default"
                value={pincode}
                onChangeText={value => setPincode(value)}
                defaultValue={userDetails.pincode}

              />
              <PlaceholderTextFieldOwnerManual
                name="mobile"
                placeholder="Mobile"
                keyboardType="default"
                value={mobile}
                onChangeText={value => setMobile(value)}
                defaultValue={userDetails.lisenceNumber}

              />
              <PlaceholderTextFieldOwnerManual
                name="email"
                placeholder="Email"
                keyboardType="default"
                value={email}
                onChangeText={value => setEmail(value)}
                defaultValue={userDetails.email}
              />
            </View>
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