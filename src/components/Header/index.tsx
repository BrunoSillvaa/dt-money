import { useState } from 'react';
import { Container, Content } from './styles';

interface HeaderProps {
  handleOpenNewTransactionModal: () => void
}

export function Header({ handleOpenNewTransactionModal }: HeaderProps) {

  return (
    <Container>
      <Content>
        <img src="vite.svg" alt="dt money" />
        <button type='button' onClick={handleOpenNewTransactionModal}>
          Nova Transação
        </button>


      </Content>
    </Container>
  )
}
