import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';

import Link from '~/components/Link';
import Input from '~/components/Form/Input';
import Textarea from '~/components/Form/Textarea';
import Button from '~/components/Button';

import { Container, Content, Form, Logo } from './styles';

export default function NewIncident() {
  function handleSubmit(data) {
    console.log(data);
  }

  return (
    <Container>
      <Content>
        <section>
          <Logo />

          <h1>Cadastro novo caso</h1>
          <p>
            Descreva o caso detalhadamente para encontrar um heroi para resolver
            isso
          </p>

          <Link to="/profile">
            <FiArrowLeft size={16} color="#e02041" />
            Voltar para home
          </Link>
        </section>

        <Form onSubmit={handleSubmit}>
          <Input name="title" placeholder="Título do caso" />
          <Textarea name="description" placeholder="Descrição" />
          <Input name="price" placeholder="Valor em reais" />

          <Button type="submit">Cadastrar</Button>
        </Form>
      </Content>
    </Container>
  );
}
