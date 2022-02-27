
import { useTransactions } from "../../hooks/useTransactions";
import { Container } from "./styles";



export function TransactionsTable() {

    const {transactions} = useTransactions();

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
                        <td className={transaction.type}>{
                            new Intl.NumberFormat('pt-BR', {
                                style: 'currency',
                                currency: 'BRL'
                                }).format(transaction.value)
                        }</td>
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