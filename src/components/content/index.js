import React from 'react';

import { Container } from './styles';

import NavigationMenu from './navigation-menu';
import PinnedItemsList from './pinned-items-list';

export default () => (
  <Container>
    <NavigationMenu />
    <PinnedItemsList />
  </Container>
);
