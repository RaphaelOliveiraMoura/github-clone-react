import React from 'react';

import { Container } from './styles';

import ProfileImageContainer from './profile-image-container';

export default () => (
  <Container>
    <ProfileImageContainer />
    <h1>Raphael de Oliveira</h1>
    <span>RaphaelOliveiraMoura</span>
    <button>Edit Profile</button>
  </Container>
);
