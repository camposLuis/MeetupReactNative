import styled from 'styled-components/native';

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
