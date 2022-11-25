import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  Platform,
  ScrollView,
  TextInput,
  ActivityIndicator,
} from 'react-native';
import React, {useState,useEffect} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import ButtonLarge from '../components/Buttons';
import BikeImageComponent from '../components/BikeImageComponent';
import DatePicker from 'react-native-date-picker';
import Recommendations from '../components/Recommendations';
import {Milestone} from '../components/AddMilestones';
import {deSetRegistered} from '../redux/AuthSlice';
import {useDispatch, useSelector} from 'react-redux';
import {setMileStone} from '../redux/MileStoneSlice';
import { getCoordinates } from '../services/Auth';
import GetLocation from 'react-native-get-location';
import { getLocationName } from '../services/Auth';
import { setLoading } from '../redux/MileStoneSlice';
import { deSetLoading } from '../redux/MileStoneSlice';
import { createTrip } from '../services/Auth';
import { getVerifiedKeys } from '../utils/Functions';
import { setToken } from '../redux/AuthSlice';

const CreateTrip = ({navigation}) => {
  useEffect(() => {
    setTimeout(async () => {
      GetLocation.getCurrentPosition({
        enableHighAccuracy: true,
        timeout: 15000,
    })
    .then(async location => {
      const resp= await getLocationName(location.latitude,location.longitude)
      setcurLoc(resp.name)
      setLat1(location.latitude)
      setLon1(location.longitude)
      dispatch(setLoading())
    })
    .catch(error => {
        const { code, message } = error;
        console.warn(code, message);
    })
    }, 500);
  }, []);

  const mileStones = useSelector(state => state.milestone.mileStone)
  const authData= useSelector(state=>state.auth)
  const milesonesData= useSelector(state=>state.milestone.milestoneData)
  const loading= useSelector(state=>state.milestone.isLoading)
  const dispatch = useDispatch();
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [date, setDate] = useState(new Date());
  const [lat1, setLat1] = useState(0);
  const [lon1, setLon1] = useState(0);
  const [lat2, setLat2] = useState(0);
  const [lon2, setLon2] = useState(0);
  const [currLoc,setcurLoc]= useState('')
  const [endDate, setEndDate] = useState(new Date());
  const [time, setTimer] = useState(new Date());
  const [recommend, setRecommend] = useState(false);
  const [go, setGo] = useState();
  const [from, setFrom] = useState();
  const [tripName, settripName] = useState();
  const [placeholder1, setPlaceholder1] = useState('Where do you want to go?');
  const [placeholder2, setPlaceholder2] = useState('From');
  const [placeholder3, setPlaceholder3] = useState('Name of the trip');
  const contactsData = useSelector(state => state.contact);
  const [open, setOpen] = useState(true);
  if(loading){
    return(
      <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
        <ActivityIndicator />
      </View>
    )
  }
  return (
    <SafeAreaView style={styles.main}>
      <View style={[styles.header]}>
        <Pressable
          onPress={() => {
            navigation.goBack();
            dispatch(deSetLoading())
          }}>
          <Icon name="arrow-left" color={'white'} size={16} />
        </Pressable>
        <Text style={styles.headerText}>Create a trip</Text>
      </View>
      <ScrollView style={{height: '80%'}} showsVerticalScrollIndicator={false}>
        <View style={styles.textInputView}>
          {go ? (
            <View style={styles.placeholder}>
              <Text style={styles.placeholderText}>{placeholder1}</Text>
            </View>
          ) : (
            <View style={styles.placeholderText}></View>
          )}
         
            <TextInput
              name="Go"
              value={go}
              placeholderTextColor={'#4F504F'}
              placeholder="Where do you want to go?"
              style={styles.inputText}
              onChangeText={value => setGo(value)}
              // onTouchStart={()=>navigation.navigate('SearchCity')}
            />
        </View>
        <View style={styles.textInputView}>
          {from ? (
            <View style={styles.placeholder}>
              <Text style={styles.placeholderText}>{placeholder2}</Text>
            </View>
          ) : (
            <View style={styles.placeholderText}></View>
          )}

          <TextInput
            name="From"
            value={from}
            placeholderTextColor={'#4F504F'}
            placeholder="From"
            style={styles.inputText}
            onChangeText={value => setFrom(value)}
          />
        </View>
        {open && <Pressable
          onPress={() => {
            setOpen(false)
          }}>
          <View style={styles.locationNamesView}>
            <Image
              style={{height: 20, width: 20, marginLeft: 10}}
              source={require('../assets/images/pin.png')}
            />
            <View>
              <Text style={styles.textUdupi}>{currLoc}</Text>
              <Text style={styles.textCurrentLocation}>current location</Text>
            </View>
          </View>
        </Pressable>}

        <View style={styles.textInputView}>
          {tripName ? (
            <View style={styles.placeholder}>
              <Text style={styles.placeholderText}>{placeholder3}</Text>
            </View>
          ) : (
            <View style={styles.placeholderText}></View>
          )}
          <TextInput
            name="TripName"
            value={tripName}
            placeholderTextColor={'#4F504F'}
            placeholder="Name of the trip"
            style={styles.inputText}
            onChangeText={value => settripName(value)}
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
                minimumDate={new Date()}
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
                minimumDate={new Date()}
                s
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
        </View>
        <View>
          {recommend ? <Recommendations /> : null}

          <View style={styles.addUserView}>
            <View style={styles.addUserImgView}>
              <Pressable
                onPress={() => {
                  setRecommend(!recommend);
                  navigation.navigate('Contacts');
                }}>
                <Image
                  style={styles.calenderImg}
                  source={require('../assets/images/adduser.png')}
                />
              </Pressable>
            </View>
            {contactsData.addTripContacts.length === 0 && (
              <Text style={styles.text}>Invite other riders</Text>
            )}
              {
                contactsData.addTripContacts.length > 0 && <BikeImageComponent />
              }
          </View>
          {mileStones ? (
            <View style={styles.mileStone}>
              <Milestone />
            </View>
          ) : null}
          <View style={styles.addMileStoneView}>
            <View style={styles.addUserImgView}>
              <Pressable onPress={()=>{
                dispatch(setMileStone(true))
              }}>
                <Image
                  style={styles.calenderImg}
                  source={require('../assets/images/mileStone.png')}
                />
              </Pressable>
            </View>
            <Text style={styles.text}>Add a milestone</Text>
          </View>
          <View style={styles.btn}>
            <ButtonLarge
              onPress={async() => {
                const resp= await getCoordinates(from)
                const resp1= await getCoordinates(go)
                const obj= {
                    tripName:tripName,
                    source:[{
                      place:from,
                      latitude:resp.lat,
                      longitude:resp.lon
                    }],
                    destination:[{
                      place:go,
                      latitude:resp1.lat,
                      longitude:resp1.lon
                    }],
                    startDate:date,
                    endDate:endDate,
                    startTime:time,
                    distance:"500m",
                    riders:contactsData.addTripContacts,
                    milestones:milesonesData
                }
                  let cred= await getVerifiedKeys(authData.userToken)
                  dispatch(setToken(cred))
                  await createTrip(obj,cred)
                // dispatch(deSetRegistered())
              }}
              title="Done"
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CreateTrip

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

  textUdupi: {
    fontFamily: 'Roboto-Regular',
    color: '#717171',
    fontSize: 14,
    lineHeight: 19,
    marginLeft: 20,
  },

  textCurrentLocation: {
    fontFamily: 'Roboto-Regular',
    color: 'rgba(182,182,182,0.8)',
    fontSize: 12,
    lineHeight: 16,
    marginLeft: 20,
  },

  textInputView: {
    width: '85%',
    height: 70,
    borderBottomWidth: 1,
    borderBottomColor: '#B4B3B3',
    alignSelf: 'center',
    justifyContent: 'space-around',
  },

  locationNamesView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 2,
    margin: 25,
    backgroundColor: 'white',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },

  inputText: {
    marginTop: 28,
    fontSize: 16,
    fontFamily: 'Roboto-Regular',
    height: 40,
    width: 195,
    color: '#4F504F',
    bottom:5
  },
  calenderView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '85%',
    alignSelf: 'center',
    flexWrap: 'wrap',
    marginVertical: 50,
    marginHorizontal: 30,
    height: '10%',
  },
  startDateView: {
    borderBottomWidth: 1,
    borderBottomColor: '#B4B3B3',
    flexDirection: 'row',
    width: '40%',
    justifyContent: 'space-between',
    paddingBottom: Platform.OS === 'ios' ? 3 : 0,
    alignItems: 'center',
  },
  timeView: {
    borderBottomWidth: 1,
    borderBottomColor: '#B4B3B3',
    flexDirection: 'row',
    width: '40%',
    justifyContent: 'space-between',
    paddingBottom: Platform.OS === 'ios' ? 3 : 0,
    marginTop: 50,
    alignItems: 'center',
  },

  dateText: {
    fontSize: 16,
    fontFamily: 'Roboto-Regular',
    color: '#4F504F',
    height: Platform.OS === 'ios' ? 0 : 37,
  },
  calenderImg: {
    width: 22,
    height: 22,
    resizeMode: 'contain',
  },
  addUserView: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 100,
    borderBottomColor: '#B4B3B3',
    borderBottomWidth: 1,
    paddingHorizontal: 28,
  },
  addMileStoneView: {
    flexDirection: 'row',
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
    marginVertical: 40,
    alignItems: 'center',
  },
  mileStone: {
    marginTop: 10,
  },
  placeholderText: {
    color: '#9F9F9F',
    fontSize: 14,
    letterSpacing: 0.29,
    marginTop: Platform.OS === 'ios' ? 40 : 35,
  },
  placeholder: {
    paddingBottom: 5,
  },
});
