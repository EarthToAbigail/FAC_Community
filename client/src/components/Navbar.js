import React, { Component } from 'react';
import { FaBars } from 'react-icons/lib/fa';
import '../styles/navbar.css';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showMenu: false,
      classes: 'topnav',
      forum_url: ''
    };
    this.handleClick = this.handleClick.bind(this);
    this.findForumUrl = this.findForumUrl.bind(this);
  }
  componentDidMount() {
    this.findForumUrl();
  }

  findForumUrl() {
    if (process.env.NODE_ENV !== 'production') {
      this.setState({ forum_url: 'http://localhost:3000' });
    }
  }

  handleClick() {
    this.setState({ showMenu: !this.state.showMenu });
    this.state.showMenu
      ? this.setState({ classes: 'topnav responsive' })
      : this.setState({ classes: 'topnav' });
  }

  render() {
    const logoutUrl = '/'.concat(this.props.username.concat('/logout'));
    const momentUrl = '/'.concat(this.props.username.concat('/moments/edit'));
    return (
      <div className={this.state.classes}>
        <a href="/" className="active">
          Home
        </a>
        <a href={momentUrl}>Moments</a>
        <a href={this.state.forum_url}>Community</a>
        <a href={logoutUrl}>Logout</a>
        <button className="icon" onClick={this.handleClick}>
          <FaBars size={20} color="white" />
        </button>
      </div>
    );
  }
}

export default Navbar;
