import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  ImageBackground,
  Pressable,
  FlatList,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import {useSelector} from 'react-redux';
import ActivityList from '../components/MyActivityList';
import {getSortedTripDetails, profileData} from '../services/Auth';
import {month} from '../utils/Functions';

const Profile = ({image}) => {
  const [personData, setPersonData] = useState({});
  const [tripDetails, setTripDetails] = useState([]);
  const userData = useSelector(state => state.auth.userData);
  //userData is use for image and mobileNumber of user.

  useEffect(() => {
    setTimeout(async () => {
      const data = await profileData();
      setPersonData(data);
    }, 500);
  }, []);

  useEffect(() => {
    setTimeout(async () => {
      const tripdata = await getSortedTripDetails();
      setTripDetails(tripdata);
    }, 500);
  }, []);

  console.log(tripDetails);

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={{flex: 1}}>
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          colors={['#ED7E2C', '#F7B557']}
          style={styles.gradientCreateButton}>
          <ImageBackground
            source={require('../assets/images/profilebike.png')}
            resizeMode="cover"
            style={styles.backgroundImage}></ImageBackground>
          <Pressable>
            <Image
              source={require('../assets/images/edit.png')}
              style={styles.editIcon}
            />
          </Pressable>
          <View style={styles.profileContainer}>
            <Image
              source={require('../assets/images/photoless.png')}
              style={styles.profileImage}
            />
            <Text style={styles.profileName}>
              {personData?.userDetails?.userName}
            </Text>
            <Text style={styles.bioText}>
              {personData?.userDetails?.aboutUser}
            </Text>
            <View style={styles.followContainer}>
              <Text style={styles.followText}>Follow</Text>
            </View>
          </View>
        </LinearGradient>
        <View style={styles.detailContainer}>
          <View style={styles.textContainer}>
            <Text style={styles.detailText}>Rides</Text>
            <Text style={styles.numberText}>{personData?.tripCount}</Text>
          </View>
          <View style={styles.line}></View>
          <View style={styles.textContainer}>
            <Text style={styles.detailText}>Following</Text>
            <Text style={styles.numberText}>
              {personData?.userDetails?.followingCount}
            </Text>
          </View>
          <View style={styles.line}></View>
          <View style={styles.textContainer}>
            <Text style={styles.detailText}>Followers</Text>
            <Text style={styles.numberText}>
              {personData?.userDetails?.followersCount}
            </Text>
          </View>
        </View>
        <View>
          <Text style={styles.activitiText}>My Activities</Text>
        </View>
        <ScrollView style={{flex: 1}}>
          {tripDetails.length > 0
            ? tripDetails.map(details => (
                <ActivityList
                  key={details?._id}
                  image={'https' + details?.tripImage?.substring(4)}
                  placeName={details?.tripName}
                  tripYear={details?.startDate?.substring(0, 4)}
                  startDate={details?.startDate?.substring(8, 10)}
                  endDate={details?.endDate?.substring(8, 10)}
                  startMonth={month[details?.startDate?.substring(5, 7)]}
                  endMonth={month[details?.endDate?.substring(5, 7)]}
                />
              ))
            : null}
        </ScrollView>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },

  gradientCreateButton: {
    height: 341,
    shadowColor: 'rgba(0,0,0,0.5)',
  },

  backgroundImage: {
    opacity: 0.06,
    flex: 1,
    height: 301,
    flexWrap: 'nowrap',
    marginTop: 20,
    left: '37%',
    position: 'absolute',
    width: '100%',
  },

  profileContainer: {
    alignItems: 'center',
    height: 300,
    width: '100%',
  },

  profileImage: {
    height: 115,
    width: 115,
    // borderWidth: 2,
    borderRadius: 65,
    marginBottom: 10,
    borderColor: '#FFFFFF',
  },

  followContainer: {
    height: 28,
    borderColor: '#FFFFFF',
    borderRadius: 15.5,
    width: '30%',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
  },

  followText: {
    color: '#FFFFFF',
    height: 19,
    lineHeight: 19,
    fontSize: 14,
    fontFamily: 'Roboto',
    fontWeight: '500',
    letterSpacing: 0,
  },

  profileName: {
    color: '#FFFFFF',
    height: 28,
    lineHeight: 28,
    fontSize: 20,
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    letterSpacing: 0,
  },

  bioText: {
    color: '#FFFFFF',
    height: 28,
    lineHeight: 28,
    fontSize: 12,
    fontFamily: 'Roboto',
    fontWeight: '500',
    letterSpacing: 0,
    marginBottom: 10,
  },

  detailContainer: {
    height: 71,
    width: '90%',
    alignSelf: 'center',
    bottom: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    shadowColor: 'rgba(95,95,95,0.5)',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 4,
    shadowOpacity: 0.9,
    elevation: 5,
  },

  line: {
    borderLeftWidth: 1,
    height: 44,
    opacity: 0.19,
    borderColor: '#979797;',
  },

  detailText: {
    color: '#7E7D7D',
    fontFamily: 'Roboto',
    fontSize: 14,
    alignSelf: 'center',
    fontWeight: '500',
    marginBottom: 5,
    width: 100,
    textAlign: 'center',
  },

  numberText: {
    color: '#EE8330',
    fontFamily: 'Roboto',
    fontSize: 22,
    alignSelf: 'center',
    fontWeight: '500',
    width: 100,
    textAlign: 'center',
  },

  editIcon: {
    tintColor: '#FFFFFF',
    height: 20,
    width: 20,
    marginLeft: '90%',
    marginTop: '5%',
  },

  activitiText: {
    color: '#616161',
    height: 28,
    fontSize: 18,
    fontFamily: 'Roboto',
    fontWeight: '500',
    lineHeight: 28,
    marginLeft: 21,
    bottom: 20,
  },
});

export default Profile;
