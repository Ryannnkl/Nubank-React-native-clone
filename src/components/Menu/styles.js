import styled from 'styled-components/native';
import { StyleSheet, Animated } from 'react-native';

export const Container = styled(Animated.ScrollView)`
  margin: 0 30px;
`;
export const Code = styled.View`
  background: #fff;
  align-self: center;
`;
export const QRCode = styled.Image.attrs({
  source: require('../../assets/qrcode.png'),
})`
  width: 80px;
  height: 80px;
`;
export const Nav = styled.View`
  margin-top: 30px;
  border-top-width: ${StyleSheet.hairlineWidth}px;
  border-top-color: rgba(255,255,255,0.8);
`;

export const NavItem = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 12px 5px;
  border-bottom-width: ${StyleSheet.hairlineWidth}px;
  border-bottom-color: rgba(255,255,255,0.8);
`;
export const NavText = styled.Text`
  font-size: 15px;
  color: #fff;
  margin-left: 20px;
`;

export const SingOut = styled.TouchableOpacity`
  border-width: 1px;
  border-color: rgba(255,255,255,0.8);
  border-radius: 4px;
  align-items: center;
  justify-content: center;
  padding: 12px;
  margin-top: 10px;
`;
export const SingOutText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 14px;
`;