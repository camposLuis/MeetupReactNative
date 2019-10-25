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
  SubmitButton,
} from './styles';

export default function MeetupList({ create }) {
  return (
    <Container>
      <Banner
        source={{
          uri:
            'https://3j6x6z2bx1qq1aawwt3b6y0a-wpengine.netdna-ssl.com/wp-content/uploads/2018/03/Meet_ups.jpg',
        }}
      />

      <Info>
        <Title>Meetup de React Native</Title>
        <Date>
          <Icon name="event" size={14} color="#999" />
          <TDate>24 de outubro de 2019, às 20h</TDate>
        </Date>

        <Location>
          <Icon name="room" size={14} color="#999" />
          <TLocation>Rua Major Gote, 808</TLocation>
        </Location>

        <Organizer>
          <Icon name="person" size={14} color="#999" />
          <TOrganizer>Organizador: Luís Campos</TOrganizer>
        </Organizer>

        <SubmitButton onPress={() => {}}>
          {create ? 'Realizar inscrição' : 'Cancelar inscrição'}
        </SubmitButton>
      </Info>
    </Container>
  );
}
