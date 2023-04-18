import styled from 'styled-components';

export const Container = styled.section`
  margin-top: 4rem;

  @media (max-width: 500px) {
    margin-top: 1rem;
  }
  
  table {
    width: 100%;
    border-spacing: 0 0.5rem;

    th {
      color: var(--text-body);
      font-weight: 400;
      padding: 1rem 2rem;
      text-align: left;
      line-height: 1.5rem;

      @media (max-width: 500px) {
        padding: .5rem;
        text-align: center;
      }
    }

    td {
      background: var(--shape);
      color: var(--text-body);
      padding: 1rem 2rem;
      border: 0;
      border-radius: 0.25rem;

      @media (max-width: 500px) {
        padding: .8rem;
      }

      &:first-child {
        color: var(--text-tile);
      }
    }
  }
`