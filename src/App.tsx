import { useState } from 'react'
import { Dashboard } from './components/Dashboard'
import { Header } from './components/Header'
import { GlobalStyle } from './styles/global'
import Modal from 'react-modal'
import { NewTransactionModal } from './components/NewTransactionModal'
import { TransactionsProvider } from './contexts/TransactionContext'

Modal.setAppElement('#root')

function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false)

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false)
  }

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true)
  }

  return (
    <>
      <TransactionsProvider>
        <Header handleOpenNewTransactionModal={handleOpenNewTransactionModal}/>

        <Dashboard />

        <NewTransactionModal isOpen={isNewTransactionModalOpen} onRequestClose={handleCloseNewTransactionModal} />
      </TransactionsProvider>

      <GlobalStyle />
    </>
  )
}

export default App
