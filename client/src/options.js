import React from 'react';

class Options extends React.Component {
    handleClick(value) {
        this.props.handleOptionClick(value)
    }

    render() { 
        return (
            <div className="options">
                <button
                    className="player-game__added-number"
                    onClick={() => this.handleClick(-1)}
                    disabled={this.props.nextNumberToBeAdded !== -1}
                >
                    -1
                </button>
                <button 
                    className="player-game__added-number" 
                    onClick={() => this.handleClick(0)}
                    disabled={this.props.nextNumberToBeAdded !== -0}
                >
                    0
                </button>
                <button 
                    className="player-game__added-number"
                    onClick={() => this.handleClick(1)}
                    disabled={this.props.nextNumberToBeAdded !== 1}
                >
                    1
                </button>
            </div>
        
        );
    }    
}

export default Options;