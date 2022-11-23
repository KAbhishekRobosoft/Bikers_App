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
import ButtonLarge from '../components/Buttons';

const BookingDetails = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
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
          <Text style={styles.headerText}>Booking Details</Text>
        </View>
        <Pressable>
          <Image
            source={require('../assets/images/ic_mode_edit_black.png')}
            style={styles.editImage}
          />
        </Pressable>
      </View>
      <ScrollView
        style={{marginTop: '5%'}}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}>
        <View style={styles.textInputView}>
          <Text style={styles.titleText}>Mobile Number</Text>
          <Text>:</Text>
          <TextInput style={styles.textInputText}>123456789</TextInput>
        </View>
        <View style={styles.textInputView}>
          <Text style={styles.titleText}>Vehicle Number</Text>
          <Text>:</Text>
          <TextInput style={styles.textInputText}>123456789</TextInput>
        </View>
        <View style={styles.textInputView}>
          <Text style={styles.titleText}>Service Type</Text>
          <Text>:</Text>
          <TextInput style={styles.textInputText}>123456789</TextInput>
        </View>
        <View style={styles.textInputView}>
          <Text style={styles.titleText}>Slot date</Text>
          <Text>:</Text>
          <TextInput style={styles.textInputText}>
            <Text>123456789</Text>
          </TextInput>
        </View>
        <View style={styles.textInputView}>
          <Text style={styles.titleText}>Time</Text>
          <Text>:</Text>
          <TextInput style={styles.textInputText}>
            <Text>123456789</Text>
          </TextInput>
        </View>
        <View style={styles.textInputView}>
          <Text style={styles.titleText}>Dealer</Text>
          <Text>:</Text>
          <TextInput style={styles.textInputText}>
            <Text>123456789</Text>
          </TextInput>
        </View>
        <View style={styles.textInputView}>
          <Text style={styles.titleText}>City</Text>
          <Text>:</Text>
          <TextInput style={styles.textInputText}>
            <Text>123456789</Text>
          </TextInput>
        </View>
        <View style={styles.textInputCommentView}>
          <Text style={styles.titleTextComment}>Comment</Text>
          <TextInput style={styles.textInputCommentText}>
            <Text>Brake Oil, handle tight and chain lose</Text>
          </TextInput>
        </View>
        <View style={styles.buttonView}>
          <ButtonLarge title="BOOK" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default BookingDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    marginHorizontal: 25,
  },
  textInputView: {
    marginHorizontal: 25,
    paddingTop: 28,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingEnd: 3,
    marginTop: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#B4B3B3',
  },
  titleText: {
    paddingBottom: 5,
    fontFamily: 'Roboto-Medium',
    fontWeight: 'bold',
    fontSize: 14,
    color: '#4F504F',
    width: '35%',
  },
  titleTextComment: {
    paddingBottom: 20,
    fontFamily: 'Roboto-Medium',
    fontWeight: 'bold',
    fontSize: 14,
    color: '#4F504F',
    width: '35%',
  },
  textInputText: {
    fontFamily: 'Roboto-Regular',
    fontSize: 14,
    color: '#4F504F',
  },
  textInputCommentText: {
    fontFamily: 'Roboto-Regular',
    fontSize: 14,
    color: '#4F504F',
    paddingBottom: 10,
  },
  textInputCommentView: {
    marginHorizontal: 25,
    // borderWidth: 1,
    paddingTop: 28,
    paddingEnd: 3,
    marginTop: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#B4B3B3',
  },
  buttonView: {
    marginTop: 25,
    alignItems: 'center',
  },
});
