import React, { Component } from 'react';
import { FaBars } from 'react-icons/lib/fa';
import '../styles/navbar.css';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showMenu: false,
      classes: 'topnav'
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log(this.state);
    this.setState({ showMenu: !this.state.showMenu });
    this.state.showMenu
      ? this.setState({ classes: 'topnav responsive' })
      : this.setState({ classes: 'topnav' });
  }

  render() {
    return (
      <div className={this.state.classes}>
        <a href="/" className="active">
          Home
        </a>
        <a href="#">Moments</a>
        <a href="#">Community</a>
        <a href="#">Logout</a>
        <a
          href="javascript:void(0);"
          className="icon"
          onClick={this.handleClick}
        >
          <FaBars size={17} color="white" />
        </a>
      </div>
    );
  }
}

export default Navbar;
