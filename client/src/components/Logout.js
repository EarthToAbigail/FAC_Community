import React, { Component } from 'react';
import axios from 'axios';
import ErrorPage from './ErrorPage';

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
          res.data === 'logged out' ? (window.location.href = '/') : null;
        })
        .catch(err => {
          console.log(err);
          this.renderError();
        });
    }, 2000);
  }
  renderError() {
    this.setState({ error: true });
  }
  render() {
    if (this.state.error) {
      return <ErrorPage />;
    }
    return (
      <div>
        <h1>Goodbye! :(</h1>
      </div>
    );
  }
}

export default Logout;
