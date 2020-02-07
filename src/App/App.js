import React, { Component } from 'react';
import TeamContainer from '../TeamContainer/TeamContainer.js';
import Form from '../Form/Form.js';

class App extends Component {
  constructor() {
    super();
    this.state = {}
  }

  render() {
    return (
      <div>
        <h1>Sports Teams</h1>
        <Form />
        <TeamContainer />
      </div>
    )
  }
}

export default App;
