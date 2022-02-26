import { createContext, useEffect, useState } from 'react';
import { api } from './services/api';

type Transaction ={
    id: string;
    title: string;
    value: number;
    type: "income" | "outcome";
    category: string;
    date: string;
}

type TransactionProviderProps = {
    children: React.ReactNode;
}

export const TransactionsContext = createContext<Transaction[]>([]);


export function TransactionProvider({children }:TransactionProviderProps) {
    const [transactions, setTransactions] = useState<Transaction[]>([]);
 

    useEffect(() =>{
        api.get('transactions')
        .then(response => setTransactions(response.data.transactions))
    }, []);

    return (
        <TransactionsContext.Provider value={transactions}>
            {children}
            </TransactionsContext.Provider>
        
    )
}