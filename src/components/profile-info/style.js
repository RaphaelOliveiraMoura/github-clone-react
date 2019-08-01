import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 18px;

  h1 {
    margin-top: 16px;
  }

  button {
    margin-top: 24px;
    padding: 8px 0;
    background-color: #eff3f6;
    background-image: linear-gradient(-180deg, #fafbfc, #eff3f6 90%);
    border: 1px solid rgba(27, 31, 35, 0.2);
    font-weight: 800;
  }
`;
