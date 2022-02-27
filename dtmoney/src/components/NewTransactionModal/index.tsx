import Modal from "react-modal";
import { Container,TransactionTypeContainer,RadioBox } from "./styles";
import closeImg from "../../assets/close.svg";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import { FormEvent, useState , useContext} from "react";
import { TransactionsContext } from "../../TransactionsContext";

type NewTransactionModalProps = {
    isOpen: boolean;
    onRequestClose: () => void;
};

export function NewTransactionModal({isOpen,onRequestClose}:NewTransactionModalProps){
    const {createTransaction} = useContext(TransactionsContext);

    const [title, setTitle] = useState('');
    const [value, setValue] = useState(0);
    const [category, setCategory] = useState('');
    const [type, setType] = useState('income');

    function clearForm(){
        setTitle('');
        setValue(0);
        setCategory('');
        setType('income');
    }

 async function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault();

    await createTransaction({title,value,category,type});
    clearForm();
    onRequestClose();
}

    return (
        <Modal 
        isOpen={isOpen} 
        onRequestClose={onRequestClose}
        overlayClassName="react-modal-overlay"
        className="react-modal-content">

            <button type="button" onClick={onRequestClose} className="react-modal-close">
                <img src={closeImg} alt="Fechar modal"/>
            </button>

        <Container onSubmit={handleCreateNewTransaction}>
            <h2>Cadastrar Transação</h2>
            <input 
            type="text"
             placeholder="Título"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
             />
            <input 
            type="number"
             placeholder="Valor"
                value={value}
                onChange={(event) => setValue(Number(event.target.value))}
             />
            <TransactionTypeContainer>
               <RadioBox 
               type="button" 
               onClick={() => {setType('income');}}
                isActive={type === 'income'}
                activeColor = 'green'
               >
                   <img src={incomeImg} alt="Entrada" />
                  <span>Entrada</span> </RadioBox>

                <RadioBox 
                type="button" 
                onClick={() => {setType('outcome');}}
                isActive={type === 'outcome'}
                activeColor = 'red'
                >
                <img src={outcomeImg} alt="Saída" />
                <span>Saída</span>
                </RadioBox>
            </TransactionTypeContainer>
            <input 
            type="text"
             placeholder="Categoria"
                value={category}
                onChange={(event) => setCategory(event.target.value)}
             />
            <button type="submit">Cadastrar</button>

        </Container>

         </Modal>

    );
}