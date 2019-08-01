import styled from 'styled-components';

export const Container = styled.div`
  height: 133px;
  background-color: #fff;
  border-radius: 3px;
  border: 1px solid #d1d5da;
  width: 46%;
  margin: 8px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 770px) {
    width: 80%;
  }

  .title {
    color: rgb(3, 102, 214);
    font-weight: 800;
    font-size: 1.1em;
  }

  .subtitle {
    color: rgb(88, 96, 105);
  }
`;
