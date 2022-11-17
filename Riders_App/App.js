import * as React from 'react';
import Recommendations from './src/components/Recommendations';
import CreateTrip from './src/screens/CreateTripScreen';
import StackNavigation from './src/utils/StackNavigation';
import Register from './src/screens/RegisterScreen';
import { SearchCity } from './src/screens/SearchCityScreen';
import store from './src/redux/store';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {persistStore} from 'redux-persist';
import {Milestone} from './src/components/AddMilestones'
import {TripSummary} from './src/screens/TripSummaryScreen'
import SuccessPasswordScreen from './src/screens/SuccessPasswordScreen'
import {CreateTripSuccess} from './src/screens/CreateTripSuccessScreen'
import { BottomTabBar } from '@react-navigation/bottom-tabs';
import BottomTabNavigation from './src/utils/BottomTabNavigation';
import WelcomeAboardScreen from './src/screens/WelcomeAboardScreen';
import NewUserSubStack from './src/utils/NewUserSubStack';

let persistor = persistStore(store);

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
          {/* <CreateTripSuccess /> */}
          <TripSummary />
          {/* <Contact /> */}
          {/* <NewUserSubStack /> */}
      </PersistGate>
    </Provider>
  );
};

export default App;

