import React from 'react';

import Header from './header';
import ProfileInfo from './profile-info';
import Content from './content';

import GlobalStyle from '../styles/global';

export default () => (
  <>
    <Header />
    <div id="page-content">
      <ProfileInfo />
      <Content />
    </div>
    <GlobalStyle />
  </>
);
