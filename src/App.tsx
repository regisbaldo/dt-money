import React from 'react';
import { GlobalStyle } from './assets/styles/global';
import { Header } from './components/Header';
import { Dashboard } from './components/pages/Dashboard';

function App() {
  return (
    <>
      <Header />
      <Dashboard/>
      <GlobalStyle />
    </>
  );
}

export default App;
