import React, {useState} from 'react';
import {SafeAreaView, View, Text, Pressable, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {DropDownInputField} from '../components/InputFields';
import NewServiceRecordDetails, {
  PastServiceRecordDetails,
} from '../components/ServiceRecordDetails';

const ServiceRecord = () => {
  const [bikeSelected, setBikeSelected] = useState('');
  const [serviceSelected, setServiceSelected] = useState('');

  const bikedata = [
    {
      key: 'Classic 350 - Black',
      value: 'Classic 350 - Black',
    },
  ];

  const servicedata = [
    {
      key: 'General service',
      value: 'General service',
    },
  ];

  return (
    <SafeAreaView style={{flex: 1}}>
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
        <Text style={styles.headerText}>Service Records</Text>
      </View>
      <View style={styles.container}>
        <DropDownInputField
          data={bikedata}
          values={bikeSelected}
          setSelected={value => setBikeSelected(value)}
          placeholder="Vehicle Type"
        />
        <DropDownInputField
          data={servicedata}
          values={serviceSelected}
          setSelected={value => setServiceSelected(value)}
          placeholder="Service Type"
        />
        {!bikeSelected == '' && !serviceSelected == '' ? (
          <View>
            <NewServiceRecordDetails />
            <PastServiceRecordDetails />
          </View>
        ) : (
          <></>
        )}
      </View>
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

  container: {
    marginHorizontal: '6%',
  },
});

export default ServiceRecord;
