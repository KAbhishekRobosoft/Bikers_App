import React, {useEffect, useRef, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  Pressable,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {TripSummaryList} from '../components/summarizeMilestones';
import {RecommendationTripSummary} from '../components/Recommendations';
import {CreateButton} from '../components/Buttons';
import {useSelector, useDispatch} from 'react-redux';
import BikeImageComponent from '../components/BikeImageComponent';
import {getVerifiedKeys} from '../utils/Functions';
import {setToken} from '../redux/AuthSlice';
import MapView, {Marker} from 'react-native-maps';
import {Polyline} from 'react-native-maps';
import {getParticularTrip} from '../services/Auth';
import {month1} from '../utils/Functions';
import { calculateRoute } from '../services/Auth';
import { deSetLoading } from '../redux/MileStoneSlice';
import { setLoading } from '../redux/MileStoneSlice';

export const GetParticularTripSummary = ({navigation, route}) => {
  const [data, setData] = useState([]);
  const [direction,setDirection]= useState([])
  const mapRef = useRef(null);
  const tripDetails = useSelector(state => state.milestone.storeTrip);
  const authData = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const loading= useSelector(state=>state.milestone.isLoading)

  useEffect(() => {
    dispatch(deSetLoading())
    setTimeout(async () => {
      const key = await getVerifiedKeys(authData.userToken);
      dispatch(setToken(key));
      const resp = await getParticularTrip(key, route.params.tripName);
      console.log(resp)
      const dir= await calculateRoute(resp[0].source[0].latitude,resp[0].source[0].longitude,resp[0].destination[0].latitude,resp[0].destination[0].longitude)
      setDirection(dir.legs[0].points)
      setData(resp);
      dispatch(setLoading())
    }, 1000);
  }, []);

  if(loading){
    return(
      <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
            <ActivityIndicator size= "large" color="orange" />
      </View>
    )
  }

  return (
    <SafeAreaView>
      {data.length > 0 && direction.length > 0 ? (
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
              <Text style={styles.headerText}>TripSummary</Text>
            </View>
            <Pressable>
              <Image
                source={require('../assets/images/ic_mode_edit_black.png')}
                style={styles.editImage}
              />
            </Pressable>
          </View>
          <ScrollView style={styles.scrollView}>
            <View style={styles.mapView}>
              <MapView
                ref={mapRef}
                style={styles.mapStyle}
                customMapStyle={mapStyle}>
                <Polyline
                  coordinates={direction.map(ele => ({
                    latitude: ele.latitude,
                    longitude: ele.longitude,
                  }))}
                  strokeColor={'blue'}
                  strokeWidth={2}
                  lineDashPattern={[1]}
                />

                <Marker
                  coordinate={{
                    latitude: parseFloat(data[0].source[0].latitude),
                    longitude: parseFloat(data[0].source[0].longitude),
                    latitudeDelta: 0.03,
                    longitudeDelta: 0.01,
                  }}
                />

                <Marker
                  coordinate={{
                    latitude: parseFloat(data[0].destination[0].latitude),
                    longitude: parseFloat(data[0].destination[0].longitude),
                    latitudeDelta: 0.03,
                    longitudeDelta: 0.01,
                  }}
                />
              </MapView>
              <View style={styles.summaryView}>
                <Image source={require('../assets/images/motorcycle.png')} />
                <Text style={styles.tripName}>{data[0]?.tripName}</Text>
                <Text style={styles.dateText}>
                  {data[0]?.startDate?.substring(8, 10)}{' '}
                  {month1[data[0]?.startDate?.substring(5, 7)]} -
                  {data[0]?.endDate?.substring(8, 10)}{' '}
                  {month1[data[0]?.endDate?.substring(5, 7)]}{' '}
                  {data[0]?.endDate?.substring(0, 4)}
                </Text>
                <Text style={styles.timeText}>
                  {tripDetails?.startTime?.substring(15, 21)}
                </Text>
                <View style={styles.fromToView}>
                  <Text style={styles.fromToText}>
                    {data[0]?.source[0]?.place}
                  </Text>
                  <View style={styles.lineView}></View>
                  <Text style={styles.fromToText}>
                    {data[0]?.destination[0]?.place}
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.listView}>
              <TripSummaryList data={data[0].milestones} />
              <View style={styles.recommendationsView}>
                <RecommendationTripSummary />
              </View>
              <View style={styles.addUserView}>
                <View style={styles.addUserImgView}>
                  <Pressable>
                    <Image
                      style={styles.calenderImg}
                      source={require('../assets/images/adduser.png')}
                    />
                  </Pressable>
                </View>
                {data[0].riders.length === 0 && (
                  <Text style={styles.text}>Invite other riders</Text>
                )}
                {data[0].riders.length > 0 && (
                  <BikeImageComponent />
                )}
              </View>
              <View style={styles.buttonView}>
                <CreateButton
                  onPress={() => {
                      navigation.navigate('MapDisplay',{
                        latitude:data[0].source[0].latitude,
                        longitude:data[0].source[0].longitude,
                        latitude1:data[0].destination[0].latitude,
                        longitude1:data[0].destination[0].longitude,
                        destination:data[0].milestones,
                        id:data[0]._id,
                        tripName:data[0].tripName
                      })
                  }}
                  title="GO"
                />
              </View>
            </View>
          </ScrollView>
        </View>
      ) : null}
    </SafeAreaView>
  );
};

export default GetParticularTripSummary;

const styles = StyleSheet.create({
  mainView: {
    backgroundColor: 'white',
  },

  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  mapStyle: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  scrollView: {
    height: '100%',
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
  mapView: {
    height: 270,
    width: '100%',
    // borderWidth: 1,
    backgroundColor: 'grey',
  },
  summaryView: {
    height: 186,
    marginHorizontal: 20,
    marginTop: 210,
    shadowColor: 'rgba(179,172,172,0.5)',
    shadowOffset: {
      width: 2,
      height: 3,
    },
    shadowRadius: 3,
    shadowOpacity: 0.9,
    elevation: 5,
    backgroundColor: 'white',
    alignItems: 'center',
    padding: 20,
    justifyContent: 'space-around',
    borderRadius: 8,
  },
  tripName: {
    fontFamily: 'Roboto-Regular',
    fontSize: 24,
    color: 'rgba(58,57,57,0.87)',
    lineHeight: 32,
  },
  dateText: {
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    color: '#4F504F',
    lineHeight: 21,
  },
  timeText: {
    fontFamily: 'Roboto-Regular',
    fontSize: 14,
    lineHeight: 19,
    color: '#4F504F',
  },
  fromToView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  fromToText: {
    fontFamily: 'Roboto-Regular',
    fontSize: 14,
    lineHeight: 19,
    color: '#4F504F',
    paddingHorizontal: 3,
  },
  lineView: {
    borderWidth: 1,
    height: 1,
    width: 61,
    borderColor: 'rgba(151,151,151,0.4)',
    backgroundColor: 'rgba(151,151,151,0.4)',
  },
  listView: {
    marginVertical: 155,
  },
  recommendationsView: {
    paddingTop: 20,
  },
  buttonView: {
    paddingTop: 40,
    alignItems: 'center',
  },
  calenderImg: {
    width: 22,
    height: 22,
    resizeMode: 'contain',
  },
  addUserView: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 70,
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
});

const mapStyle = [
  {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
  {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
  {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
  {
    featureType: 'administrative.locality',
    elementType: 'labels.text.fill',
    stylers: [{color: '#d59563'}],
  },
  {
    featureType: 'poi',
    elementType: 'labels.text.fill',
    stylers: [{color: '#d59563'}],
  },
  {
    featureType: 'poi.park',
    elementType: 'geometry',
    stylers: [{color: '#263c3f'}],
  },
  {
    featureType: 'poi.park',
    elementType: 'labels.text.fill',
    stylers: [{color: '#6b9a76'}],
  },
  {
    featureType: 'road',
    elementType: 'geometry',
    stylers: [{color: '#38414e'}],
  },
  {
    featureType: 'road',
    elementType: 'geometry.stroke',
    stylers: [{color: '#212a37'}],
  },
  {
    featureType: 'road',
    elementType: 'labels.text.fill',
    stylers: [{color: '#9ca5b3'}],
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry',
    stylers: [{color: '#746855'}],
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry.stroke',
    stylers: [{color: '#1f2835'}],
  },
  {
    featureType: 'road.highway',
    elementType: 'labels.text.fill',
    stylers: [{color: '#f3d19c'}],
  },
  {
    featureType: 'transit',
    elementType: 'geometry',
    stylers: [{color: '#2f3948'}],
  },
  {
    featureType: 'transit.station',
    elementType: 'labels.text.fill',
    stylers: [{color: '#d59563'}],
  },
  {
    featureType: 'water',
    elementType: 'geometry',
    stylers: [{color: '#17263c'}],
  },
  {
    featureType: 'water',
    elementType: 'labels.text.fill',
    stylers: [{color: '#515c6d'}],
  },
  {
    featureType: 'water',
    elementType: 'labels.text.stroke',
    stylers: [{color: '#17263c'}],
  },
];
