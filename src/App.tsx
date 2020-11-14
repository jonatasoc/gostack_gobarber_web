import React from 'react';

import SignIn from './pages/SignIn';
// import SignUp from './pages/SignUp';
import GlobalStyle from '../src/styles/global';
import AppProvider from './hooks';
import ToastContainer from './components/ToastContainer';

function App() {
  return (
    <>
      <AppProvider>
        <SignIn />
      </AppProvider>
      <ToastContainer />
      <GlobalStyle />
    </>
  );
}

export default App;
