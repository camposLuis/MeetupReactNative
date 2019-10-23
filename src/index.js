import React from 'react';
import { YellowBox } from 'react-native';
import 'react-native-gesture-handler';

import Routes from './routes';

YellowBox.ignoreWarnings(['CTRootView cancelTouches']);

export default function src() {
  return <Routes />;
}
