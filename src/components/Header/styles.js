import { Platform } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  justify-content: center;
  align-items: center;
  background: #000;
  height: ${Platform.OS === 'ios' ? '97px' : '64px'};
`;

export const Content = styled.View`
  justify-content: center;
  align-items: center;
  background: #000;
`;
