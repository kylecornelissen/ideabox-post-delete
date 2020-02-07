import React, {Component} from 'react';
import './TeamContainer.css';

class TeamContainer extends Component {
  constructor() {
    super();
    this.state = {
      teams: []
    }
  }
  componentDidMount() {
    const url = 'http://localhost:3001/api/v1/sport-teams'
    fetch(url)
      .then(res => res.json())
      .then(teams => this.setState({teams}))
      .catch(error => console.log(error));
  }
  render() {
    const {teams} = this.state;
    return teams.map(team => {
      return (
        <article className="team" key={team.id}>
          <h2>{team.name}</h2>
          <h3>Head Coach: {team.head_coach}</h3>
          <button type="button"><span>Delete Team</span></button>
        </article>
      )
    })
  }
}

export default TeamContainer;
