import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ControlPanel from './components/ControlPanel';
import GameBoard from './components/GameBoard';
import GenerationCounter from './components/GenerationCounter';
import './App.sass';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = { generation: 0 };
	}

	render() {
		return (
		  <div>
		  	<GenerationCounter currentGeneration={this.state.generation} />
		  	<ControlPanel />
		    <GameBoard numOfRows={10} numOfCols={10} />
		  </div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('container'));
