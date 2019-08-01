import styled from 'styled-components';

export const Container = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 100%;
  fill: ${props => props.color || '#FFF'};
`;
