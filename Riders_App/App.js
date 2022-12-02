import React,{useEffect} from 'react';
import {View,Text} from 'react-native'
import store from './src/redux/store';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {persistStore} from 'redux-persist';
import {NavigationContainer} from '@react-navigation/native';
import NavigationFunctionality from './src/utils/NavigationFunctionality';
import {getNearbyPlaces} from './src/services/Auth'
import ImageLikeCommentScreen from './src/screens/ImageLikeCommentScreen';
import RNBootSplash from "react-native-bootsplash";
let persistor = persistStore(store);

const App = () => {
    // useEffect(()=>{
    //   setTimeout(async() => {
    //       const res= await getNearbyPlaces("atm","13.3409","74.7421")
    //   },500);
    // })
  return (

    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <NavigationContainer onReady={() => RNBootSplash.hide()}>
          <NavigationFunctionality />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;

