import styled from 'styled-components/native';

import Button from '~/components/Button';

export const Container = styled.View`
  flex: 1;
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: true,
  contentContainerStyle: { paddingTop: 20, paddingLeft: 30, paddingRight: 30 },
})``;

export const SelectDate = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 10px 0 0;
  padding: 20px 20px 10px 20px;
`;

export const TDate = styled.Text`
  font-size: 20px;
  padding: 0 5px;
  font-weight: bold;
  color: rgba(255, 255, 255, 0.9);
`;

export const Content = styled.View`
  margin-bottom: 20px;
  border-radius: 4px;
  background: #fff;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

export const SubmitButton = styled(Button)`
  height: 40px;
  width: 90%;
  margin-bottom: 20px;
`;

export const ContentEmpty = styled.View`
  padding: 20px;
  border-radius: 4px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;
