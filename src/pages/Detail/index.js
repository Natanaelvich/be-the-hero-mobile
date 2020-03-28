import React from 'react';
import { Linking } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import * as MailComposer from 'expo-mail-composer';

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
  const message =
    'Olá APAD, estou entrando em contato pois gostaria de ajudar com o caso "Cadelinha atropelada" com o valor de "120,00".';

  function navigateToIncident() {
    navigation.goBack();
  }

  function sendMail() {
    MailComposer.composeAsync({
      subject: 'Herói do caso : Cadelinha atropelada',
      recipients: ['taelima1997@gmail.com'],
      body: message,
    });
  }

  function sendWhatsapp() {
    Linking.openURL(`whatsapp://send?phone=559981883126&text=${message}`);
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
          <ButtonAction onPress={sendWhatsapp}>
            <ActionText>Whatsapp</ActionText>
          </ButtonAction>

          <ButtonAction onPress={sendMail}>
            <ActionText>E-mail</ActionText>
          </ButtonAction>
        </Actions>
      </ContactBox>
    </Container>
  );
}
