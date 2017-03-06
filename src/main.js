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

		this.incrementGeneration = this.incrementGeneration.bind(this);
		this.runGameLoop = this.runGameLoop.bind(this);
	}

	incrementGeneration() {
		var currentGen = this.state.generation;
		var nextGen = currentGen+1;
		
		this.setState({ generation: nextGen });
	}

	runGameLoop() {
		var currentGen = this.state.generation;

		if(currentGen < 500) {
			this.incrementGeneration();
			this.refs.gameBoard.getNextGenerationCellValues();
			setTimeout( this.runGameLoop, 200);
		}
	}

	render() {
		return (
		  <div>
		  	<GenerationCounter currentGeneration={this.state.generation} />
		  	<ControlPanel startGame={this.runGameLoop} />
		    <GameBoard ref="gameBoard" numOfRows={20} numOfCols={20} />
		  </div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('container'));
