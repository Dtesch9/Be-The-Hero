import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';

import Link from '~/components/Link';
import Input from '~/components/Form/Input';
import Button from '~/components/Button';

import { Container, Content, Form, Logo } from './styles';

export default function Register() {
  return (
    <Container>
      <Content>
        <section>
          <Logo />

          <h1>Cadastro</h1>
          <p>
            Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem
            os casos de sua ONG.
          </p>

          <Link to="/">
            <FiArrowLeft size={16} color="#e02041" />
            Não tenho cadastro
          </Link>
        </section>

        <Form>
          <Input name="name" placeholder="nome da ONG" />
          <Input name="email" type="email" placeholder="E-mail" />
          <Input name="whatsapp" placeholder="WhatsApp" />

          <div>
            <Input name="city" placeholder="Cidade" />
            <Input name="uf" placeholder="UF" />
          </div>

          <Button type="submit">Cadastrar</Button>
        </Form>
      </Content>
    </Container>
  );
}
