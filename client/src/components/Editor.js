import React, { Component } from 'react';
import Navbar from './Navbar';
import ErrorPage from './ErrorPage';

class Editor extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error: false
    };

    this.renderError = this.renderError.bind(this);
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
        <Navbar username={this.props.match.params.username} />
        <h1>This is my Editor</h1>
      </div>
    );
  }
}

export default Editor;
