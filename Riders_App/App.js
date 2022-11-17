import * as React from 'react';
import Register from './src/screens/RegisterScreen';
import { SearchCity } from './src/screens/SearchCityScreen';
import store from './src/redux/store';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {persistStore} from 'redux-persist';
import {Milestone} from './src/components/AddMilestones'
import {TripSummary} from './src/screens/TripSummaryScreen'
let persistor = persistStore(store);

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
          <TripSummary />
          {/* <Register /> */}
      </PersistGate>
    </Provider>
  );
};

export default App;
