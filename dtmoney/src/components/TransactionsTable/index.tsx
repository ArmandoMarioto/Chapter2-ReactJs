import { Container } from "./styles";

export function TransactionsTable() {
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
                    <tr>
                        <td className="title">Compras de Janeiro</td>
                        <td className="income">+R$1000.00</td>
                        <td >-R$500.00</td>
                        <td >01/01/2020</td>
                    </tr>
                    <tr>
                        <td className="title">Aluguel</td>
                        <td className="outcome">-R$500.00</td>
                        <td >Casa</td>
                        <td >01/01/2020</td>
                    </tr>
                    <tr>
                        <td className="title">Aluguel</td>
                        <td className="outcome">-R$500.00</td>
                        <td >Casa</td>
                        <td >01/01/2020</td>
                    </tr>
                    <tr>
                        <td className="title">Aluguel</td>
                        <td className="outcome">-R$500.00</td>
                        <td >Casa</td>
                        <td >01/01/2020</td>
                    </tr>
                
                </tbody>
            </table>
        </Container>
    );
}