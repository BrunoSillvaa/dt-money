import { Container,RadioBox, TransactionTypeContainer } from './styles'
import Modal from 'react-modal'
import { FormEvent, useContext, useState } from 'react'
import { AiOutlineArrowDown, AiOutlineArrowUp } from 'react-icons/ai'
import { IoIosClose } from 'react-icons/io'
import { TransactionsContext } from '../../contexts/TransactionContext'

interface NewTransactionModalProps {
  isOpen: boolean
  onRequestClose: () => void
}

export function NewTransactionModal({isOpen, onRequestClose}: NewTransactionModalProps) {
  const [type, setType] = useState('deposit')
  const [title, setTitle] = useState('')
  const [amount, setAmount] = useState(0)
  const [category, setCategory] = useState('')

  const { createTransaction } = useContext(TransactionsContext)

  function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault()

    createTransaction({
      title,
      amount,
      category,
      type
    })
      .then(() => {
        setTitle('')
        setAmount(0)
        setCategory('')
        setType('deposit')
    
        onRequestClose()
      })
      .catch(error => console.log(error))

  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName='react-modal-overlay'
      className='react-modal-content'
    >
      <button
        onClick={onRequestClose}
        className='react-modal-close-icon'
      >
        <IoIosClose />
      </button>

      <Container onSubmit={handleCreateNewTransaction}>
        <h2>Nova Transacao</h2>

        <input
          type='text'
          placeholder='Titulo'
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />

        <input
          type='number'
          placeholder='Valor'
          value={amount}
          onChange={(event) => setAmount(+event.target.value)}
        />

        <TransactionTypeContainer>
          <RadioBox
            type='button'
            isActive={type === 'deposit'}
            activeColor='green'
            onClick={() => setType('deposit')}
          >
            <AiOutlineArrowUp className='icon' />
            <span>Entrada</span>
          </RadioBox>

          <RadioBox
            type='button'
            isActive={type === 'withdraw'}
            activeColor='red'
            onClick={() => setType('withdraw')}
          >
            <AiOutlineArrowDown className='icon' />
            <span>Entrada</span>
          </RadioBox>
        </TransactionTypeContainer>

        <input
          type='text'
          placeholder='Categoria'
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        />

        <button type='submit'>Cadastrar</button>
      </Container>
    </Modal>
  )
}
