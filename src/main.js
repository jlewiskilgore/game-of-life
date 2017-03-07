import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ControlPanel from './components/ControlPanel';
import GameBoard from './components/GameBoard';
import GenerationCounter from './components/GenerationCounter';
import './App.sass';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = { generation: 0, pauseState: false };

		this.incrementGeneration = this.incrementGeneration.bind(this);
		this.runGameLoop = this.runGameLoop.bind(this);
		this.pauseGameLoop = this.pauseGameLoop.bind(this);
	}

	incrementGeneration() {
		var currentGen = this.state.generation;
		var nextGen = currentGen+1;
		
		this.setState({ generation: nextGen });
	}

	runGameLoop() {
		var currentGen = this.state.generation;
		var isPaused = this.state.pauseState;

		if(currentGen < 500 && isPaused == false) {
			this.incrementGeneration();
			this.refs.gameBoard.getNextGenerationCellValues();
			setTimeout( this.runGameLoop, 200);
		}
	}

	pauseGameLoop() {
		var isPaused = this.state.pauseState;
		console.log("is game paused? " + isPaused);

		if(isPaused == true) {
			console.log("game is now unpaused...");
			this.setState({ pauseState: false });
		}
		else if(isPaused == false) {
			console.log("game is now paused...");
			this.setState({ pauseState: true });
		}
	}

	render() {
		return (
		  <div>
		  	<GenerationCounter currentGeneration={this.state.generation} />
		  	<ControlPanel startGame={this.runGameLoop} pauseGame={this.pauseGameLoop} />
		    <GameBoard ref="gameBoard" numOfRows={20} numOfCols={20} />
		  </div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('container'));
