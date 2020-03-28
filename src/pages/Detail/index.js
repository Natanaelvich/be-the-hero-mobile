import React from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import {
  Container,
  Header,
  ButtonBack,
  Incident,
  Property,
  Value,
  Logo,
  ContactBox,
  HeroeTitle,
  HeroeDescription,
  Actions,
  ButtonAction,
  ActionText,
} from './styles';

import logo from '~/assets/logo.png';

export default function Detail() {
  const navigation = useNavigation();

  function navigateToIncident() {
    navigation.goBack();
  }
  return (
    <Container>
      <Header>
        <Logo source={logo} />

        <ButtonBack onPress={navigateToIncident}>
          <Feather name="arrow-left" size={28} color="#e02041" />
        </ButtonBack>
      </Header>

      <Incident>
        <Property>ONG:</Property>
        <Value>APAD</Value>

        <Property>CASO</Property>
        <Value>Cadelinha com corona virus</Value>

        <Property>VALOR:</Property>
        <Value>R$ 200</Value>
      </Incident>

      <ContactBox>
        <HeroeTitle>Salve o dia!</HeroeTitle>
        <HeroeDescription>Seja o heroi desse caso.</HeroeDescription>

        <Actions>
          <ButtonAction>
            <ActionText>Whatsapp</ActionText>
          </ButtonAction>

          <ButtonAction>
            <ActionText>E-mail</ActionText>
          </ButtonAction>
        </Actions>
      </ContactBox>
    </Container>
  );
}
