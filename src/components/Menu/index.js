import React from 'react';
import { Alert } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

import { Container, Code, Nav, NavItem, NavText, SingOut, SingOutText, QRCode } from './styles';

export default function Menu({ translateY }){
  return (
    <Container style={{
      opacity: translateY.interpolate({
        inputRange: [0,150],
        outputRange: [0,1],
        extrapolate: 'clamp'
      })
    }} >
      <Code>
         <QRCode /> 
      </Code>
      <Nav>
        <NavItem>
          <FontAwesome5 name="question-circle" size={20} color="#fff" />
          <NavText>Me ajuda</NavText>
        </NavItem>
        <NavItem>
          <FontAwesome5 name="user" size={20} color="#fff" />
          <NavText>Perfil</NavText>
        </NavItem>
        <NavItem>
          <FontAwesome5 name="credit-card" size={20} color="#fff" />
          <NavText>Configurar cartão</NavText>
        </NavItem>
        <NavItem>
          <FontAwesome5 name="mobile-alt" size={20} color="#fff" />
          <NavText>Configuração do app</NavText>
        </NavItem>
      </Nav>
      <SingOut onPress={()=>{ Alert.alert('saiu','apenas um teste') }}>
        <SingOutText>Sair do App</SingOutText>
      </SingOut>
    </Container>
  );
}