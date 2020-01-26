import React from 'react';
import { FontAwesome5 } from '@expo/vector-icons';
import { Container, Top, Logo, Title } from './styles';

import LogoImage from '../../assets/Nubank_Logo.png';

export default function Header(){
  return (
    <Container>
      <Top>
        <Logo source={LogoImage} />
        <Title>Ryann F.</Title>
      </Top>
      <FontAwesome5 name="angle-down" size={20} color="#FFF" />
    </Container>
  );
}