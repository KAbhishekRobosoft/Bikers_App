import * as React from 'react';
import store from './src/redux/store';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {persistStore} from 'redux-persist';
<<<<<<< HEAD
import { NavigationContainer } from '@react-navigation/native';
import NavigationFunctionality from './src/utils/NavigationFunctionality'
import ResetPasswordScreen from './src/screens/ResetPasswordScreen'
import NumberEntryScreen from './src/screens/NumberEntryScreen'
=======
import {ContactDisplay} from './src/screens/Contact'
>>>>>>> 6c95cc3fa17a8ba4cfb756bf785ef97140bc06ec

let persistor = persistStore(store);

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        {/* <NavigationContainer>
          <NavigationFunctionality />
        </NavigationContainer> */}
       <NumberEntryScreen />
      </PersistGate>
    </Provider>
  );
};

export default App;
