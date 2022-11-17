import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import ButtonLarge from '../components/Buttons';
import DateTimePickerAndroid from '@react-native-community/datetimepicker';
import DatePicker from 'react-native-date-picker';
import {onChange} from 'react-native-reanimated';
import Recommendations from '../components/Recommendations';

const CreateTrip2 = () => {
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [date, setDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [time, setTimer] = useState(new Date());
  const [recommend,setRecommend]=useState(false)
  return (
    <SafeAreaView style={styles.main}>
      <View style={[styles.header]}>
        <Pressable
          onPress={() => {
            navigation.goBack();
          }}>
          <Icon name="arrow-left" color={'white'} size={16} />
        </Pressable>
        <Text style={styles.headerText}>Create a trip</Text>
      </View>
      <ScrollView style={{height: '80%'}}>
        <View style={styles.textInputView}>
          <TextInput
            name="Go"
            placeholderTextColor={'#4F504F'}
            placeholder="Where do you want to go?"
            style={styles.inputText}
          />
        </View>
        <View style={styles.textInputView}>
          <TextInput
            name="From"
            placeholderTextColor={'#4F504F'}
            placeholder="From"
            style={styles.inputText}
          />
        </View>
        <View style={styles.textInputView}>
          <TextInput
            name="TripName"
            placeholderTextColor={'#4F504F'}
            placeholder="Name of the trip"
            style={styles.inputText}
          />
        </View>
        <View style={styles.calenderView}>
          <View style={styles.startDateView}>
            <TextInput
              style={styles.dateText}
              placeholderTextColor={'#4F504F'}
              placeholder="Start date"
              value={date.toLocaleDateString()}
            />
            <Pressable
              onPress={() => {
                setOpen1(true);
              }}>
              <Image
                style={styles.calenderImg}
                source={require('../assets/images/calenderImg.png')}
              />
              <DatePicker
                mode="date"
                modal
                open={open1}
                date={date}
                onConfirm={value => {
                  setDate(value);
                  setOpen1(false);
                }}
                onCancel={() => setOpen1(false)}
              />
            </Pressable>
          </View>
          <View style={styles.startDateView}>
            <TextInput
              style={styles.dateText}
              placeholderTextColor={'#4F504F'}
              placeholder="End date"
              value={endDate.toLocaleDateString()}
            />
            <Pressable
              onPress={() => {
                setOpen2(true);
              }}>
              <DatePicker
                mode="date"
                modal
                open={open2}
                date={endDate}
                onConfirm={value => {
                  setEndDate(value);
                  setOpen2(false);
                }}
                onCancel={() => setOpen2(false)}
              />
              <Image
                style={styles.calenderImg}
                source={require('../assets/images/calenderImg.png')}
              />
            </Pressable>
          </View>
        </View>
        <View style={styles.timeView}>
          <TextInput
            style={styles.dateText}
            placeholderTextColor={'#4F504F'}
            placeholder="Start time"
            value={time.toLocaleTimeString()}
          />
          <Pressable
            onPress={() => {
              setOpen3(true);
            }}>
            <DatePicker
              mode="time"
              modal
              open={open3}
              date={time}
              onConfirm={value => {
                setTimer(value);
                setOpen3(false);
              }}
              onCancel={() => setOpen3(false)}
            />
            <Image
              style={styles.calenderImg}
              source={require('../assets/images/clock.png')}
            />
          </Pressable>
        </View>
        <View >
          {recommend? <Recommendations />:null}
        
          <View style={styles.addUserView}>
            <View style={styles.addUserImgView}>
              <Pressable onPress={()=>setRecommend(!recommend)}>
                <Image
                  style={styles.calenderImg}
                  source={require('../assets/images/adduser.png')}
                />
              </Pressable>
            </View>
            <Text style={styles.text}>Invite other riders</Text>
          </View>
          <View style={styles.inviteRidersView}>
            <View style={styles.addUserImgView}>
              <Image
                style={styles.calenderImg}
                source={require('../assets/images/mileStone.png')}
              />
            </View>
            <Text style={styles.text}>Add a milestone</Text>
          </View>
          <View style={styles.btn}>
            <ButtonLarge title="Done" />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CreateTrip2;

const styles = StyleSheet.create({
  main: {flex: 1, backgroundColor: '#ffffff'},
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
    paddingHorizontal: 20,
  },

  headerText: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '500',
    marginLeft: 38,
    fontFamily: 'Roboto-Medium',
  },
  textInputView: {
    width: '90%',
    height: 70,
    borderBottomWidth: 1,
    borderBottomColor: '#B4B3B3',
    alignSelf: 'center',
    marginHorizontal: 30,
  },
  inputText: {
    // borderWidth:1,
    marginTop: 30,
    fontSize: 16,
    fontFamily: 'Roboto-Regular',
    height: 40,
  },
  calenderView: {
    flexDirection: 'row',
    justifyContent: 'space-between',

    // alignSelf: 'center',
    marginVertical: 50,
    marginHorizontal: 30,
    // backgroundColor: 'cyan',
  },
  startDateView: {
    borderBottomWidth: 1,
    borderBottomColor: '#B4B3B3',
    flexDirection: 'row',
    // backgroundColor: 'grey',
    width: '40%',
    justifyContent: 'space-between',
    paddingBottom: Platform.OS === 'ios' ? 3 : 0,
    alignItems: 'center',
  },
  timeView: {
    borderBottomWidth: 1,
    borderBottomColor: '#B4B3B3',
    flexDirection: 'row',
    // backgroundColor: 'grey',
    width: '33%',
    justifyContent: 'space-between',
    paddingBottom: Platform.OS === 'ios' ? 3 : 0,
    marginHorizontal: 30,
    alignItems: 'center',
  },

  dateText: {
    fontSize: 16,
    fontFamily: 'Roboto-Regular',
    color: 'black',

    // paddingBottom: 3,
    // backgroundColor: 'red',
    //width: '50%',
  },
  calenderImg: {
    width: 22,
    height: 22,
    // paddingRight: 10,
    resizeMode: 'contain',
  },
  addUserView: {
    flexDirection: 'row',
    //backgroundColor: 'grey',
    alignItems: 'center',
    //marginTop: 50,
    height: 100,
    borderBottomColor: '#B4B3B3',
    borderBottomWidth: 1,
    paddingHorizontal: 28,
  },
  inviteRidersView: {
    flexDirection: 'row',
   // backgroundColor: 'grey',
    alignItems: 'center',
    height: 100,
    borderBottomColor: '#B4B3B3',
    borderBottomWidth: 1,
    paddingHorizontal: 28,
  },
  addUserImgView: {
    backgroundColor: 'white',
    width: 46,
    height: 46,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: 'grey',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 3,
    shadowOpacity: 0.6,
    elevation: 5,
  },
  text: {
    fontSize: 16,
    fontFamily: 'Roboto-Regular',
    color: '#4F504F',
    width: '70%',
    textAlign: 'left',
    marginLeft: 10,
  },
  btn: {
    marginVertical: 20,
    alignItems: 'center',
  },
});
