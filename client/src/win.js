import React from 'react';
import Header from './header';
import Won from './images/won.png';

const Win = (props) => {
    return (
        <div className="player-game__Screen">
            <Header/>
            <div className="game__win-lose">
                <img src={Won} alt=""/>
                <div className="winOrLose">
                   You Won
                </div>
                <button className="new_game" onClick={props.onClick}>
                    New game
                </button>
            </div>
        </div>
    );
}

export default Win;