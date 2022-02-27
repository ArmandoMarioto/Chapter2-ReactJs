import { useContext } from 'react';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg';
import { TransactionsContext } from '../../TransactionsContext';

import { Container } from "./styles";

export function Summary() {

    const {transactions} = useContext(TransactionsContext);
    let income = 0;
    let outcome = 0;

    transactions.map((data)=> data.type === 'income' ? income +=data.value : outcome +=data.value);
    return(
       
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={incomeImg} alt="Entradas" />
                </header>
                <strong>{new Intl.NumberFormat('pt-BR', {
                                style: 'currency',
                                currency: 'BRL'
                                }).format(income)}</strong>
            </div>
            <div>
                <header>
                    <p>Saidas</p>
                    <img src={outcomeImg} alt="Saidas" />
                </header>
                <strong>-{new Intl.NumberFormat('pt-BR', {
                                style: 'currency',
                                currency: 'BRL'
                                }).format(outcome)}</strong>
            </div>
            <div className="highlight-backgroud">
                <header>
                    <p>Total</p>
                    <img src={totalImg} alt="Total" />
                </header>
                <strong>{new Intl.NumberFormat('pt-BR', {
                                style: 'currency',
                                currency: 'BRL'
                                }).format(income - outcome)}</strong>
            </div>
        </Container>
    );
}