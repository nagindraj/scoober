import React from 'react';
import PlayerOne from './images/player_one.png';

const Header = () => {
    return (
        <header className="player-game__header">
            <div className="player-game__image">
                <img src={PlayerOne} alt="player_1"/>
            </div>
            <div className="player-game__heading">
                <h3>Scoober team</h3>
                <p>Win the game or win the job</p>
            </div>
        </header>
    );
};

export default Header;
