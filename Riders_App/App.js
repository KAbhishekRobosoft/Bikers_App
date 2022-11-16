import * as React from 'react';
import NavigationFunctionality from './src/utils/NavigationFunctionality';
import store from './src/redux/store';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {persistStore} from 'redux-persist';
import { NavigationContainer } from '@react-navigation/native';

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

