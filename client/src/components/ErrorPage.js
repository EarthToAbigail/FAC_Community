import React from 'react';
import Error from '../styles/components/Error';
import errorImg from '../images/error.jpg';

const ErrorPage = () => {
  return (
    <Error>
      <img src={errorImg} alt="error404" />
      <div>
        <h3>
          <span className="blue">whyOhWhy</span>(
          <span className="red">"accident"</span>)
        </h3>
        <a href="/" className="button">
          <span>Back to Home</span>
        </a>
        <h3>
          <span className="blue">whyOhWhy</span>(
          <span className="red">"no idea"</span>)
        </h3>
        <a
          href="https://github.com/EarthToAbigail/FAC_Community"
          target="_blank"
          rel="noreferrer noopener"
          className="button"
        >
          <span>Submit an Issue</span>
        </a>
        <h3>
          <span className="blue">whyOhWhy</span>(
          <span className="red">"$%@..don't get it..@!$%^).."</span>)
        </h3>
        <button className="button disabled">
          <span>Back to Home</span>
        </button>
      </div>
    </Error>
  );
};

export default ErrorPage;
