import React from "react";
import TeamCard from "./TeamCard";
import CollegeBasketballTeams from './CollegeBasketballTeams.json'


function TeamList() {
    return (
      <div>
        {CollegeBasketballTeams.teams.map((oneTeam) => <TeamCard {...oneTeam}/>)}
  
      </div>
    );
  }

export default TeamList;
