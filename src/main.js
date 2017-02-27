import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import GameBoard from './components/GameBoard';
import './App.sass';

class App extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
		  <div>
		    <GameBoard />
		  </div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('container'));
