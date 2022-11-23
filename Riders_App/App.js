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

let persistor = persistStore(store);
import NavigationFunctionality from './src/utils/NavigationFunctionality';
import UpcomingTrips from './src/screens/AllTripList';
import Profile from './src/screens/Profile';
import Invoice from './src/screens/Invoice';
import ServiceRecord from './src/screens/ServiceRecordScreen';
import ChatScreen from './src/screens/ChatScreen';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        {/* <BookService /> */}
        {/* <NavigationContainer>
          <NavigationFunctionality />
        </NavigationContainer> */}
        {/* <UpcomingTrips /> */}
        {/* <Profile /> */}
        {/* <Invoice /> */}
        {/* <ServiceRecord />
         */}
        <ChatScreen />
      </PersistGate>
    </Provider>
  );
};

export default App;
