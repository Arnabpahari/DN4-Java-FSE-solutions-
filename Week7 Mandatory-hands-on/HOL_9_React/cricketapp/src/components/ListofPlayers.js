import React from 'react';

function ListofPlayers() {
    const players = [
        { name: "Jack", score: 80 },
        { name: "Michael", score: 65 },
        { name: "John", score: 90 },
        { name: "Ann", score: 45 },
        { name: "Ell", score: 75 },
        { name: "Sachin", score: 60 },
        { name: "Dhoni", score: 50 },
        { name: "Virat", score: 95 },
        { name: "Jadeja", score: 85 },
        { name: "Raina", score: 40 },
        { name: "Rohit", score: 55 }
    ];

    const below70 = players.filter(p => p.score < 70); // arrow function

    return (
        <div>
            <h2>All Players</h2>
            <ul>
                {players.map((player, index) => (
                    <li key={index}>Mr {player.name}   {player.score}</li>
                ))}
            </ul>

            <h2>Players with score below 70</h2>
            <ul>
                {below70.map((player, index) => (
                    <li key={index}>Mr {player.name}  {player.score}</li>
                ))}
            </ul>
        </div>
    );
}

export default ListofPlayers;
