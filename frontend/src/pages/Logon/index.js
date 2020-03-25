import React from 'react';
import { FiLogIn } from 'react-icons/fi';
import { Form } from '@unform/web';

import heroesImg from '~/assets/heroes.png';

import Input from '~/components/Form/Input';

import { Container, Section, Logo } from './styles';

export default function Logon() {
  function handleSubmit(data) {}

  return (
    <Container>
      <Section>
        <Logo />

        <Form onSubmit={handleSubmit}>
          <h1>Faça seu logon</h1>

          <Input name="id" placeholder="Sua ID" />
          <button type="submit">Entrar</button>

          <a href="/register">
            <FiLogIn size={16} color="#e02041" />
            Não tenho cadastro
          </a>
        </Form>
      </Section>

      <img src={heroesImg} alt="Heroes" />
    </Container>
  );
}
