import React from 'react';
import PlayerOneImage from './images/player_one.png';

const PlayerOne = (props) => {
    return (
        <section className="player-game__main">
            <div className="player-game__player_one">
                <img src={PlayerOneImage} alt="player_one"/>
            </div>
            <div className="player-game_user">
                <div className="player-game__added-number">
                    {props.addedNumber}
                </div>
                <div className="player-game__calculation">
                    {props.calculation}
                </div>
                <div className="player-game__result">
                    {props.result}
                </div>
            </div>
        </section>
    );
};

export default PlayerOne;