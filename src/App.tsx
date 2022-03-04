import { GlobalStyle } from './assets/styles/global';
import { Header } from './components/Header';
import { Dashboard } from './components/pages/Dashboard';
import { useState } from 'react';
import { NewTransactionModal } from './components/NewTransactionModal';

function App() {
  const [isNewCreateTransactioModalOpen, setIsNewCreateTransactioModalOpen] = useState(false);

  function handleOpenNewCreateTransactioModal() {
    setIsNewCreateTransactioModalOpen(true);

  };
  function handleCloseNewCreateTransactioModal() {
    setIsNewCreateTransactioModalOpen(false);
  };

  return (
    <>
      <Header onOpenModal={handleOpenNewCreateTransactioModal} />
      <Dashboard />
      <NewTransactionModal isOpen={isNewCreateTransactioModalOpen} onRequestClose={handleCloseNewCreateTransactioModal} />
      <GlobalStyle />
    </>
  );
}

export default App;
