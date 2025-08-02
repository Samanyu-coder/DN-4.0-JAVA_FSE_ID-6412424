import React from "react";

const players = [
  { name: "Rohit", score: 85 },
  { name: "Virat", score: 90 },
  { name: "Rahul", score: 65 },
  { name: "Shreyas", score: 40 },
  { name: "Hardik", score: 78 },
  { name: "Pant", score: 55 },
  { name: "Jadeja", score: 60 },
  { name: "Ashwin", score: 45 },
  { name: "Bumrah", score: 88 },
  { name: "Shami", score: 68 },
  { name: "Kuldeep", score: 72 },
];

const ListofPlayers = () => {
  const players70 = [];
  players.map((item) => {
    if (item.score <= 70) {
      players70.push(item);
    }
  });

  return (
    <div>
      <h2>All Players</h2>
      {players.map((item, index) => (
        <div key={index}>
          <li>
            Mr. {item.name} <span> {item.score} </span>
          </li>
        </div>
      ))}

      <h2>Players with Score ≤ 70</h2>
      {players70.map((item, index) => (
        <li key={index}>
          {item.name} - {item.score}
        </li>
      ))}
    </div>
  );
};

export default ListofPlayers;
