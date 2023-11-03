import {combineReducers} from 'redux';
import configureStore from './createStore';
import MainActions, {reducer as mainReducer} from './mainRedux/mainRedux';
import NavigationActions, {
  reducer as navigationReducer,
} from './navigationRedux/navigationRedux';

/* ------------- Assemble The Reducers ------------- */
export const reducers = combineReducers({
  navigation: navigationReducer,
  main: mainReducer,
});

import {persistReducer, persistStore} from 'redux-persist';
import storage from '@react-native-async-storage/async-storage'; // defaults to localStorage for web

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

export default () => {
  let {store} = configureStore(persistedReducer);
  let persistor = persistStore(store);
  return {store, persistor};
};

export * from './hooks';
export {MainActions, NavigationActions};
