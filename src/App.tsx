import React from 'react';

import SignIn from './pages/SignIn';
// import SignUp from './pages/SignUp';
import GlobalStyle from '../src/styles/global';
import AppProvider from './hooks';

function App() {
  return (
    <>
      <AppProvider>
        <SignIn />
      </AppProvider>
      <GlobalStyle />
    </>
  );
}

export default App;
