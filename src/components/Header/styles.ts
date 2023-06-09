import styled from 'styled-components';

export const Container = styled.header`
  background: var(--blue);
`
export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 2rem 1rem 12rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 500px) {
    padding: 2rem 1rem 10rem;
  }

  .logo {
    color: white;
    
    @media (max-width: 500px) {
      font-size: 1.5rem;
      font-family: 'Poppins', sans-serif;
      font-weight: 400;
    }
  }

  button {
    font-size: 1rem;
    color: #FFF;
    background: var(--blue-light);
    border: 0;
    padding: 0 2rem;
    border-radius: 0.25rem;
    height: 3rem;
    transition: all ease .1s;
    cursor: pointer;

    &:hover {
      filter: brightness(0.9);
    }

    &:active {
      transform: scale(105%);
    }
  }
`