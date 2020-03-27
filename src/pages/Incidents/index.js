import React from 'react';

import logo from '../../assets/logo.png';

import {
  Container,
  Header,
  Logo,
  HeaderText,
  Strong,
  Title,
  Description,
} from './styles';

export default function Incidents() {
  return (
    <Container>
      <Header>
        <Logo source={logo} />
        <HeaderText>
          Total de <Strong>0 casos</Strong>
        </HeaderText>
      </Header>

      <Title>Bem vindo</Title>
      <Description>Escolha um dos casos abaixo</Description>
    </Container>
  );
}