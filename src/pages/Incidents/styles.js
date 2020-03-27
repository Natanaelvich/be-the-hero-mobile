import Constants from 'expo-constants';
import styled from 'styled-components/native';

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
export const Logo = styled.Image``;
export const HeaderText = styled.Text`
  font-size: 15px;
  color: #666;
`;
export const Strong = styled.Text`
  font-weight: bold;
`;
export const Title = styled.Text`
  font-size: 30px;
  margin-bottom: 16px;
  margin-top: 48px;
  color: #111;
  font-weight: bold;
`;
export const Description = styled.Text`
  font-size: 16px;
  line-height: 24px;
  color: #666;
`;
