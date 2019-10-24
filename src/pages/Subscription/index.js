import React from 'react';
import { Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Background from '~/components/Background';

// import { Container } from './styles';

export default function Subscription() {
  return (
    <Background />
  );
}

Subscription.navigationOptions = {
  tabBarLabel: ({ tintColor }) => <Text style={{ fontSize: 16, color: tintColor, alignSelf: 'center' }}>Inscrições</Text>,
  tabBarIcon: ({ tintColor }) => <Icon name="local-offer" size={25} color={tintColor} />
}