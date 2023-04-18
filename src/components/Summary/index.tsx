import { Container } from './styles'
import { AiOutlineArrowDown, AiOutlineArrowUp } from 'react-icons/ai'
import { MdOutlineAttachMoney } from 'react-icons/md'
import { useContext, useEffect, useState } from 'react'
import { TransactionsContext } from '../../contexts/TransactionContext'
import { formateVallue } from '../../utils/regex'

export function Summary() {
  const { transactions } = useContext(TransactionsContext)
  const [income, setIncome] = useState(0)
  const [expense, setExpense] = useState(0)
  const total = income - expense

  useEffect(() => {
    const incomeTotal = transactions
      .filter((transaction) => transaction.type === 'deposit')
      .reduce((acc, transaction) => acc + transaction.amount, 0)

    const expenseTotal = transactions
      .filter((transaction) => transaction.type === 'withdraw')
      .reduce((acc, transaction) => acc + transaction.amount, 0)

    setIncome(incomeTotal)
    setExpense(expenseTotal)
  }, [transactions])

  return (
    <Container total={total}>
      <div>
        <header>
          <p>Entradas</p>
          <AiOutlineArrowDown className='icon' />
        </header>
        <strong>R${income}</strong>
      </div>

      <div>
        <header>
          <p>Saidas</p>
          <AiOutlineArrowUp className='icon' />
        </header>
        <strong>- R${expense}</strong>
      </div>

      <div className='highlight-bg'>
        <header>
          <p>Total</p>
          <MdOutlineAttachMoney className='icon' />
        </header>
        <strong>{total < 0 ? formateVallue(total) : `R$${total}`}</strong>
      </div>
    </Container>
  )
}
