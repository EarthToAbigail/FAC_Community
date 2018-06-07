import React from 'react';
import header from '../images/logo-foundersandcoders.png';

const Home = () => (
  <div className="hero">
    <div>
      <img className="header" alt="Founders and Coders logo" src={header} />
      <div>
        <h1 style={{ color: 'white' }}>
          Sharing Platform for the Founders and Coders Community
        </h1>
        <a className="button" href="/auth/github">
          Login With Github
        </a>
      </div>
    </div>
  </div>
);

export default Home;
