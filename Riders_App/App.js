import * as React from 'react';
import store from './src/redux/store';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {persistStore} from 'redux-persist';
// import ServiceCenterScreen from './src/screens/ServiceCenterScreen';
// import LoginScreen from './src/screens/LoginScreen';
// import DemoStack from './src/utils/DemoStack'
// import { BookService } from './src/screens/BookServiceScreen';
// import OwnersManualScreen from './src/screens/OwnersManualScreen';
// import OwnersManualDetailScreen from './src/screens/OwnersManualDetailScreen';
// import TopNavigation from './src/utils/TopNavigation';
import { Accessories } from './src/screens/AccessoriesScreen'
// import { MyGarage } from './src/screens/MyGarageScreen'
import { BookService } from './src/screens/BookServiceScreen'

let persistor = persistStore(store);

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
          <Accessories />
      </PersistGate>
    </Provider>
  );
};

export default App;
