import React from 'react';

import Header from './header';
import ProfileInfo from './profile-info';
import Content from './content';

import GlobalStyle from '../styles/global';

export default () => (
  <>
    <Header />
    <ProfileInfo />
    <Content />
    <GlobalStyle />
  </>
);
