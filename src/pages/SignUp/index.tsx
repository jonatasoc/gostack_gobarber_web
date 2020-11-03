import React from 'react';
import { FiArrowLeft, FiMail, FiUser, FiLock } from 'react-icons/fi'

import { Container, Content, Background } from './styles';
import Input from '../../components/Input';
import Button from '../../components/Button';

import logoImg from '../../assets/logo.svg';

const SignUp: React.FC = () => (
  <Container>
    <Background />
    <Content>
      <img src={logoImg} alt="GoBarber" />

      <form>
        <h1>Faça o seu cadastro</h1>

        <Input name="name" type="text" icon={FiUser} placeholder="Nome" />
        <Input name="email" type="text" icon={FiUser} placeholder="E-mail" />
        <Input name="password" type="password" icon={FiLock} placeholder="Senha" />

        <Button type="button">Cadastrar</Button>

      </form>
      <a href="create">
        <FiArrowLeft />
        Voltar para logon
      </a>
    </Content>
  </Container>
);

export default SignUp;
