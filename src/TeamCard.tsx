import React from 'react';
import TeamList from './TeamList';


class TeamCard extends React.Component < {school: string, name: string, city: string, state: string} > {
    render () {

    const oneTeam = this.props;


      return (
        <div>
          <h3>{oneTeam.school} </h3>
          <h4>Mascot: {oneTeam.name}</h4>
          <h4>Location: {oneTeam.city}, {oneTeam.state} </h4>
          <br></br>
        </div>
      );
    }
  }


export default TeamCard;