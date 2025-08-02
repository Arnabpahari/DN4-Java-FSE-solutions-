import React from 'react';

function IndianPlayers() {
    const T20players = ["PlayerA", "PlayerB", "PlayerC", "PlayerD"];
    const RanjiTrophyPlayers = ["PlayerE", "PlayerF", "PlayerG", "PlayerH"];

    const mergedPlayers = [...T20players, ...RanjiTrophyPlayers];

    // Using index to separate odd/even players
    const evenPlayers = mergedPlayers.filter((_, index) => (index+1) % 2 === 0);
    const oddPlayers = mergedPlayers.filter((_, index) => (index+1) % 2 !== 0);//index+1 since the index starts from 0, so we add 1 to make it 1-based index

    return (
        <div>
            <h2>Odd Team Players</h2>
            <ul>
                {oddPlayers.map((player, index) => (
                    <li key={index}>{player}</li>
                ))}
            </ul>
             <h2>Even Team Players</h2>
            <ul>
                {evenPlayers.map((player, index) => (
                    <li key={index}>{player}</li>
                ))}
            </ul>
            <h2>List of Indian Players Merged</h2>
            <ul>
                {mergedPlayers.map((player, index) => (
                    <li key={index}>Mr {player}</li>
                ))}
            </ul>
        </div>
    );
}

export default IndianPlayers;
