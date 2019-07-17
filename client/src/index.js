import React from 'react';
import ReactDOM from 'react-dom';
import Login from './login';
import App from './app';
import './main.css';

class Game extends React.Component {
    constructor() {
        super();

        this.state = {
            email: ''
        }
    }

    handleClick(email) {
        this.setState({
            email: email
        })
    }

    render() {
        if(this.state.email === '') {
            return <Login handleClick={(email) => this.handleClick(email)}/>
        }

        return <App email={this.state.email}/>
    }
}

ReactDOM.render(<Game/>, document.querySelector('#root'));