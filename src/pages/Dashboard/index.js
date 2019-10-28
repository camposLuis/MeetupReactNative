import React, { useState, useMemo, useEffect } from 'react';
import { Text, TouchableOpacity, Alert } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { format, subDays, addDays, isBefore, parseISO } from 'date-fns';
import { withNavigationFocus } from 'react-navigation';

import pt from 'date-fns/locale/pt';

import Icon from 'react-native-vector-icons/MaterialIcons';
import Background from '~/components/Background';
import Header from '~/components/Header';
import MeetupList from '~/components/MeetupList';
import Empty from '~/components/Empty';

import api from '~/services/api';

import { createSubscriptionRequest } from '~/store/modules/subscription/actions';

import {
  Container,
  List,
  SelectDate,
  TDate,
  SubmitButton,
  Content,
  ContentEmpty,
} from './styles';

function Dashboard({ isFocused }) {
  const dispatch = useDispatch();

  const loading = useSelector(state => state.subscription.loading);
  const user = useSelector(state => state.user.profile);

  const [refresh, setRefresh] = useState(false);
  const [date, setDate] = useState(new Date());
  const [page, setPage] = useState(1);
  const [meetups, setMeetups] = useState([]);
  const [pages, setPages] = useState(1);
  const [itemLoading, setItemLoading] = useState();

  const dateFormatted = useMemo(
    () => format(date, "d 'de' MMMM", { locale: pt }),
    [date]
  );

  const dateFormattedParams = useMemo(
    () => format(date, "yyyy'-'M'-'dd", { locale: pt }),
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
        organizerId: item.organizer.id,
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

  function handleSubmit(subMeetup) {
    if (subMeetup.organizerId === user.id) {
      Alert.alert(
        'Inscrição',
        `Não é possível realizar a incrição, você é o organizador do evento`
      );
    } else {
      Alert.alert(
        'Inscrição',
        `Deseja realizar a inscrição para o evento ${subMeetup.title}`,
        [
          {
            text: 'Sim',
            onPress: () => dispatch(createSubscriptionRequest(subMeetup.id)),
          },
          { text: 'Não', onPress: () => {}, style: 'cancel' },
        ]
      );
      setItemLoading(subMeetup.id);
    }
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

        {meetups.length !== 0 ? (
          <List
            data={meetups}
            keyExtractor={item => String(item.id)}
            renderItem={({ item }) => (
              <Content>
                <MeetupList data={item} />
                <SubmitButton
                  loading={
                    itemLoading && itemLoading === item.id ? loading : false
                  }
                  onPress={() => handleSubmit(item)}
                >
                  Realizar inscrição
                </SubmitButton>
              </Content>
            )}
            refreshing={refresh}
            onRefresh={handleRefresh}
            onEndReached={handleOnEndReached}
            onEndReachedThreshold={0.1}
          />
        ) : (
          <ContentEmpty>
            <Empty typeText />
          </ContentEmpty>
        )}
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
