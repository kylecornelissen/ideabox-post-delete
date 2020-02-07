import React, {Component} from 'react';
import './Form.css';
import { postOptions } from '../helpers.js';

class Form extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      headCoach: '',
      sport: ''
    }
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value})
  }

  submitForm = (e) => {
    fetch('http://localhost:3001/api/v1/sport-teams', postOptions(this.state))
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(error => console.log(error));
  }

  render() {
    return (
      <form autoComplete="off">
        <h2>Create A New Team...</h2>
        <label>Name</label>
        <input
          type='text'
          value={this.state.name}
          name='name'
          onChange={this.handleChange}
        />
        <label>Head Coach</label>
        <input
          type='text'
          value={this.state.headCoach}
          name='headCoach'
          onChange={this.handleChange}
        />
        <label>Sport</label>
        <input
          type='text'
          value={this.state.sport}
          name='sport'
          onChange={this.handleChange}
        />
        <button type="submit" className="submit-btn" onClick={(e) => this.submitForm(e)}>Submit New Team</button>
      </form>
    )
  }
}

export default Form;
