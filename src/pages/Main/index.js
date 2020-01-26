import React from 'react';
import { FontAwesome5 } from '@expo/vector-icons';

import { Animated } from 'react-native';
import { PanGestureHandler, State } from 'react-native-gesture-handler';

import Header from '../../components/Header';
import Tabs from '../../components/Tabs';
import Menu from '../../components/Menu';

import { 
  Container, Content, Card, CardHeader, CardContent, Title, Desc,
   CardFooter, Annotation 
} from './styles';

export default function Main() {
  let offset = 0;
  const translateY = new Animated.Value(0);

  const animatedEvent = new Animated.event(
    [
      {
        nativeEvent: {
          translationY: translateY, 
        }
      }
    ],
    { useNativeDriver: true },
  );

  function onHandlerStateChange(event){
    if(event.nativeEvent.oldState === State.ACTIVE){
      const { translationY } = event.nativeEvent;
      let opened = false;
      offset += translationY;
      if(translationY >= 100){
        opened = true;
      } else {
        translateY.setValue(offset);
        translateY.setOffset(0);
        offset = 0;
      }

      Animated.timing(translateY, {
        toValue: opened ? 380 : 0,
        duration: 200,
        useNativeDriver: true
      }).start(() => {
        offset = opened ? 380 : 0;
        translateY.setOffset(offset);
        translateY.setValue(0);
      })
    }
  }

  return (
    <Container>
      <Header />
      <Content>
        <Menu translateY={translateY}/>
        <PanGestureHandler onGestureEvent={animatedEvent} onHandlerStateChange={onHandlerStateChange} >
          <Card style={{ 
            transform: [{
              translateY: translateY.interpolate({
                inputRange: [-150,0,380],
                outputRange: [-25,0,380],
                extrapolate: 'clamp',
              }),
            }]
           }}>
            <CardHeader>
              <FontAwesome5 name="dollar-sign" size={24} color="#666" />
              <FontAwesome5 name="eye-slash" size={24} color="#666" />
            </CardHeader>
            <CardContent>
              <Title>Saldo disponivel</Title>
              <Desc>R$ 356.123,00</Desc>
            </CardContent>
            <CardFooter>
              <Annotation>
                Debito de R$ 4200,00 hoje ás 14:00 hr
              </Annotation>
            </CardFooter>
          </Card>
        </PanGestureHandler>
      </Content>
      <Tabs translateY={translateY} />
    </Container>
  );
}
