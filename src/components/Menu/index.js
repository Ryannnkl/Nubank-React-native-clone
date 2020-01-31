import React from 'react';
import { Alert, View } from 'react-native';
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
    }} 
			showsVerticalScrollIndicator={false}
		>
      <Code>
         <QRCode /> 
      </Code>
      <Nav>
        <NavItem>
          <View style={{flexDirection: 'row'}}>
						<FontAwesome5 name="question-circle" size={20} color="#fff" style={{width: 24}}/>
						<NavText>Me ajuda</NavText>
					</View>
          <FontAwesome5 name="angle-right" size={24} color="#f6f6f6"/>
        </NavItem>
        <NavItem>
					 <View style={{flexDirection: 'row'}}>
						<FontAwesome5 name="user" size={20} color="#fff" style={{width: 24}}/>
						<NavText>Perfil</NavText>
					</View>
					 <FontAwesome5 name="angle-right" size={24} color="#f6f6f6"/>
        </NavItem>
        <NavItem>
					<View style={{flexDirection: 'row', }} >
						<FontAwesome5 name="credit-card" size={20} color="#fff" style={{width: 24}} />
						<NavText>Configurar cartão</NavText>
					</View>
					 <FontAwesome5 name="angle-right" size={24} color="#f6f6f6"/>
        </NavItem>
        <NavItem>
					<View style={{flexDirection: 'row'}}>
						<FontAwesome5 name="mobile-alt" size={20} color="#fff" style={{width: 24}}/>
						<NavText>Configuração do app</NavText>
					</View>
					 <FontAwesome5 name="angle-right" size={24} color="#f6f6f6"/>
        </NavItem>
      </Nav>
      <SingOut onPress={()=>{ Alert.alert('saiu','apenas um teste') }}>
        <SingOutText>Sair do App</SingOutText>
      </SingOut>
    </Container>
  );
}