import React, { Component } from 'react';
import Navbar from '../components/Navbar';

class Editor extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Navbar username={this.props.match.params.username} />
        <h1>This is my Editor</h1>
      </div>
    );
  }
};

export default Editor;
