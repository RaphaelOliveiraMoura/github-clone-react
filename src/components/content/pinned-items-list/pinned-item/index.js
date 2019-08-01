import React from 'react';

import { Container } from './styles';

export default props => (
  <Container>
    <div className="title">{props.item.title}</div>
    <div className="subtitle">{props.item.subtitle}</div>
    <div className="language-container">
      <div className="language-icon" />
      <div className="language-text">{props.item.language}</div>
    </div>
  </Container>
);
