
import { TransactionProvider } from "../../TransactionsContext";
import { Summary } from "../Summary";
import { TransactionsTable } from "../TransactionsTable";
import { Container } from "./styles";


export function Dashboard() {


    return(
        <Container>
            <TransactionProvider>
            <Summary   />
            <TransactionsTable/>
            </TransactionProvider>
            
        </Container>
    )
};