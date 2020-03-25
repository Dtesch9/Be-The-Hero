import styled from 'styled-components';

import logo from '~/assets/logo.svg';

export const Container = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  flex: 1;
`;

export const Logo = styled.img.attrs({
  src: logo,
  alt: 'Be The Hero',
})``;

export const Section = styled.section``;
