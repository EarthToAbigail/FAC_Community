import styled from 'styled-components';

export const Hero = styled.div`
  background-image: url(${props => props.image});
  background-color: ${props => props.color};
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
  text-shadow: 2px 2px #000;
  ${'' /* font-family: Open Sans, sans-serif; */}
`;

export const HeaderLogo = styled.img`
  max-width: 50vw;
`;
