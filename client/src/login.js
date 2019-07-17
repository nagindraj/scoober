import React from 'react';
import Header from './header';
import './main.css';

class Login extends React.Component{
    constructor() {
        super();

        this.state = {
            email: ''
        }
    }

    handleEmail(e) {
        this.setState({
            email: e.target.value
        })
    }

    handleLogin() {
        this.props.handleClick(this.state.email);
    }

    render() {
        return (
            <div className="player-game__Screen">
                <Header/>
                <div className="login">
                    <input 
                        type="text" 
                        value={this.state.email}
                        onChange={
                            (e) => this.handleEmail(e)
                        } 
                        className="login__email"
                        placeholder="example@email.com"
                    />
                    <button
                        onClick={() => this.handleLogin()}
                        className="login__next">
                            Play Game
                    </button>
                </div>
            </div>
        );
    }
};

export default Login;