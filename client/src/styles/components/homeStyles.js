import styled from 'styled-components';

import heroBackground from '../../images/academy-EDIT2.jpg';

export const Hero = styled.div`
  background-image: url(${heroBackground});
  background-color: blue;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  background-attachment: fixed;
  text-align: center;
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TagLine = styled.h1`
  color: white;
  padding-top: 3vh;
`;

export const HeaderLogo = styled.img`
  max-width: 50vw;
`;
