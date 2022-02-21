
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import Modal from "react-modal";
import { useState } from "react";

Modal.setAppElement("#root");

export function App() {

  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  function handleNewTransactionModalOpen(){
      setIsNewTransactionModalOpen(true);
  }

  function handleNewTransactionModalClose(){
      setIsNewTransactionModalOpen(false);
  }

  return (
    <>
      <Header onOpenNewTransitionModal={handleNewTransactionModalOpen}/>
      <Dashboard/>

      <Modal 
          isOpen={isNewTransactionModalOpen} 
          onRequestClose={handleNewTransactionModalClose}>
          <h1>Nova Transação</h1>
      </Modal>

      <GlobalStyle />
    </>
  );
}
