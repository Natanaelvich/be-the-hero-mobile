import React from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import {
  Container,
  Incident,
  Property,
  Value,
  ButtonDetails,
  ButtonDetailText,
} from './styles';

const data = [
  {
    id: 1,
    name: 'APAD',
    incident: 'Cadelinha atropelada',
    value: '120.00',
  },
  {
    id: 2,
    name: 'APAD',
    incident: 'Cadelinha atropelada',
    value: '120.00',
  },
  {
    id: 3,
    name: 'APAD',
    incident: 'Cadelinha atropelada',
    value: '120.00',
  },
  {
    id: 4,
    name: 'APAD',
    incident: 'Cadelinha atropelada',
    value: '120.00',
  },
];

export default function IncidentList() {
  const navigation = useNavigation();

  function navigateToDetail(id) {
    navigation.navigate('Detail');
  }
  return (
    <Container
      data={data}
      keyExtractor={item => String(item.id)}
      renderItem={({ item }) => (
        <Incident>
          <Property>ONG:</Property>
          <Value>{item.name}</Value>

          <Property>CASO</Property>
          <Value>{item.incident}</Value>

          <Property>VALOR:</Property>
          <Value>R$ {item.value}</Value>

          <ButtonDetails onPress={() => navigateToDetail(item.id)}>
            <ButtonDetailText>Ver mais detalhes</ButtonDetailText>
            <Feather name="arrow-right" size={16} color="#E02041" />
          </ButtonDetails>
        </Incident>
      )}
    />
  );
}
