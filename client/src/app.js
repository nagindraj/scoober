import React from 'react';
import axios from 'axios';
import Header from './header';
import Players from './players';
import Options from './options';
import Win from './win';
import Lose from './lose';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            players: [],
            player: 'player_1',
            initialValue: 0,
            nextNumberToBeAdded: 0
        }
    }

    updateCurrentPlayer(players) {
        const prevPlayer = players[players.length-1];
        let player = 'player_1';

        if(prevPlayer.player === 'player_1') {
            player = 'player_2';
        }else {
            player = 'player_1';
        }
        this.setState({
            initialValue: prevPlayer.calculatedValue
        });

        if(prevPlayer.calculatedValue !== 1) {
            this.setState({
                player: player,
                players: players,
                nextNumberToBeAdded: prevPlayer.nextNumberToBeAdded
            });
        }
    }

    handleOptionClick(){
        console.log(this.state);
        axios.post('/continue', {
            email: this.props.email,
            initialValue: this.state.initialValue,
            player: this.state.player
        })
        .then((resp) => {
            const players = resp.data.players;
            this.updateCurrentPlayer(players);
        });
    }

    deletePlayer() {
        axios.post('/delete', {
            email: this.props.email
        })
        .then((resp) => {
            console.log(resp);
        });
    }

    gameLogin() {
        axios.post('/login', {
            email: this.props.email
        })
        .then((resp) => {
            const players = resp.data.players;
            this.updateCurrentPlayer(players);
        });
    }

    render() {
        if(this.state.initialValue === 1) {
            this.deletePlayer();
            if(this.state.player === 'player_1') {
                return (
                    <Lose onClick={() => this.gameLogin()}/>
                );
            }else if(this.state.player === 'player_2') {
                return (
                    <Win onClick={() => this.gameLogin()}/>
                );
            }
            
        }
        return (
            <>
            <div className="player-game__Screen">
                <Header/>
                <Players players={this.state.players}/>
                <Options 
                    handleOptionClick ={(value)=> this.handleOptionClick(value)}
                    nextNumberToBeAdded={this.state.nextNumberToBeAdded}
                />
            </div>
            </>
        );
    }

    componentDidMount() {
        this.gameLogin()
    }
}

export default App;