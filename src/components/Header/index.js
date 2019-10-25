import React from 'react';
import { Image } from 'react-native';

import { Container, Content } from './styles';

import logo from '~/assets/logoHeader.png';

export default function Header() {
  return (
    <Container>
      <Content>
        <Image source={logo} />
      </Content>
    </Container>
  );
}
