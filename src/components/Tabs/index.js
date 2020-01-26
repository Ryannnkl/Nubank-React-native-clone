import React from 'react';
import { FontAwesome5 } from '@expo/vector-icons';

import { Container, TabsContainer, TabItem, TabText } from './styles';

export default function Tabs({ translateY }){
  return (
    <Container style={{
      transform: [
        {
        translateY: translateY.interpolate({
          inputRange: [0,380],
          outputRange: [0,30],
          extrapolate: 'clamp' 
        })
        }],
      opacity: translateY.interpolate({
        inputRange: [0,100],
        outputRange: [1,0.2],
        extrapolate: 'clamp'
      })
    }}>
      <TabsContainer>
        <TabItem>
          <FontAwesome5 name="user" size={20} color="#fff" />
          <TabText>Indicar amigos</TabText>
        </TabItem>
        <TabItem>
          <FontAwesome5 name="comment-alt" size={20} color="#fff" />
          <TabText>Cobrar</TabText>
        </TabItem>
        <TabItem>
          <FontAwesome5 name="arrow-down" size={20} color="#fff" />
          <TabText>Depositar</TabText>
        </TabItem>
        <TabItem>
          <FontAwesome5 name="arrow-up" size={20} color="#fff" />
          <TabText>Transferir</TabText>
        </TabItem>
        <TabItem>
          <FontAwesome5 name="lock" size={20} color="#fff" />
          <TabText>Bloquear cartão</TabText>
        </TabItem>
      </TabsContainer>
    </Container>
  );
}