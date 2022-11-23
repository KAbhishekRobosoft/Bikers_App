import {View, Text, StyleSheet, ScrollView, TextInput} from 'react-native';
import React from 'react';

export const BikeDetails = ({header, editable, vehicleType, vehicleNumber}) => {
  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        {header ? <Text style={styles.bikeDetailText}>{header}</Text> : null}
        {vehicleType ? (
          <View style={styles.inputView}>
            <Text style={styles.text}>Vehicle Type</Text>
            <View style={styles.inputTextView}>
              <Text>:</Text>
              <TextInput
                style={styles.inputText}
                placeholder="Vehicle Type"
                editable={editable ? editable : false}
                placeholderTextColor="#4F504F"
              />
            </View>
          </View>
        ) : null}
        {vehicleNumber ? (
          <View style={styles.inputView}>
            <Text style={styles.text}>Vehicle No</Text>
            <View style={styles.inputTextView}>
              <Text>:</Text>
              <TextInput
                style={styles.inputText}
                placeholder="Vehicle No"
                editable={editable ? editable : false}
                placeholderTextColor="#4F504F"
              />
            </View>
          </View>
        ) : null}

        <View style={styles.inputView}>
          <Text style={styles.text}>Engine</Text>
          <View style={styles.inputTextView}>
            <Text>:</Text>
            <TextInput
              style={styles.inputText}
              placeholder="Engine"
              editable={editable ? editable : false}
              placeholderTextColor="#4F504F"
            />
          </View>
        </View>
        <View style={styles.inputView}>
          <Text style={styles.text}>Frame No</Text>
          <View style={styles.inputTextView}>
            <Text>:</Text>
            <TextInput
              style={styles.inputText}
              placeholder="Frame No"
              editable={editable ? editable : false}
              placeholderTextColor="#4F504F"
            />
          </View>
        </View>
        <View style={styles.inputView}>
          <Text style={styles.text}>Battery make</Text>
          <View style={styles.inputTextView}>
            <Text>:</Text>

            <TextInput
              style={styles.inputText}
              placeholder="Battery make"
              editable={editable ? editable : false}
              placeholderTextColor="#4F504F"
            />
          </View>
        </View>
        <View style={styles.inputView}>
          <Text style={styles.text}>Reg No.</Text>
          <View style={styles.inputTextView}>
            <Text>:</Text>

            <TextInput
              style={styles.inputText}
              placeholder="Reg No."
              editable={editable ? editable : false}
              placeholderTextColor="#4F504F"
            />
          </View>
        </View>
        <View style={styles.inputView}>
          <Text style={styles.text}>Model</Text>
          <View style={styles.inputTextView}>
            <Text>:</Text>

            <TextInput
              style={styles.inputText}
              placeholder="Model"
              editable={editable ? editable : false}
              placeholderTextColor="#4F504F"
            />
          </View>
        </View>
        <View style={styles.inputView}>
          <Text style={styles.text}>Color</Text>
          <View style={styles.inputTextView}>
            <Text>:</Text>
            <TextInput
              style={styles.inputText}
              placeholder="Color"
              editable={editable ? editable : false}
              placeholderTextColor="#4F504F"
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
              style={styles.inputText}
              placeholder="Dealer code"
              editable={editable ? editable : false}
              placeholderTextColor="#4F504F"
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: 'white',
    height: '51%',
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
    elevation: 10,
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
