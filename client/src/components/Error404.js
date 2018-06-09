import React from 'react';
import Error from '../styles/components/Error';
import pic from '../images/404-2.jpg';

const Error404 = () => {
  return (
    <Error>
      <img src={pic} alt="error404" />
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
          className="button"
        >
          <span>Submit an Issue</span>
        </a>
        <h3>
          <span className="blue">whyOhWhy</span>(
          <span className="red">"$%ndeo@...don't get it... @!$%^).."</span>)
        </h3>
        <a href="/" className="button disabled">
          <span>Back to Home</span>
        </a>
      </div>
    </Error>
  );
};

export default Error404;