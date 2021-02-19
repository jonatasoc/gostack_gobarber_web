import React from 'react';
import { Container, Header, HeaderContent, Profile } from './styles';

import logoImg from '../../assets/logo.svg';
import { FiPower } from 'react-icons/fi';

const Dashboard: React.FC = () => {
  return (
    <Container>
      <Header>
        <HeaderContent>
          <img src={logoImg} alt="GoBarber" />

          <Profile>
            <img
              src="https://avatars.githubusercontent.com/u/16616459?s=460&u=30d354e539a4bd253a48409b63638f83d6f2f4f4&v=4"
              alt="Jonatas de Oliveira"
            />
            <div>
              <span>Bem-vindo,</span>
              <strong>Jonatas de Oliveira Coelho</strong>
            </div>
          </Profile>
          <button type="button">
            <FiPower />
          </button>
        </HeaderContent>
      </Header>
    </Container>
  );
};

export default Dashboard;
