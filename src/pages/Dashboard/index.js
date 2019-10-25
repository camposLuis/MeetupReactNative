import React, { useState, useMemo } from 'react';
import { Text, TouchableOpacity, Alert } from 'react-native';
import { format, subDays, addDays, isBefore } from 'date-fns';

import pt from 'date-fns/locale/pt';

import Icon from 'react-native-vector-icons/MaterialIcons';
import Background from '~/components/Background';
import Header from '~/components/Header';
import MeetupList from '~/components/MeetupList';

import { Container, List, SelectDate, TDate } from './styles';

const data = [1, 2, 3, 4, 5];

export default function Dashboard() {
  const [refresh, setRefresh] = useState(false);

  const [date, setDate] = useState(new Date());

  const dateFormatted = useMemo(
    () => format(date, "d 'de' MMMM", { locale: pt }),
    [date]
  );

  function handleRefresh() {
    setRefresh(true);
  }

  function handlePrevDay() {
    if (!isBefore(date, new Date())) {
      setDate(subDays(date, 1));
    } else {
      Alert.alert(
        'Informação',
        'Não é possível visualizar meetups de datas passadas'
      );
    }
  }

  function handleNextDay() {
    setDate(addDays(date, 1));
  }

  return (
    <Background>
      <Container>
        <Header />

        <SelectDate>
          <TouchableOpacity onPress={handlePrevDay}>
            <Icon
              name="keyboard-arrow-left"
              size={30}
              color="rgba(255, 255, 255, 0.9)"
            />
          </TouchableOpacity>
          <TDate>{dateFormatted}</TDate>
          <TouchableOpacity onPress={handleNextDay}>
            <Icon
              name="keyboard-arrow-right"
              size={30}
              color="rgba(255, 255, 255, 0.9)"
            />
          </TouchableOpacity>
        </SelectDate>

        <List
          data={data}
          keyExtractor={item => String(item)}
          renderItem={({ item }) => <MeetupList data={item} create />}
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
