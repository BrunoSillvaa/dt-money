import { useState } from 'react';
import { Container, Content } from './styles';

interface HeaderProps {
  handleOpenNewTransactionModal: () => void
}

export function Header({ handleOpenNewTransactionModal }: HeaderProps) {

  return (
    <Container>
      <Content>
        <h1 className='logo'>DT Money</h1>
        <button type='button' onClick={handleOpenNewTransactionModal}>
          Nova Transação
        </button>


      </Content>
    </Container>
  )
}
