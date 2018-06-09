import React, { Component } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null
    };
  }
  componentDidMount() {
    axios
      .get('/api/user')
      .then(res => {
        if (!res.data.username) window.location.href = '/';
        else {
          this.setState({ user: res.data });
          console.log(this.state);
        }
      })
      .catch(err => {
        console.log(err);
      });
  }
  render() {
    if (!this.state.user) {
      return (
        <div>
          <h2>Loading...</h2>
        </div>
      );
    }
    return (
      <div>
        <Navbar/>
        <div>
          <h2>Profile Page</h2>
        </div>
      </div>
    );
  }
}

export default Profile;
