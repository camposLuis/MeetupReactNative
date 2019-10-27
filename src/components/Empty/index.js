import React from 'react';
import PropTypes from 'prop-types';

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

Empty.propTypes = {
  typeText: PropTypes.bool,
};

Empty.defaultProps = {
  typeText: false,
};
