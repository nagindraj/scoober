import React from 'react';
import PlayerOne from './player-one';
import PlayerTwo from './player-two';

const Players = (props) => {
    const players = props.players.map(function(player) {
        if(player.player === 'player_1') {
            return (
                <PlayerOne 
                    addedNumber={player.addedNumber}
                    calculation={player.calculation}
                    result={player.calculatedValue}
                />
            );
        }

        return (
            <PlayerTwo 
                addedNumber={player.addedNumber}
                calculation={player.calculation}
                result={player.calculatedValue}
            />
        );
    })
    return (
        <>
            {players}
        </>
    )
}

export default Players;