import React from 'react';
import { FiLogIn } from 'react-icons/fi';
import { Form } from '@unform/web';
import { Link } from 'react-router-dom';

import heroesImg from '~/assets/heroes.png';

import Input from '~/components/Form/Input';
import Button from '~/components/Button';

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
          <Button type="submit">Entrar</Button>

          <Link href="/register">
            <FiLogIn size={16} color="#e02041" />
            Não tenho cadastro
          </Link>
        </Form>
      </Section>

      <img src={heroesImg} alt="Heroes" />
    </Container>
  );
}
