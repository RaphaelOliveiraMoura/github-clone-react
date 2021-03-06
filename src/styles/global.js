import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

  @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    font: 14px 'Roboto', sans-serif;
    background: #f6f8fa;
    color: #24292e;
    display: flex;
    flex-wrap: wrap;
  }

  #page-content {
    display: flex;
    flex-direction: row;
  }

  @media (max-width: 680px) {
    #page-content {
      flex-direction: column;
    }
  }
`;
