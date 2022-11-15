import * as React from 'react';
import Register from './src/screens/RegisterScreen';
import store from './src/redux/store';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {persistStore} from 'redux-persist';

let persistor = persistStore(store);

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Register />
      </PersistGate>
    </Provider>
  );
};

export default App;
