import React, { Component } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import ErrorPage from './ErrorPage';

class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: null,
      error: false
    };

    this.renderError = this.renderError.bind(this);
  }
  componentDidMount() {
    axios
      .get('/api/user')
      .then(res => {
        if (!res.data.username) window.location.href = '/';
        else {
          this.setState({ user: res.data });
        }
      })
      .catch(err => {
        console.log(err);
        this.renderError();
      });
  }
  renderError() {
    this.setState({ error: true });
  }
  render() {
    if (!this.state.user) {
      return (
        <div>
          <h2>Loading...</h2>
        </div>
      );
    } else if (this.state.error) {
      return <ErrorPage />;
    }
    return (
      <div>
        <Navbar username={this.props.match.params.username} />
        <div>
          <h2>Profile Page</h2>
        </div>
      </div>
    );
  }
}

export default Profile;
