import React from 'react';
import { Text } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import Background from '~/components/Background';
import Header from '~/components/Header';

import { Container } from './styles';

export default function Dashboard() {
  return (
    <Background>
      <Container>
        <Header />
      </Container>
    </Background>
  );
}

Dashboard.navigationOptions = {
  tabBarLabel: ({ tintColor }) => (
    <Text style={{ fontSize: 12, color: tintColor, alignSelf: 'center' }}>
      Meetups
    </Text>
  ),
  tabBarIcon: ({ tintColor }) => (
    <Icon name="list" size={20} color={tintColor} />
  ),
};
