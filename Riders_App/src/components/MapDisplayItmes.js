import React from 'react';
import {
  Pressable,
  StyleSheet,
  View,
  Image,
  useWindowDimensions,
  ImageBackground,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon1 from 'react-native-vector-icons/MaterialIcons';
import GetLocation from 'react-native-get-location';

export const MapNavBar = ({navigation}) => {
  return (
    <View style={styles.navBar}>
      <Pressable onPress={()=>navigation.goBack()}>
        <Icon
          name="md-arrow-back"
          color={'grey'}
          size={25}
          style={styles.icon}
        />
      </Pressable>
      <Pressable>
        <Image
          source={require('../assets/images/insertcard.png')}
          style={{
            height: 24,
            width: 24,
          }}
        />
      </Pressable>
      <Pressable>
        <Image
          source={require('../assets/images/gasstation.png')}
          style={{
            height: 24,
            width: 21,
          }}
        />
      </Pressable>
      <Pressable>
        <Image
          source={require('../assets/images/bed.png')}
          style={{
            height: 18,
            width: 24,
          }}
        />
      </Pressable>
      <Pressable>
        <Image
          source={require('../assets/images/restaurant.png')}
          style={styles.icon}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  navBar: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    shadowColor: 'rgba(172,165,165,0.5)',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 4,
    shadowOpacity: 0.9,
    elevation: 5,
    opacity: 0.9,
    height: 60,
    alignItems: 'center',
    justifyContent: 'space-around',
  },

  icon: {
    height: 24,
    width: 24,
  },
  gradientCreateButton: {
    height: 45,
    shadowColor: 'rgba(126,118,118,0.5)',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    width: '100%',
    flex: 1,
  },

  indicatorContiner: {
    backgroundColor: '#FFFFFF',
    shadowColor: 'rgba(0,0,0,0.5)',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 4,
    shadowOpacity: 0.9,
    elevation: 5,
    opacity: 0.9,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
    borderRadius: 5,
  },
});

export default MapNavBar;

export const MapBottomBar = ({musicControlIcon, musicControl}) => {
  const {height, width} = useWindowDimensions();
  const top = width > height ? (Platform.OS === 'ios' ? '1%' : '1%') : '900%';

  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}
      colors={['#ED7E2B', '#F4A264']}
      style={[styles.gradientCreateButton, {top}]}>
      <Pressable
        onPress={() => {
          musicControl();
          if (musicControlIcon === 'ios-play') {
            GetLocation.getCurrentPosition({
              enableHighAccuracy: true,
              timeout: 15000,
            })
              .then(location => {
                console.log(location);
              })
              .catch(error => {
                const {code, message} = error;
                console.warn(code, message);
              });
          }
        }}>
        <Icon
          name={musicControlIcon}
          color={'white'}
          size={30}
          style={{height: 35, width: 35}}
        />
      </Pressable>
    </LinearGradient>
  );
};

export const MapChatButton = () => {
  const {height, width} = useWindowDimensions();
  const top = width > height ? (Platform.OS === 'ios' ? 80 : 80) : '275%';
  const left = width > height ? (Platform.OS === 'ios' ? '85%' : '85%') : '75%';

  return (
    <View
      style={[
        {top},
        {left},
        {flex: 1, position: 'absolute', alignItems: 'center'},
      ]}>
      <View style={styles.indicatorContiner}>
        <Icon1 name="gps-fixed" color={'#A4A4A4'} size={25} />
      </View>
      <Pressable>
        <Image source={require('../assets/images/wechat.png')} />
      </Pressable>
    </View>
  );
};
