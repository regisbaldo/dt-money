import { GlobalStyle } from './assets/styles/global';
import { Header } from './components/Header';
import { Dashboard } from './components/pages/Dashboard';
import Modal from 'react-modal';
import { useState } from 'react';

function App() {
  const [isNewCreateTransactioModalOpen, setIsNewCreateTransactioModalOpen] = useState(false);

  function handleOpenNewCreateTransactioModal() {
    setIsNewCreateTransactioModalOpen(true);

  };
  function handleCloseNewCreateTransactioModal() {
    setIsNewCreateTransactioModalOpen(false);
  };


  Modal.setAppElement('#root');
  return (
    <>
      <Header onOpenModal={handleOpenNewCreateTransactioModal} />
      <Dashboard />
      <Modal isOpen={isNewCreateTransactioModalOpen}
        onRequestClose={handleCloseNewCreateTransactioModal}>
        Aberto
      </Modal>
      <GlobalStyle />
    </>
  );
}

export default App;
