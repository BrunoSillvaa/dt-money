import {
  createContext,
  useEffect,
  useState,
  ReactNode
} from 'react'
import { api } from '../services/api'
import { Transcation } from '../types'

interface TransactionsProviderProps {
  children: ReactNode
}

type TransactionInput = Omit<Transcation, 'id'| 'createdAt'>

interface TransactionsContextData {
  transactions: Transcation[],
  createTransaction: (transaction: TransactionInput) => Promise<void>
}

export const TransactionsContext = createContext<TransactionsContextData>({} as TransactionsContextData)

export function TransactionsProvider({children}: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transcation[]>([])

  useEffect(() => {
    api.get('transactions')
      .then(response => setTransactions(response.data.transactions))
  }, [])

  async function createTransaction(transactionInput: TransactionInput) {
    const response = await api.post('/transactions', {
      ...transactionInput,
      createdAt: new Date('2023-05-15')
    })

    const { transaction } = response.data
    setTransactions([
      ...transactions,
      transaction
    ])
  }

  return (
    <TransactionsContext.Provider value={{ transactions, createTransaction }}>
      {children}
    </TransactionsContext.Provider>
  )
}