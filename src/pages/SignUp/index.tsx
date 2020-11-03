import React, { useCallback } from 'react';
import {
  FiArrowLeft, FiMail, FiUser, FiLock,
} from 'react-icons/fi';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import { Container, Content, Background } from './styles';
import Input from '../../components/Input';
import Button from '../../components/Button';

import logoImg from '../../assets/logo.svg';

const SignUp: React.FC = () => {
  const handleSubmit = useCallback(async (data: object) => {
    const schema = Yup.object().shape({
      name: Yup.string().required('Nome obrigatório'),
      email: Yup.string().required('E-mail obrigatório').email('Digite um e-mail válido'),
      password: Yup.string().min(6, 'No mínimo 6 dígitos'),
    });

    try {
      await schema.validate(data, {
        abortEarly: false,
      });
    } catch (err) {
      console.log(err);
    }
  }, [])

  return (
    <Container>
      <Background />
      <Content>
        <img src={logoImg} alt="GoBarber" />

        <Form onSubmit={handleSubmit}>
          <h1>Faça o seu cadastro</h1>

          <Input name="name" type="text" icon={FiUser} placeholder="Nome" />
          <Input name="email" type="text" icon={FiMail} placeholder="E-mail" />
          <Input name="password" type="password" icon={FiLock} placeholder="Senha" />

          <Button type="submit">Cadastrar</Button>

        </Form>
        <a href="create">
          <FiArrowLeft />
          Voltar para logon
        </a>
      </Content>
    </Container>
  );
};

export default SignUp;
