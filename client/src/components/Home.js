import React, { Component } from 'react';
import axios from 'axios';
import header from '../images/logo-foundersandcoders-shadow.png';
import { Hero, TagLine, HeaderLogo } from '../styles/components/homeStyles';
import ErrorPage from './ErrorPage';
import '../styles/LoginBtn.css';
import githubLogo from '../images/github-6-80-w.png';
import heroImage from '../images/academy-EDIT2.jpg';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      authenticated: false,
      error: false
    };

    this.renderError = this.renderError.bind(this);
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
        this.renderError();
      });
  }

  renderError() {
    this.setState({ error: true });
  }

  render() {
    if (this.state.authenticated === true) {
      window.location.href = `/${this.state.username}`; // eslint-disable-line no-undef
    } else if (this.state.error) {
      return <ErrorPage />;
    }
    return (
      <Hero image={heroImage}>
        <div>
          <HeaderLogo alt="Founders and Coders logo" src={header} />
          <div>
            <TagLine>
              Sharing Platform for the Founders and Coders Community
            </TagLine>
            <ul>
              <li>
                <a href="/auth/github" className="round green">
                  Login
                  <span className="round">
                    <img className="logo" src={githubLogo} alt="github logo" />
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

export default Home;
