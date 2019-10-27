import React from 'react';

import { Container, TMessage } from './styles';

export default function Empty({ typeText }) {
  return (
    <Container>
      <TMessage>
        {typeText
          ? 'Não exite meetups para essa data'
          : 'Nenhuma inscrição encontrada'}
      </TMessage>
    </Container>
  );
}
