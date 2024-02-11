import React, { useState } from "react";

function PlayersManager() {
  const [numOfPlayers, setNumOfPlayers] = useState(0);
  const [players, setPlayers] = useState([]);

  const handleAddPlayer = (e) => {
    e.preventDefault();

    // Assuming you want to add a player based on the input value
    const playerName = e.target.elements.playerName.value;

    if (playerName.trim() !== "") {
      setNumOfPlayers(numOfPlayers + 1);
      setPlayers([...players, { id: numOfPlayers + 1, name: playerName }]);
    }

    // Clear the input field
    e.target.elements.playerName.value = "";
  };

  return (
    <>
      <h1>Players Manager</h1>
      <form onSubmit={handleAddPlayer}>
        <label>
          Player Name:
          <input type="text" name="playerName" />
        </label>
        <button type="submit">Add Player</button>
      </form>
      <div>
        <h2>Number of Players: {numOfPlayers}</h2>
        <ul>
          {players.map((player) => (
            <li key={player.id}>{player.name}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default PlayersManager;
