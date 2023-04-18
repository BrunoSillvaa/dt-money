import styled from 'styled-components';

interface HighlightProps {
  total: number
}

export const Container = styled.div<HighlightProps>`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: -10rem;

  div {
    color: var(--text-title);
    background: var(--shape);
    padding: 1.5rem 2rem;
    border-radius: 0.25rem;

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
    }

    .icon {
      font-size: 1.5rem;
    }

    &.highlight-bg {
      text-align: center;
      color: #fff;
      background: ${(props) => props.total > 0 ? 'var(--green)' : 'var(--red)'};
    }
  }
`