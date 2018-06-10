import React, { Component } from 'react';
import axios from 'axios';
import ErrorPage from './ErrorPage';
import { Hero } from '../styles/components/homeStyles';
import Goodbye from '../styles/components/Goodbye';

class Logout extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error: false
    };

    this.renderError = this.renderError.bind(this);
  }
  componentDidMount() {
    setTimeout(() => {
      axios
        .get('/api/logout')
        .then(res => {
          // eslint-disable-next-line no-undef
          if (res.data === 'logged out') window.location.href = '/';
        })
        .catch(err => {
          console.err(err);
          this.renderError();
        });
    }, 5000);
  }
  renderError() {
    this.setState({ error: true });
  }
  render() {
    if (this.state.error) {
      return <ErrorPage />;
    }
    return (
      <Hero color="#28a4a4">
        <Goodbye>
          <h1>Really...</h1>
          <h1>Ok...</h1>
          <h1>Come back soon...</h1>
        </Goodbye>
      </Hero>
    );
  }
}

export default Logout;
