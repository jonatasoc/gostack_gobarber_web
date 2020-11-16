import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import GlobalStyle from '../src/styles/global';
import AppProvider from './hooks';
import Routes from './routes';

function App() {
  return (
    <AppProvider>
      <Router>
        <Routes />
        <GlobalStyle />
      </Router>
    </AppProvider>
  );
}

export default App;
