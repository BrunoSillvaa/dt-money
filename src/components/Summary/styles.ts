import styled from 'styled-components';

interface HighlightProps {
  total: number
}

export const Container = styled.div<HighlightProps>`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: -10rem;

  @media (max-width: 500px) {
    display: flex;
    gap: 0;
    justify-content: space-between;
  }

  div {
    color: var(--text-title);
    background: var(--shape);
    padding: 1.5rem 2rem;
    border-radius: 0.25rem;

    @media (max-width: 500px) {
      padding: 1rem 1.5rem;
    }

    header {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    strong {
      display: block;
      margin-top: 1rem;
      font-size: 2rem;
      font-weight: 500;

      @media (max-width: 500px) {
        font-size: 1.2rem;
        text-align: center;
      }
    }

    .icon {
      font-size: 1.5rem;

      @media (max-width: 500px) {
        font-size: 1.2rem;
      }
    }

    &.highlight-bg {
      text-align: center;
      color: #fff;
      background: ${(props) => props.total > 0 ? 'var(--green)' : 'var(--red)'};
    }
  }
`