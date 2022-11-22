import {View, Text, StyleSheet, ScrollView, TextInput} from 'react-native';
import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {NavigationContainer} from '@react-navigation/native';

const Tab = createMaterialTopTabNavigator();

export const PersonalDetails = () => {
  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <View style={styles.inputView}>
          <Text style={styles.text}>Licence No.</Text>
          <View style={styles.inputTextView}>
            <Text style={{}}>:</Text>

            <TextInput style={styles.inputText} placeholder="BikeNo" />
          </View>
        </View>
        <View style={styles.inputView}>
          <Text style={styles.text}>Name</Text>
          <View style={styles.inputTextView}>
            <Text>:</Text>

            <TextInput style={styles.inputText} placeholder="BikeNo" />
          </View>
        </View>
        <View style={styles.inputView}>
          <Text style={styles.text}>Door No.</Text>
          <View style={styles.inputTextView}>
            <Text>:</Text>

            <TextInput style={styles.inputText} placeholder="BikeNo" />
          </View>
        </View>
        <View style={styles.inputView}>
          <Text style={styles.text}>City</Text>
          <View style={styles.inputTextView}>
            <Text>:</Text>

            <TextInput style={styles.inputText} placeholder="BikeNo" />
          </View>
        </View>
        <View style={styles.inputView}>
          <Text style={styles.text}>State</Text>
          <View style={styles.inputTextView}>
            <Text>:</Text>

            <TextInput style={styles.inputText} placeholder="BikeNo" />
          </View>
        </View>
        <View style={styles.inputView}>
          <Text style={styles.text}>Pincode</Text>
          <View style={styles.inputTextView}>
            <Text>:</Text>
            <TextInput style={styles.inputText} placeholder="BikeNo" />
          </View>
        </View>
        <View style={styles.inputView}>
          <Text style={styles.text}>Mobile</Text>
          <View style={styles.inputTextView}>
            <Text>:</Text>
            <TextInput style={styles.inputText} placeholder="BikeNo" />
          </View>
        </View>
        <View style={styles.inputViewLast}>
          <Text style={styles.text}>Email</Text>
          <View style={styles.inputTextView}>
            <Text>:</Text>
            <TextInput style={styles.inputText} placeholder="BikeNo" />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};
export const BikeDetails = () => {
  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <View style={styles.inputView}>
          <Text style={styles.text}>Engine</Text>
          <View style={styles.inputTextView}>
            <Text>:</Text>

            <TextInput style={styles.inputText} placeholder="BikeNo" />
          </View>
        </View>
        <View style={styles.inputView}>
          <Text style={styles.text}>Frame No</Text>
          <View style={styles.inputTextView}>
            <Text>:</Text>

            <TextInput style={styles.inputText} placeholder="BikeNo" />
          </View>
        </View>
        <View style={styles.inputView}>
          <Text style={styles.text}>Battery make</Text>
          <View style={styles.inputTextView}>
            <Text>:</Text>

            <TextInput style={styles.inputText} placeholder="BikeNo" />
          </View>
        </View>
        <View style={styles.inputView}>
          <Text style={styles.text}>Reg No.</Text>
          <View style={styles.inputTextView}>
            <Text>:</Text>

            <TextInput style={styles.inputText} placeholder="BikeNo" />
          </View>
        </View>
        <View style={styles.inputView}>
          <Text style={styles.text}>Model</Text>
          <View style={styles.inputTextView}>
            <Text>:</Text>

            <TextInput style={styles.inputText} placeholder="BikeNo" />
          </View>
        </View>
        <View style={styles.inputView}>
          <Text style={styles.text}>Color</Text>
          <View style={styles.inputTextView}>
            <Text>:</Text>
            <TextInput style={styles.inputText} placeholder="BikeNo" />
          </View>
        </View>

        <View style={styles.inputViewLast}>
          <Text style={styles.text}>
            <Text style={styles.text}>Dealer code</Text>
          </Text>
          <View style={styles.inputTextView}>
            <Text>:</Text>
            <TextInput style={styles.inputText} placeholder="BikeNo" />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const TopNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName="PersonalDetails"
      screenOptions={{
        tabBarLabelStyle: {
          fontSize: 16,
          color: '#ED7F2C',
          fontFamily: 'Roboto-Regular',
          lineHeight: 21,
          marginTop: 10,
          textAlign: 'left',
          width: '130%',
          textTransform: 'none',
        },
        tabBarStyle: {
          width: '100%',
          paddingHorizontal: '5%',
        },
        tabBarItemStyle: {
          alignSelf: 'flex-start',
        },
        tabBarIndicatorStyle: {
          backgroundColor: '#ED7F2C',
          marginLeft: '8%',
          width: 12,
          height: 2,
          alignSelf: 'flex-start',
        },
      }}>
      <Tab.Screen
        name="Home"
        component={PersonalDetails}
        options={{title: 'Personal Details', upperCaseLabel: false}}
      />
      <Tab.Screen
        name="Settings"
        component={BikeDetails}
        options={{title: 'Bike Details'}}
      />
    </Tab.Navigator>
  );
};

export default TopNavigation;

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: 'white',
  },
  container: {
    backgroundColor: 'white',
    width: '90%',
    alignSelf: 'center',
    shadowColor: 'rgba(218,218,218,0.5)',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 10,
    shadowOpacity: 0.9,
    elevation: 5,
    marginTop: 30,
    borderRadius: 8,
  },
  inputView: {
    width: '86%',
    height: 70,
    borderBottomWidth: 1,
    borderBottomColor: '#B4B3B3',
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 3,
  },
  inputViewLast: {
    width: '86%',
    height: 70,
    borderBottomColor: '#B4B3B3',
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
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
    textAlign: 'right',
    width: '90%',
  },
  inputTextView: {
    alignItems: 'center',
    width: '68%',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
});
