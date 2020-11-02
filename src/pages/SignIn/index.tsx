import React from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi'

import { Container, Content, Background } from './styles';
import Input from '../../components/Input';
import Button from '../../components/Button';

import logoImg from '../../assets/logo.svg';

const SignIn: React.FC = () => (
  <Container>
    <Content>
      <img src={logoImg} alt="GoBarber" />

      <form>
        <h1>Faça o seu logon</h1>

        <Input name="email" type="text" icon={FiMail} placeholder="E-mail" />
        <Input name="password" type="password" icon={FiLock} placeholder="Senha" />

        <Button type="button">Entrar</Button>

        <a href="forgot">Esqueci minha senha</a>
      </form>
      <a href="create">
        <FiLogIn />
        Criar Conta
      </a>
    </Content>
    <Background />
  </Container>
);

export default SignIn;
