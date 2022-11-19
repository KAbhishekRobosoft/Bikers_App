import Reducer from '../redux/AuthSlice'
import {configureStore} from '@reduxjs/toolkit';
import {persistReducer} from 'redux-persist';
import {combineReducers} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ContactSliceReducer from '../redux/ContactSlice'

const persistConfig = {
  key: 'root',
  version: 1,
  storage: AsyncStorage,
};

const reducer = combineReducers({
    auth : Reducer,
    contact: ContactSliceReducer
})

const persistRed = persistReducer(persistConfig, reducer);

export default configureStore({
    reducer: persistRed,
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({
        serializableCheck: false,
      }),
  });


// export const store = configureStore({
//     reducer: {
//         auth : Reducer
//     },
// });