import styled from 'styled-components';

const Error = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  text-align: center;

  background-color: #282c35;

  img {
    max-width: 60%;
    height: auto;
  }

  h3 {
    padding: 1.5rem;
    color: white;
  }

  p {
    color: white;
  }

  .red {
    color: #ff8566;
  }
  .blue {
    color: #00a3cc;
  }

  .button {
    display: inline-block;
    border-radius: 4px;
    background-color: #008080;
    border: none;
    color: #ffffff;
    text-align: center;
    font-size: 25px;
    padding: 0.5em 1.5em;
    width: 200px;
    transition: all 0.5s;
    cursor: pointer;
    margin: 0.5em;
    ${'' /* vertical-align: middle; */}
    text-align: center;
  }

  .button span {
    display: inline-block;
    position: relative;
    transition: 0.5s;
  }

.button:hover {
    background-color: #28a4a4;
  }
.disabled {
    cursor: not-allowed;
    background-color: #cc0000;
  }

.disabled:hover {
  opacity: 0.6;
  background-color: pink;
}

  @media screen and (max-width: 600px) {
    display: block;
    font-size: 13px;
  }

  @media all and (max-width: 600px){
 .button{
  display: block;
  margin: 0.4em auto;
 }
}
`;

export default Error;
