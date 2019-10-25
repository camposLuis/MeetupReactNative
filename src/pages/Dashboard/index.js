import React, { useState } from 'react';
import { Text } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import Background from '~/components/Background';
import Header from '~/components/Header';
import MeetupList from '~/components/MeetupList';

import { Container, List } from './styles';

const data = [1, 2, 3, 4, 5];

export default function Dashboard() {
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
            <MeetupList data={item} create cancel={false} />
          )}
          refreshing={refresh}
          onRefresh={handleRefresh}
        />
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
