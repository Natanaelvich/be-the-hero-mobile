import styled from 'styled-components/native';
import Constants from 'expo-constants';

export const Container = styled.View`
  flex: 1;
  padding: 0 20px;
  padding-top: ${Constants.statusBarHeight + 20}px;
`;
export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const ButtonBack = styled.TouchableOpacity``;
export const Logo = styled.Image``;
export const Incident = styled.View`
  padding: 24px;
  border-radius: 8px;
  background: #fff;
  margin-bottom: 16px;
  margin-top: 24px;
`;
export const Property = styled.Text`
  margin-top: 8px;
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
export const ContactBox = styled.View`
  padding: 24px;
  border-radius: 8px;
  background: #fff;
  margin-bottom: 16px;
`;
export const HeroeTitle = styled.Text`
  font-weight: bold;
  font-size: 20px;
  color: #111;
  line-height: 30px;
`;
export const HeroeDescription = styled.Text`
  font-size: 15px;
  color: #666;
  margin-top: 16px;
`;
export const Actions = styled.View`
  margin-top: 16px;
  flex-direction: row;
  justify-content: space-between;
`;
export const ButtonAction = styled.TouchableOpacity`
  background: #e02041;
  border-radius: 8px;
  height: 50px;
  width: 48%;
  justify-content: center;
  align-items: center;
`;
export const ActionText = styled.Text`
  color: #fff;
  font-size: 15px;
  font-weight: bold;
`;
