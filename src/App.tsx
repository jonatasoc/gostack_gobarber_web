import React from 'react';

import SignIn from './pages/SignIn';
// import SignUp from './pages/SignUp';
import GlobalStyle from '../src/styles/global';
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <>
      <AuthProvider>
        <SignIn />
      </AuthProvider>
      <GlobalStyle />
    </>
  );
}

export default App;
