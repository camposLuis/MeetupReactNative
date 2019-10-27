import React from 'react';
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
} from './styles';

export default function MeetupList({ data, create }) {
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
      </Info>
    </Container>
  );
}
