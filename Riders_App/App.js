import * as React from 'react';
import store from './src/redux/store';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {persistStore} from 'redux-persist';
import DemoStack from './src/utils/DemoStack';
import ServiceCenterScreen from './src/screens/ServiceCenterScreen';
import ResetPassword from "./src/screens/ResetPasswordScreen"
import {BookService} from  "./src/screens/BookServiceScreen"
import {ToolKit} from "./src/screens/ToolKitScreen"
import Register from "./src/screens/RegisterScreen"
import CreateTrip from "./src/screens/CreateTripScreen"
import { OwnerManualEdit } from "./src/screens/OwnerManualEditableScreen"

// import NavigationFunctionality from './src/utils/NavigationFunctionality';
import UpcomingTrips from './src/screens/AllTripList';
import Profile from './src/screens/Profile';

let persistor = persistStore(store);

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
          <OwnerManualEdit/>
      </PersistGate>
    </Provider>
  );
};

export default App;
