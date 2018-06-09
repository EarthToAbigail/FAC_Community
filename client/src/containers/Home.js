import React, { Component } from 'react';
import axios from 'axios';
import header from '../images/logo-foundersandcoders-shadow.png';
import { Hero, TagLine, HeaderLogo } from '../styles/components/homeStyles';
import '../styles/LoginBtn.css';
import githubLogo from '../images/github-6-80-w.png';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      authenticated: false
    };
  }
  componentDidMount() {
    axios
      .get('/api/auth')
      .then(res => {
        const { authenticated, username } = res.data;
        this.setState({ authenticated, username });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    if (this.state.authenticated === true) {
      window.location.href = `/user/${this.state.username}`;
    } else {
      return (
        <Hero>
          <div>
            <HeaderLogo alt="Founders and Coders logo" src={header} />
            <div>
              <TagLine>
                Sharing Platform for the Founders and Coders Community
              </TagLine>
              <ul>
                <li>
                  <a className="round green" href="/auth/github">
                    Login
                    <span className="round">
                      <img
                        className="logo"
                        src={githubLogo}
                        alt="github logo"
                      />
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </Hero>
      );
    }
  }
}

export default Home;
