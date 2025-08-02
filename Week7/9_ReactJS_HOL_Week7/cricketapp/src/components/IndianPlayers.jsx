import React from "react";

const OddPlayers = ({ team }) => {
  const [first, , third, , fifth] = team;
  return (
    <div>
      <li> First : {first} </li>
      <li> Third : {third} </li>
      <li> Fifth : {fifth} </li>
    </div>
  );
};

const IndianPlayers = () => {
  const team = ["Rohit", "Virat", "Rahul", "Shreyas", "Pant"];
  const T20Players = ["SKY", "Samson", "Bishnoi"];
  const RanjiPlayers = ["Pujara", "Rahane", "Shaw"];
  const allPlayers = [...T20Players, ...RanjiPlayers];

  return (
    <div>
      <h2>Odd Team Players</h2>
      <OddPlayers team={team} />

      <h2>Merged T20 + Ranji Trophy Players</h2>
      {allPlayers.map((p, index) => (
        <li key={index}>{p}</li>
      ))}
    </div>
  );
};

export default IndianPlayers;
