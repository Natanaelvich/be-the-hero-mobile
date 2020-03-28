import React from 'react';

import IncidentsList from '~/components/IncidentList';

import logo from '~/assets/logo.png';

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
      <Description>Escolha um dos casos abaixo e salve o dia</Description>
      <IncidentsList />
    </Container>
  );
}
