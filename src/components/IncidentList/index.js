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

export default function IncidentList({ data }) {
  const navigation = useNavigation();

  function navigateToDetail(incident) {
    navigation.navigate('Detail', { incident });
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
          <Value>{item.description}</Value>

          <Property>VALOR:</Property>
          <Value>
            {Intl.NumberFormat('pt-br', {
              style: 'currency',
              currency: 'BRL',
            }).format(item.value)}
          </Value>

          <ButtonDetails onPress={() => navigateToDetail(item)}>
            <ButtonDetailText>Ver mais detalhes</ButtonDetailText>
            <Feather name="arrow-right" size={16} color="#E02041" />
          </ButtonDetails>
        </Incident>
      )}
    />
  );
}
