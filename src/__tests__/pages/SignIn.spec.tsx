import React from 'react';
import { render } from '@testing-library/react';
import SignIn from '../../pages/SignIn';

// O mock é necessário aqui para passar para os testes coisas que estão vindo de outras libs
jest.mock('react-router-dom', () => {
  return {
    useHistory: jest.fn(),
    Link: ({ children }: { children: React.ReactNode }) => children,
  };
});

describe('SignIn Page', () => {
  it('should be able to sign in', () => {
    const { debug } = render(<SignIn />);

    // Debug é uma função retornada pelo método render que
    // fazer um console.log do HTML retornado pelo componente
    debug();
  });
});
