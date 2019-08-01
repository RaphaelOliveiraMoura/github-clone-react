import React from 'react';

import { Container } from './styles';

import NavigationItem from './navigation-item';

export default () => (
  <Container>
    <NavigationItem title="Overview" selected />
    <NavigationItem title="Repositories" notifications="12" />
    <NavigationItem title="Projects" />
    <NavigationItem title="Stars" notifications="15" />
    <NavigationItem title="Followers" notifications="3" />
    <NavigationItem title="Following" notifications="9" />
  </Container>
);
