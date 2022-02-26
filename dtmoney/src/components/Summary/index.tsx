import { useContext, useState } from 'react';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg';
import { TransactionsContext } from '../../TransactionsContext';

import { Container } from "./styles";

export function Summary() {

    const data = useContext(TransactionsContext);
    const [income, setIncome] = useState(0);
    const [outcome, setOutcome] = useState(0);

    //data.map((data)=> data.type === 'income' ? setIncome(income + data.value) : setOutcome(outcome + data.value));
    return(
       
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={incomeImg} alt="Entradas" />
                </header>
                <strong>{income}</strong>
            </div>
            <div>
                <header>
                    <p>Saidas</p>
                    <img src={outcomeImg} alt="Saidas" />
                </header>
                <strong>{outcome}</strong>
            </div>
            <div className="highlight-backgroud">
                <header>
                    <p>Total</p>
                    <img src={totalImg} alt="Total" />
                </header>
                <strong>{(income - outcome)}</strong>
            </div>
        </Container>
    );
}