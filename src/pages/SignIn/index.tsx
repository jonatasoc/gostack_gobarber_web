import React from 'react';
import { FiLogIn } from 'react-icons/fi'

import { Container, Content, Background } from './styles';
import logoImg from '../../assets/logo.svg';

const SignIn: React.FC = () => (
  <Container>
    <Content>
      <img src={logoImg} alt="GoBarber" />

      <form>
        <h1>Faça o seu logon</h1>

        <input type="text" placeholder="E-mail" />
        <input type="password" placeholder="Senha" />

        <button type="button">Entrar</button>

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
