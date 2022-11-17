import * as React from 'react';
import store from './src/redux/store';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {persistStore} from 'redux-persist';
import NavigationFunctionality from './src/utils/NavigationFunctionality'
import { NavigationContainer } from '@react-navigation/native';
import RegisterUserIntro from './src/screens/RegisterUserIntro'
import ImageSuccessPage from './src/screens/ImageSuccessPage'

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

