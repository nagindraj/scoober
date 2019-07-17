import React from 'react';
import Header from './header';
import Lost from './images/lose.png';

const Lose = (props) => {
    return (
        <div className="player-game__Screen">
            <Header/>
            <div className="game__win-lose">
                <img src={Lost} alt=""/>
                <div className="winOrLose">
                    You lose
                </div>
                <button className="new_game" onClick={props.onClick}>
                    New game
                </button>
            </div>
        </div>
    );
}

export default Lose;