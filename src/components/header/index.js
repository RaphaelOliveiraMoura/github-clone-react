import React from 'react';

import { Container } from './styles';

import Logo from './logo';
import SearchInput from './search-input';
import HeaderList from './header-list';
import SettingsIcons from './settings-icons';

export default () => (
  <Container>
    <Logo color="#FFF" />
    <SearchInput />
    <HeaderList />
    <SettingsIcons />
  </Container>
);
