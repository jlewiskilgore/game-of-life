import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ControlPanel from './components/ControlPanel';
import GameBoard from './components/GameBoard';
import GenerationCounter from './components/GenerationCounter';
import './App.sass';

class App extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
		  <div>
		  	<GenerationCounter />
		  	<ControlPanel />
		    <GameBoard />
		  </div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('container'));
