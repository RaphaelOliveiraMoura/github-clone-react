import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  border: 1px solid #e1e4e8;
  border-radius: 3px;
  flex-direction: column;
  overflow-x: hidden;

  #profile-image {
    width: 278px;
    height: 278px;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
  }

  @media (max-width: 770px) {
    width: 128px;
    #profile-image {
      width: 128px;
      height: 128px;
    }
  }

  #description {
    display: inline-flex;
    padding: 8px;
    align-items: center;
    width: max-content;

    #ballon-icon {
      width: 18px;
      height: 18px;
    }

    p {
      display: inline-block;
      margin-left: 8px;
    }
  }
`;
