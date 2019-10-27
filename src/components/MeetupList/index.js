import React from 'react';
import { Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  Banner,
  Info,
  Title,
  Date,
  TDate,
  Location,
  TLocation,
  Organizer,
  TOrganizer,
  SubmitButton,
} from './styles';

import api from '~/services/api';

export default function MeetupList({ data, create }) {
  async function handleMeetup(id) {
    const sub = await api.post(`subscriptions/${id}`);
  }

  return (
    <Container>
      <Banner
        source={{
          uri: data.url,
        }}
      />

      <Info>
        <Title>{data.title}</Title>
        <Date>
          <Icon name="event" size={14} color="#999" />
          <TDate>{data.dateMeetup}</TDate>
        </Date>

        <Location>
          <Icon name="room" size={14} color="#999" />
          <TLocation>{data.location}</TLocation>
        </Location>

        <Organizer>
          <Icon name="person" size={14} color="#999" />
          <TOrganizer>{`Organizador: ${data.organizer} ${data.id}`}</TOrganizer>
        </Organizer>

        <SubmitButton onPress={() => handleMeetup(data.id)}>
          {create ? 'Realizar inscrição' : 'Cancelar inscrição'}
        </SubmitButton>
      </Info>
    </Container>
  );
}
