import React, { useState, useMemo, useEffect } from 'react';
import { Text, TouchableOpacity, Alert } from 'react-native';
import { format, subDays, addDays, isBefore, parseISO } from 'date-fns';
import { withNavigationFocus } from 'react-navigation';

import pt from 'date-fns/locale/pt';

import Icon from 'react-native-vector-icons/MaterialIcons';
import Background from '~/components/Background';
import Header from '~/components/Header';
import MeetupList from '~/components/MeetupList';

import api from '~/services/api';

import { Container, List, SelectDate, TDate } from './styles';

function Dashboard({ isFocused }) {
  const [refresh, setRefresh] = useState(false);
  const [date, setDate] = useState(new Date());
  const [page, setPage] = useState(1);
  const [meetups, setMeetups] = useState([]);
  const [pages, setPages] = useState(1);

  const dateFormatted = useMemo(
    () => format(date, "d 'de' MMMM", { locale: pt }),
    [date]
  );

  const dateFormattedParams = useMemo(
    () => format(date, "yyyy'-'M'-'d", { locale: pt }),
    [date]
  );

  async function loadMeetups() {
    if (page === null) {
      setPage(1);
    }

    const response = await api.get(
      `shedule?date=${dateFormattedParams}&page=${page}`
    );

    setPages(response.data.pages === 0 ? 1 : response.data.pages);

    const meetupData = response.data.schedules.map(item => {
      return {
        id: item.id,
        title: item.title,
        location: item.location,
        url: item.banner.url,
        organizer: item.organizer.name,
        dateMeetup: format(
          parseISO(item.date),
          "dd 'de' MMMM 'de' yyyy', às' H'h'",
          {
            locale: pt,
          }
        ),
      };
    });

    setMeetups([...meetups, ...meetupData]);
    setRefresh(false);
  }

  useEffect(() => {
    if (isFocused && page) {
      loadMeetups();
    } else {
      setMeetups([]);
      setPage(1);
    }
  }, [isFocused, date, page]);

  function handleRefresh() {
    setRefresh(true);
    setMeetups([]);
    setPage(null);
  }

  function handleOnEndReached() {
    if (pages >= page) setPage(page + 1);
  }

  function handlePrevDay() {
    if (!isBefore(date, new Date())) {
      setDate(subDays(date, 1));
      setMeetups([]);
      setPage(1);
    } else {
      Alert.alert(
        'Informação',
        'Não é possível visualizar meetups de datas passadas'
      );
    }
  }

  function handleNextDay() {
    setDate(addDays(date, 1));
    setMeetups([]);
    setPage(1);
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
          data={meetups}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => <MeetupList data={item} create />}
          refreshing={refresh}
          onRefresh={handleRefresh}
          onEndReached={handleOnEndReached}
          onEndReachedThreshold={0.1}
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

export default withNavigationFocus(Dashboard);
