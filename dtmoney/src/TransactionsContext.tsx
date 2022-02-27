import { createContext, useEffect, useState } from 'react';
import { api } from './services/api';

type Transaction ={
    id: string;
    title: string;
    value: number;
    type: string;
    category: string;
    date: string;
}

type TransactionProviderProps = {
    children: React.ReactNode;
}

type TransactionInput = Omit<Transaction, 'id' | 'date'>;

type TransactionsContextData = {
    transactions: Transaction[];
    createTransaction(transaction: TransactionInput): Promise<void>;
}

export const TransactionsContext = createContext<TransactionsContextData>(
    {} as TransactionsContextData
);


export function TransactionProvider({children }:TransactionProviderProps) {
    const [transactions, setTransactions] = useState<Transaction[]>([]);
 

    useEffect(() =>{
        api.get('transactions')
        .then(response => setTransactions(response.data.transactions))
    }, []);

    async function createTransaction(transactionInput: TransactionInput) {
      const response = await api.post('transactions', {
          ...transactionInput,
          date: new Date().toLocaleDateString('pt-BR'),
        });
      const { transaction } = response.data;

        setTransactions([...transactions, transaction]);
    }

    return (
        <TransactionsContext.Provider value={{transactions, createTransaction}}>
            {children}
            </TransactionsContext.Provider>
        
    )
}