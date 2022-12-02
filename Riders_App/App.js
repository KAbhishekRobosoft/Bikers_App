import React,{useEffect} from 'react';
import {View,Text} from 'react-native'
import store from './src/redux/store';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {persistStore} from 'redux-persist';
import {NavigationContainer} from '@react-navigation/native';
import NavigationFunctionality from './src/utils/NavigationFunctionality';

let persistor = persistStore(store);

const App = () => {
  return (

    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <NavigationContainer>
          <NavigationFunctionality />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;

