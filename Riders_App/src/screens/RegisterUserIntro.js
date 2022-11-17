import React, {useState} from 'react';
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
import {launchImageLibrary} from 'react-native-image-picker';

function RegisterUserIntro() {
  const [image, setImage] = useState('');

  const requestCameraPermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.CAMERA,
          {
            title: 'Camera Permission',
            message: 'App needs camera permission',
          },
        );
        // If CAMERA Permission is granted
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } catch (err) {
        console.warn(err);
        return false;
      }
    } else return true;
  };

  const requestExternalWritePermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          {
            title: 'External Storage Write Permission',
            message: 'App needs write permission',
          },
        );
        // If WRITE_EXTERNAL_STORAGE Permission is granted
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } catch (err) {
        console.warn(err);
        alert('Write permission err', err);
      }
      return false;
    } else return true;
  };

  const chooseFile = type => {
    let options = {
      mediaType: type,
      maxWidth: 300,
      maxHeight: 550,
      quality: 1,
    };
    launchImageLibrary(options, async response => {
      console.log('Response = ', response);

      if (response.didCancel) {
        alert('User cancelled camera picker');
        return;
      } else if (response.errorCode == 'camera_unavailable') {
        alert('Camera not available on device');
        return;
      } else if (response.errorCode == 'permission') {
        alert('Permission not satisfied');
        return;
      } else if (response.errorCode == 'others') {
        alert(response.errorMessage);
        return;
      }
      setImage(response.assets[0].uri);
      const resp = await uploadImage(response.assets[0].uri);
      console.log(resp);
    });
  };

  const {width, height} = useWindowDimensions();
  const marginTop = height > width ? (Platform.OS === 'ios' ? 220 : 200) : 118
  const marginRight= width > height ? (Platform.OS === "ios" ? 160 : 0) : 50

  return (
    <SafeAreaView style={styles.rUserCon}>
      <View style={styles.rUserBut}>
        <SmallButton name="Skip" />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.rUserSubCon}>
          <View style={styles.rUserSubCon}>
        <Image
          style={styles.rUserImg}
          source={require('../assets/images/photoless.png')}
        />
            <Text style={styles.rUserName}>Hey Ashley!!</Text>
            <Text style={styles.rUserSug1}>to make it more cool select</Text>
            <Text style={styles.rUserSug2}>your avatar.</Text>
          </View>
          <View style={[styles.rUserPicOptions, {marginTop: marginTop}]}>
            <View style={styles.rUserOptions1}>
              <TouchableOpacity
                onPress={() => chooseFile('photo')}
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

  rUserImg1: {
    borderRadius: 80,
    height: 133,
    width: 133,
    position:"absolute"
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
