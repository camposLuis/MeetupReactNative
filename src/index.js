import React from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { YellowBox, StatusBar } from 'react-native';
// import 'react-native-gesture-handler';
import './config/ReactotronConfig';

import { store, persistor } from './store';
import Routes from './routes';

YellowBox.ignoreWarnings(['CTRootView cancelTouches']);

export default function src() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <StatusBar barStyle="light-content" backgroundColor="#131415" />
        <Routes />
      </PersistGate>
    </Provider>
  );
}
