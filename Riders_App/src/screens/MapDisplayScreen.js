import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  useWindowDimensions,
  View,
} from 'react-native';
import MapView, {Polyline} from 'react-native-maps';
import {Marker} from 'react-native-maps';
import MapNavBar, {
  MapBottomBar,
  MapChatButton,
} from '../components/MapDisplayItmes';

const MapDisplayScreen = ({navigation,route}) => {
  const [latitude, setLatitude] = useState(parseFloat(route.params.latitude));
  const [longitude, setLongitude] = useState(
    parseFloat(route.params.longitude),
  );
  const [latitude1, setLatitude1] = useState(
    parseFloat(route.params.latitude1),
  );
  const [longitude1, setLongitude1] = useState(
    parseFloat(route.params.longitude1),
  );

  const [musicControlState, setMusicControlState] = useState(false);

  const {height, width} = useWindowDimensions();
  const top = width > height ? (Platform.OS === 'ios' ? '8%' : '8%') : '300%';
  const top1 = width > height ? (Platform.OS === 'ios' ? 50 : '8%') : 550;
  const musicControl = () => {
    setMusicControlState(!musicControlState);
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1}}>
        <MapNavBar navigation= {navigation}/>
        <View style={{flex: 1}}>
          <MapView style={styles.mapStyle} customMapStyle={mapStyle}>
            <Polyline
              coordinates={[
                {
                  latitude: parseFloat(latitude),
                  longitude: parseFloat(longitude),
                  latitudeDelta: 0.03,
                  longitudeDelta: 0.01,
                },
                {
                  latitude: parseFloat(latitude1),
                  longitude: parseFloat(longitude1),
                  latitudeDelta: 0.03,
                  longitudeDelta: 0.01,
                },
              ]}
              strokeColor={'blue'}
              strokeWidth={5}
              lineDashPattern={[1]}
            />

            <Marker
              coordinate={{
                latitude: parseFloat(route.params.latitude),
                longitude: parseFloat(route.params.longitude),
                latitudeDelta: 0.03,
                longitudeDelta: 0.01,
              }}
            />

            <Marker
              coordinate={{
                latitude: parseFloat(route.params.latitude1),
                longitude: parseFloat(route.params.longitude1),
                latitudeDelta: 0.03,
                longitudeDelta: 0.01,
              }}
            />
          </MapView>
          <View>
            <View style={{flex: 1, top: top1}}>
              <MapChatButton navigation={navigation}/>
              <View style={[styles.bottomContainer, {top}]}>
                <MapBottomBar
                  musicControl={musicControl}
                  latitude={val => setLatitude(val)}
                  longitude={val => setLongitude(val)}
                  latitude1={val => setLatitude1(val)}
                  longitude1={val => setLongitude(val)}
                  musicControlIcon={
                    musicControlState ? 'ios-pause-sharp' : 'ios-play'
                  }
                />
              </View>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  bottomContainer: {
    flex: 1,
    marginTop: '30%',
  },
  mapStyle: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
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

export default MapDisplayScreen;
