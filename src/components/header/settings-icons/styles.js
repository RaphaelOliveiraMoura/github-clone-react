import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;

  svg {
    margin-right: 16px;
    fill: #fff;
  }

  @media (max-width: 860px) {
    display: none;
  }
`;
