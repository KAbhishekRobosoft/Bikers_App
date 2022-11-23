import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Pressable,
  Image,
  ScrollView,
} from 'react-native';
import React from 'react';
import {BikeDetails} from '../components/BikeDetailsComponent';
import Icon from 'react-native-vector-icons/Ionicons';
import ButtonLarge from '../components/Buttons';

const AddBikeDetails = () => {
  return (
    <SafeAreaView>
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
          <Text style={styles.headerText}>Add Details</Text>
        </View>
        
      </View>
      <ScrollView style={{marginTop: 20, height: '90%'}}>
        <BikeDetails
          header="Add Bike Details"
          editable={true}
          vehicleType={true}
          vehicleNumber={true}
        />
        <View style={styles.btn}>
          <ButtonLarge title="Submit" />
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
});
