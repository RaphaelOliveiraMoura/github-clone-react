import React from 'react';

import { Container } from './styles';

export default props => (
  <Container {...props}>
    <span>{props.title}</span>
    {props.notifications && (
      <div className="notifications">{props.notifications}</div>
    )}
  </Container>
);
