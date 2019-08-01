import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  margin-left: 36px;
  font-size: 1.1em;
  font-weight: ${props => (props.selected ? 800 : 200)};
  color: ${props => (props.selected ? '#000' : '#586069')};

  .notifications {
    height: 16px;
    width: 16px;
    display: flex;
    border-radius: 100%;
    margin-left: 8px;
    color: #586069;
    background-color: rgba(27, 31, 35, 0.08);
    justify-content: center;
    align-items: center;
    font-size: 0.8em;
    font-weight: 800;
  }

  @media (max-width: 1025px) {
    margin-left: 24px;
    .notifications {
      display: none;
    }
  }

  @media (max-width: 890px) {
    margin-left: 12px;
  }
`;
