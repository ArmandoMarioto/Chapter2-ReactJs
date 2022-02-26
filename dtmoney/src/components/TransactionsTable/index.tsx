import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

type Transaction ={
    id: string;
    title: string;
    value: number;
    type: "income" | "outcome";
    category: string;
    date: string;
}

export function TransactionsTable() {
    const [transactions, setTransactions] = useState<Transaction[]>([]);

    useEffect(() =>{
        api.get('transactions')
        .then(response => setTransactions(response.data.transactions))
    }, []);

    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Preço</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>
                
                <tbody>
                   {transactions.map(transaction =>{
                       return (
                        <tr key={transaction.id}>
                        <td className="title">{transaction.title}</td>
                        <td className={transaction.type}>{transaction.value}</td>
                        <td >{transaction.category}</td>
                        <td >{transaction.date}</td>
                        </tr>
                       )
                   })}
                
                </tbody>
            </table>
        </Container>
    );
}