import * as React from 'react';
import store from './src/redux/store';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {persistStore} from 'redux-persist';
import {ContactDisplay} from './src/screens/Contact'
import {MyGarage} from './src/screens/MyGarageScreen'
import {BookService} from './src/screens/BookServiceScreen'
import Register from './src/screens/RegisterScreen'
let persistor = persistStore(store);
import NavigationFunctionality from './src/utils/NavigationFunctionality'

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BookService />
         {/* <NavigationContainer>
          <NavigationFunctionality />
        </NavigationContainer> */}
      </PersistGate>
    </Provider>
  );
};

export default App;
