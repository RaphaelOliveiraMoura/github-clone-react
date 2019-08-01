import styled from 'styled-components';

export const Container = styled.div`
  input {
    width: 300px;
    outline-style: none;
    min-height: 28px;
    border-radius: 6px;
    border: none;
    padding: 0 12px;
    margin: 16px;
    background-color: #42464a;
    color: #87898c;
  }

  @media (max-width: 860px) {
    display: none;
  }
`;
