import React, { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import api from '~/services/api';

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
  const [incidents, setIncidents] = useState([]);
  const [incidentsTotal, setIncidentsTotal] = useState(0);

  useEffect(() => {
    async function loadIncidents() {
      try {
        const response = await api.get('/ongs/incidents');
        setIncidents(response.data);
        setIncidentsTotal(response.headers['x-total-count']);
      } catch (error) {
        Alert.alert('erro ao buscar casos');
      }
    }

    loadIncidents();
  }, []);
  return (
    <Container>
      <Header>
        <Logo source={logo} />
        <HeaderText>
          Total de <Strong>{incidentsTotal || 0} casos</Strong>
        </HeaderText>
      </Header>

      <Title>Bem vindo</Title>
      <Description>Escolha um dos casos abaixo e salve o dia</Description>
      <IncidentsList data={incidents} />
    </Container>
  );
}
