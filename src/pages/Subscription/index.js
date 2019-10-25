import React, { useState } from 'react';
import { Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Background from '~/components/Background';
import Header from '~/components/Header';
import MeetupList from '~/components/MeetupList';

import { Container, List } from './styles';

const data = [1, 2, 3, 4, 5];

export default function Subscription() {
  const [refresh, setRefresh] = useState(false);

  function handleRefresh() {
    setRefresh(true);
  }

  return (
    <Background>
      <Container>
        <Header />
        <List
          data={data}
          keyExtractor={item => String(item)}
          renderItem={({ item }) => (
            <MeetupList data={item} create={false} cancel />
          )}
          refreshing={refresh}
          onRefresh={handleRefresh}
        />
      </Container>
    </Background>
  );
}

Subscription.navigationOptions = {
  tabBarLabel: ({ tintColor }) => (
    <Text style={{ fontSize: 12, color: tintColor, alignSelf: 'center' }}>
      Inscrições
    </Text>
  ),
  tabBarIcon: ({ tintColor }) => (
    <Icon name="local-offer" size={20} color={tintColor} />
  ),
};
