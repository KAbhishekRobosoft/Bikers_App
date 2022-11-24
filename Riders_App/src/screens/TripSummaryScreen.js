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
import {TripSummaryList} from '../components/summarizeMilestones';
import { RecommendationTripSummary } from '../components/Recommendations';
import { CreateButton } from '../components/Buttons';
import { useSelector } from 'react-redux';
import { month } from '../utils/Functions';
import BikeImageComponent from '../components/BikeImageComponent';

export const TripSummary = ({navigation}) => {
  const milestonedata = useSelector(state => state.milestone.milestoneData)
  const tripDetails = useSelector(state => state.milestone.storeTrip)
  const contactsData = useSelector(state => state.contact);
  console.log('tripdetailssss',tripDetails)
  console.log('dfdgd',milestonedata)
    return (
    <SafeAreaView>
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
            <View style={styles.summaryView}>
              <Image source={require('../assets/images/motorcycle.png')} />
              <Text style={styles.tripName}>{tripDetails.tripName}</Text>
              <Text style={styles.dateText}>{tripDetails.startDate.substring(8,10)} {tripDetails.startDate.substring(4,7)} - {tripDetails.endDate.substring(8,10)} {tripDetails.endDate.substring(4,7)} {tripDetails.endDate.substring(11, 15)}</Text>
              <Text style={styles.timeText}> {tripDetails.startTime.substring(15,21)}</Text>
              <View style={styles.fromToView}>
                <Text style={styles.fromToText}>{tripDetails.source[0].place}</Text>
                <View style={styles.lineView}></View>
                <Text style={styles.fromToText}>{tripDetails.destination[0].place}</Text>
              </View>
            </View>
          </View>
          <View style={styles.listView}>
            <TripSummaryList data={milestonedata}/>
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
              {contactsData.addTripContacts.length === 0 && (
              <Text style={styles.text}>Invite other riders</Text>
            )}
            {contactsData.addTripContacts.length > 0 && <BikeImageComponent />}
            </View>
            <View style={styles.buttonView}>
              <CreateButton title="CREATE" />
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainView: {
    backgroundColor: 'white',
    // height: '100%',
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
    alignItems: 'center'
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
