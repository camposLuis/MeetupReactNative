import React from 'react';
import { YellowBox, StatusBar } from 'react-native';
// import 'react-native-gesture-handler';

import Routes from './routes';

YellowBox.ignoreWarnings(['CTRootView cancelTouches']);

export default function src() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#131415" />
      <Routes />
    </>
  );
}
