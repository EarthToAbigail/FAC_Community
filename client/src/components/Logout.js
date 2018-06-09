import React, { Component } from 'react';
import axios from 'axios';

class Logout extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    setTimeout(() => {
      axios
        .get('/api/logout')
        .then(res => {
          console.log(res.data);
          this.setState({ logged_out: true });
          res.data === 'success' ? window.location.href = "/" : null;
        })
        .catch(err => {
          console.log(err);
        });
    }, 3000);
  }

  render() {
    return (
      <div>
      <h1>Goodbye! :(</h1>
    </div>
  );
  }
}

export default Logout;
