import styled from 'styled-components/native';
import { FlatList } from 'react-native';

export const Container = styled(FlatList).attrs({
  showsVerticalScrollIndicator: false,
})`
  margin-top: 32px;
`;
export const Incident = styled.View`
  padding: 24px;
  border-radius: 8px;
  background: #fff;
  margin-bottom: 16px;
`;
export const Property = styled.Text`
  font-size: 14px;
  color: #333;
  font-weight: bold;
`;
export const Value = styled.Text`
  margin-top: 8px;
  font-size: 15px;
  margin-bottom: 24px;
  color: #666;
`;
export const ButtonDetails = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const ButtonDetailText = styled.Text`
  color: #e02041;
  font-size: 15px;
  font-weight: bold;
`;
