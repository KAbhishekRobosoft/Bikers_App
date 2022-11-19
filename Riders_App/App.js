import * as React from 'react';
import store from './src/redux/store';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {persistStore} from 'redux-persist';
import {ContactDisplay} from './src/screens/Contact'

let persistor = persistStore(store);

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ContactDisplay />
        {/* <NavigationContainer>
          <NavigationFunctionality />
        </NavigationContainer> */}
        {/* <SearchCity /> */}
        {/* <NewUserSubStack /> */}
      </PersistGate>
    </Provider>
  );
};

export default App;
