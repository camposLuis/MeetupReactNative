import React from 'react';
import { Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Background from '~/components/Background';

// import { Container } from './styles';

export default function Profile() {
  return (
    <Background />
  );
}

Profile.navigationOptions = {
  tabBarLabel: ({ tintColor }) => <Text style={{ fontSize: 16, color: tintColor, alignSelf: 'center' }}>Meu perfil</Text>,
  tabBarIcon: ({ tintColor }) => <Icon name="person" size={25} color={tintColor} />
}
