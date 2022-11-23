import * as React from 'react';
import store from './src/redux/store';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {persistStore} from 'redux-persist';
import ServiceCenterScreen from './src/screens/ServiceCenterScreen';
import LoginScreen from './src/screens/LoginScreen';
import DemoStack from './src/utils/DemoStack';
import {BookService} from './src/screens/BookServiceScreen';
import OwnersManualScreen from './src/screens/OwnersManualScreen';
import OwnersManualDetailScreen from './src/screens/OwnersManualDetailScreen';
import TopNavigation from './src/utils/TopNavigation';
import {AddBikeAndPersonalDetails} from './src/screens/AddBike&PersonalDetailsScreen';
import CreateTrip from './src/screens/CreateTripScreen';
import BookingDetails from './src/screens/BookingDetailsScreen'

let persistor = persistStore(store);
import NavigationFunctionality from './src/utils/NavigationFunctionality';
import {NavigationContainer} from '@react-navigation/native';
import {Accessories} from './src/screens/AccessoriesScreen';
const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
          <BookService/>
      </PersistGate>
    </Provider>
  );
};

export default App;

// Integration of Google map in React Native using react-native-maps
// https://aboutreact.com/react-native-map-example/

// // Import React
// import React, { useEffect,useRef } from 'react';
// // Import required components
// import {SafeAreaView, StyleSheet, View} from 'react-native';
// import {Polyline} from 'react-native-maps';
// // Import Map and Marker
// import MapView, {Marker} from 'react-native-maps';

// const App = () => {

//   const mapRef = useRef(null);
//   useEffect(()=>{
//     setTimeout(()=>{
//       mapRef.current.animateToRegion(tokyoRegion, 3 * 1000);
//     },500)
//   },[])
//   const tokyoRegion = {
//     latitude: 35.6762,
//     longitude: 139.6503,
//     latitudeDelta: 0.03,
//     longitudeDelta: 0.01
//   };
//   const chibaRegion = {
//     latitude: 35.6074,
//     longitude: 140.1065,

//   };
//   return (
//     <SafeAreaView style={{flex: 1}}>
//       <View style={styles.container}>
//         <MapView ref= {mapRef} style={styles.mapStyle} customMapStyle={mapStyle}>
//           <Polyline
//             coordinates={[tokyoRegion, chibaRegion]} //specify our coordinates
//             strokeColor={'blue'}
//             strokeWidth={5}
//             lineDashPattern={[1]}
//           />

//           <Marker
//             coordinate={tokyoRegion}
//           />

//           <Marker
//             coordinate={chibaRegion}
//           />
//         </MapView>
//       </View>
//     </SafeAreaView>
//   );
// };

// export default App;

// const mapStyle = [
//   {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
//   {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
//   {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
//   {
//     featureType: 'administrative.locality',
//     elementType: 'labels.text.fill',
//     stylers: [{color: '#d59563'}],
//   },
//   {
//     featureType: 'poi',
//     elementType: 'labels.text.fill',
//     stylers: [{color: '#d59563'}],
//   },
//   {
//     featureType: 'poi.park',
//     elementType: 'geometry',
//     stylers: [{color: '#263c3f'}],
//   },
//   {
//     featureType: 'poi.park',
//     elementType: 'labels.text.fill',
//     stylers: [{color: '#6b9a76'}],
//   },
//   {
//     featureType: 'road',
//     elementType: 'geometry',
//     stylers: [{color: '#38414e'}],
//   },
//   {
//     featureType: 'road',
//     elementType: 'geometry.stroke',
//     stylers: [{color: '#212a37'}],
//   },
//   {
//     featureType: 'road',
//     elementType: 'labels.text.fill',
//     stylers: [{color: '#9ca5b3'}],
//   },
//   {
//     featureType: 'road.highway',
//     elementType: 'geometry',
//     stylers: [{color: '#746855'}],
//   },
//   {
//     featureType: 'road.highway',
//     elementType: 'geometry.stroke',
//     stylers: [{color: '#1f2835'}],
//   },
//   {
//     featureType: 'road.highway',
//     elementType: 'labels.text.fill',
//     stylers: [{color: '#f3d19c'}],
//   },
//   {
//     featureType: 'transit',
//     elementType: 'geometry',
//     stylers: [{color: '#2f3948'}],
//   },
//   {
//     featureType: 'transit.station',
//     elementType: 'labels.text.fill',
//     stylers: [{color: '#d59563'}],
//   },
//   {
//     featureType: 'water',
//     elementType: 'geometry',
//     stylers: [{color: '#17263c'}],
//   },
//   {
//     featureType: 'water',
//     elementType: 'labels.text.fill',
//     stylers: [{color: '#515c6d'}],
//   },
//   {
//     featureType: 'water',
//     elementType: 'labels.text.stroke',
//     stylers: [{color: '#17263c'}],
//   },
// ];

// const styles = StyleSheet.create({
//   container: {
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     right: 0,
//     bottom: 0,
//     alignItems: 'center',
//     justifyContent: 'flex-end',
//   },
//   mapStyle: {
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     right: 0,
//     bottom: 0,
//   },
// });
