import React from 'react';

import { Container } from './style';

import ProfileImageContainer from './profile-image-container';

export default () => (
  <Container>
    <ProfileImageContainer />
    <h1>Raphael de Oliveira</h1>
    <span>RaphaelOliveiraMoura</span>
    <button>Edit Profile</button>
  </Container>
);
