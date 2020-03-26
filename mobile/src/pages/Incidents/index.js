import React from 'react';
import { Feather } from '@expo/vector-icons';

import {
  Container,
  Header,
  Logo,
  HText,
  BoldText,
  Description,
  Title,
  IncidentList,
  Incident,
  IProperty,
  IValue,
  DetailsButton,
  DButtonText,
} from './styles';

export default function Incidents() {
  const data = [1, 2, 3, 4];

  return (
    <Container>
      <Header>
        <Logo />
        <HText>
          Total de <BoldText>0 casos</BoldText>
        </HText>
      </Header>

      <Title>Bem-vindo</Title>
      <Description>Escolha um dos casos abaixo e salve uma vida</Description>

      <IncidentList
        data={data}
        keyExtractor={(item) => String(item)}
        renderItem={({ item }) => (
          <Incident item={item}>
            <IProperty>ONG:</IProperty>
            <IValue>NPDS</IValue>

            <IProperty>CASO:</IProperty>
            <IValue>Sem emprego por enquanto</IValue>

            <IProperty>VALOR:</IProperty>
            <IValue>R$ 120,00</IValue>

            <DetailsButton onPress={() => {}}>
              <DButtonText>Ver mais detalhes</DButtonText>
              <Feather name="arrow-right" size={20} color="#e02041" />
            </DetailsButton>
          </Incident>
        )}
      />
    </Container>
  );
}
