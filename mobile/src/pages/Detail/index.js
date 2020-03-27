import React from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import * as MailCompose from 'expo-mail-composer';
import { TouchableOpacity, Linking } from 'react-native';

import {
  Container,
  Header,
  Logo,
  Incident,
  IProperty,
  IValue,
  ContactBox,
  HeroTitle,
  HDescription,
  Actions,
  Action,
  AText,
} from './styles';

export default function Details() {
  const navigation = useNavigation();
  const message =
    'Olá NPDS, estou entrando em contato pois gostaria de ajudar no caso "Sem emprego" com o valor de R$120,00';

  function navigateBack() {
    navigation.goBack();
  }

  function sendMail() {
    MailCompose.composeAsync({
      subject: 'Herói do caso: Sem emprego',
      recipients: ['alucard.s8123@gmail.com'],
      body: message,
    });
  }

  function sendWhatsapp() {
    Linking.openURL(`whatsapp://send?phone=552492004597&text=${message}`);
  }

  return (
    <Container>
      <Header>
        <Logo />

        <TouchableOpacity onPress={navigateBack}>
          <Feather name="arrow-left" size={28} color="#e82041" />
        </TouchableOpacity>
      </Header>

      <Incident>
        <IProperty marginBreak>ONG:</IProperty>
        <IValue>NPDS</IValue>

        <IProperty>CASO:</IProperty>
        <IValue>Sem emprego por enquanto</IValue>

        <IProperty>VALOR:</IProperty>
        <IValue>R$ 120,00</IValue>
      </Incident>

      <ContactBox>
        <HeroTitle>Salve o dia!</HeroTitle>
        <HeroTitle>Seja o herói desse caso.</HeroTitle>

        <HDescription>Entre em contato:</HDescription>

        <Actions>
          <Action onPress={sendWhatsapp}>
            <AText>WhatsApp</AText>
          </Action>

          <Action onPress={sendMail}>
            <AText>E-mail</AText>
          </Action>
        </Actions>
      </ContactBox>
    </Container>
  );
}
