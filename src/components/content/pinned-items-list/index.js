import React from 'react';

import { Container } from './styles';

import PinnedItem from './pinned-item';

const items = [
  {
    title: 'rest-api-starter',
    subtitle:
      'A base but complete struct to start a server side project with support to many functionalities',
    language: 'Typescript'
  },
  {
    title: 'simple-quests',
    language: 'JavaScript'
  },
  {
    title: 'website-ihc',
    subtitle:
      'Trabalho desenvolvido no curso de SI da Una Contagem, referente a matéria de Interface Humano Computador.',
    language: 'HTML'
  },
  {
    title: 'imb-functions-service',
    subtitle: 'some sample functions using ibm cloud services',
    language: 'JavaScript'
  },
  {
    title: 'kukac-project-clt',
    subtitle: 'Processo seletivo para vaga de desenvolvedor clt pela kukac',
    language: 'Typescript'
  },
  {
    title: 'vscode-settings'
  }
];

export default () => (
  <Container>
    <div className="pinned-title">Pinned</div>
    {items.map((item, key) => (
      <PinnedItem item={item} key={key} />
    ))}
  </Container>
);
