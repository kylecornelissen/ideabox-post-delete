import React, {Component} from 'react';
import './TeamContainer.css';
import { deleteOptions } from '../helpers.js';
const url = 'http://localhost:3001/api/v1/sport-teams';

class TeamContainer extends Component {
  constructor() {
    super();
    this.state = {
      teams: [],
      error: ''
    };
  }
  componentDidMount() {
    this.handleFetch();
  }
  componentDidUpdate() {
    this.handleFetch();
  }
  handleFetch = () => {
    fetch(url)
      .then(res => res.json())
      .then(teams => this.setState({teams}))
      .catch(error => console.log(error));
  }
  handleDelete = (e) => {
    const teamId = e.target.id;
    fetch(`${url}/${teamId}`, deleteOptions())
      .then(res => res.json())
      .then(data => data)
      .catch(error => console.log(error))
  }
  render() {
    const {teams} = this.state;
    return teams.map(team => {
      return (
        <article className="team" key={team.id}>
          <h2>{team.name}</h2>
          <h3>Head Coach: {team.head_coach}</h3>
          <button id={team.id} type="submit" className="delete-btn" onClick={(e) => this.handleDelete(e)}><span id={team.id}>Delete {team.sport} team</span></button>
        </article>
      )
    })
  }
}

export default TeamContainer;
