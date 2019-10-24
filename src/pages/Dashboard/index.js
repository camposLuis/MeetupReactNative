import React from 'react';
import { Text } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import Background from '~/components/Background';

// import { Container } from './styles';

export default function Dashboard() {
  return <Background />;
}

Dashboard.navigationOptions = {
  tabBarLabel: ({ tintColor }) => <Text style={{ fontSize: 16, color: tintColor, alignSelf: 'center' }}>Meetups</Text>,
  tabBarIcon: ({ tintColor }) => (
    <Icon name="list" size={25} color={tintColor} />
  ),
};
