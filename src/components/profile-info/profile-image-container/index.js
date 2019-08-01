import React from 'react';

import { Container } from './style';

export default () => (
  <Container>
    <img
      id="profile-image"
      src="https://avatars0.githubusercontent.com/u/41276009?s=460&v=4"
      alt="profile"
    />
    <div id="description">
      <img
        id="ballon-icon"
        src="https://github.githubassets.com/images/icons/emoji/unicode/1f4ad.png"
        alt="ballon"
      />
      <p>Learning...</p>
    </div>
  </Container>
);
