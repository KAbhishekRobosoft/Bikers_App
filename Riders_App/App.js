import * as React from 'react';
import store from './src/redux/store';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {persistStore} from 'redux-persist';
import DemoStack from './src/utils/DemoStack';
import ServiceCenterScreen from './src/screens/ServiceCenterScreen';
import ResetPassword from "./src/screens/ResetPasswordScreen"

let persistor = persistStore(store);
import NavigationFunctionality from './src/utils/NavigationFunctionality'

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
          <ResetPassword/>
      </PersistGate>
    </Provider>
  );
};

export default App;
