import Modal from "react-modal";

type NewTransactionModalProps = {
    isOpen: boolean;
    onRequestClose: () => void;
};

export function NewTransactionModal({isOpen,onRequestClose}:NewTransactionModalProps){
    return (
        <Modal 
        isOpen={isOpen} 
        onRequestClose={onRequestClose}>
        <h1>Nova Transação</h1>
         </Modal>

    );
}