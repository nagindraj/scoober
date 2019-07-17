import React from 'react';
import PlayerTwoImage from './images/monkey.jpg';

const PlayerTwo = (props) => {
    return (
        <section className="player-game__main">
            <div className="player-game_user_two">
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
            <div className="player-game__player_two">
                <img src={PlayerTwoImage} alt="player_one"/>
            </div>
        </section>
    );
};

export default PlayerTwo;