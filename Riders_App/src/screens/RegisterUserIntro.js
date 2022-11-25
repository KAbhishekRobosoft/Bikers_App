import React, { useEffect } from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  Image,
  Text,
  useWindowDimensions,
  Platform,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import {uploadImage} from '../services/Auth';
import SmallButton from '../components/SmallButton';
import ImagePicker from 'react-native-image-crop-picker';
import { useDispatch, useSelector } from 'react-redux';
import { setImage } from '../redux/AuthSlice';
import { refreshToken } from '../services/Auth';
import { setToken } from '../redux/AuthSlice'; 

function RegisterUserIntro({navigation}) {
  const dispatch= useDispatch()
  const authData= useSelector(state=>state.auth)


  const pickImage = () => {
    ImagePicker.openPicker({
      width: 200,
      height: 200,
      cropping: true,
    }).then(async image => {
      
      const payload = new FormData();
      payload.append('image', {
        uri: image.path,
        type: image.mime,
        name: `${image.filename}.${image.mime.substring(
          image.mime.indexOf('/') + 1,
        )}`,
      })
      let cred= await getVerifiedKeys(authData.userToken)
      const resp = await uploadImage(payload,cred)
      if(resp.hasOwnProperty('message')){
          dispatch(setImage('https'+resp.url.substring(4)))
          navigation.navigate('ImageSuccess')
      }
    })
  };
  console.log(authData.userData)
  const {width, height} = useWindowDimensions();
  const marginTop = height > width ? (Platform.OS === 'ios' ? 220 : 200) : 118;
  return (
    <SafeAreaView style={styles.rUserCon}>
      <View style={styles.rUserBut}>
        <SmallButton onPress= {()=>{
          navigation.navigate('ImageSuccess')
        }} name="Skip" />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.rUserSubCon}>
          <View style={styles.rUserSubCon}>
            <Image
              style={styles.rUserImg}
              source={require('../assets/images/photoless.png')}
            />
            <Text style={styles.rUserName}>Hey {authData.userData.userName}!!</Text>
            <Text style={styles.rUserSug1}>to make it more cool select</Text>
            <Text style={styles.rUserSug2}>your avatar.</Text>
          </View>
          <View style={[styles.rUserPicOptions, {marginTop: marginTop}]}>
            <View style={styles.rUserOptions1}>
              <TouchableOpacity
                onPress={() => pickImage()}
                style={{alignItems: 'center'}}>
                <Image
                  style={styles.galleryImg}
                  source={require('../assets/images/gallery.png')}
                />
                <Text style={styles.galleryText}>Gallery</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.rUserOptions2}>
              <Image
                style={styles.galleryImg}
                source={require('../assets/images/photo-camera.png')}
              />
              <Text style={styles.galleryText}>Take photo</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  rUserCon: {
    flex: 1,
  },

  galleryText: {
    marginTop: 12,
    color: '#F7931E',
  },

  galleryImg: {
    width: 35,
    height: 28,
  },

  rUserOptions1: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '50%',
    height: 155,
    borderRightWidth: 1,
    borderRightColor: '#e7e7e7',
  },

  rUserOptions2: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '50%',
    height: 155,
  },

  rUserPicOptions: {
    flexDirection: 'row',
    width: '100%',
    height: 155,
    marginVertical: 10,
    justifyContent: 'center',
    borderTopWidth: 1,
    borderTopColor: '#e7e7e7',
    shadowColor: 'black',
    shadowOffset: {width: 0, height: -1},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },

  rUserName: {
    marginTop: 42,
    lineHeight: 23,
    fontSize: 24,
    fontFamily: 'Roboto-Regular',
    color: '#4F504F',
  },

  rUserSug1: {
    lineHeight: 24,
    fontSize: 16,
    color: '#4F504F',
  },

  rUserSug2: {
    lineHeight: 24,
    fontSize: 16,
    color: '#4F504F',
  },

  rUserImg: {
    height: 180,
    width: 246,
    marginTop: 13,
  },
  rUserSubCon: {
    flex: 1,
    alignItems: 'center',
  },

  rUserBut: {
    alignSelf: 'flex-end',
    marginTop: 19,
    marginRight: 20,
  },
});

export default RegisterUserIntro;
