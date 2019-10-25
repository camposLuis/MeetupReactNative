import styled from 'styled-components/native';

import Button from '~/components/Button';

export const Container = styled.View`
  margin-bottom: 20px;
  border-radius: 4px;
  background: rgba(255, 255, 255, 0.9);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

export const Banner = styled.Image`
  width: 100%;
  height: 150px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
`;

export const Info = styled.View`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  width: 100%;
  padding: 20px;
`;

export const Title = styled.Text`
  font-size: 18px;
  color: #333;
  font-weight: bold;
`;

export const Date = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 10px;
`;
export const TDate = styled.Text`
  font-size: 13px;
  color: #999;
  margin-left: 5px;
`;

export const Location = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 10px;
`;
export const TLocation = styled.Text`
  font-size: 13px;
  color: #999;
  margin-left: 5px;
`;

export const Organizer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 10px;
`;
export const TOrganizer = styled.Text`
  font-size: 13px;
  color: #999;
  margin-left: 5px;
`;

export const SubmitButton = styled(Button)`
  margin-top: 15px;
  height: 40px;
  width: 100%;
`;
