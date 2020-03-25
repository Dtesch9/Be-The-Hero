import styled from 'styled-components';

import logo from '~/assets/logo.svg';

export const Container = styled.div`
  flex: 1;
  max-width: 1120px;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled.img.attrs({
  src: logo,
  alt: 'Be The Hero',
})``;

export const Section = styled.section`
  width: 100%;
  max-width: 350px;
  margin-right: 30px;

  form {
    margin-top: 100px;

    h1 {
      font-size: 32px;
      margin-bottom: 32px;
    }

    a {
      display: flex;
      align-items: center;
      margin-top: 40px;
      color: #41414d;
      font-size: 18px;
      font-weight: 500;
      transition: opacity 0.2s;

      svg {
        margin-right: 8px;
      }

      &:hover {
        opacity: 0.8;
      }
    }
  }
`;
