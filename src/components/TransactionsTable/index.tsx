import { useContext, useEffect, useState } from 'react';
import { TransactionsContext } from '../../contexts/TransactionContext';
import { Transcation } from '../../types';
import { Container } from './styles';

export function TransactionsTable() {
  const { transactions } = useContext(TransactionsContext)

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        
        <tbody>
          {transactions.map(transaction => (
            <tr key={transaction.id}>
              <td>{transaction.title}</td>
              <td>
                {new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL'
                }).format(transaction.amount)}
              </td>
              <td>{transaction.type}</td>
              <td>
                {new Intl.DateTimeFormat('pt-BR').format(new Date(transaction.createdAt))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  )
}