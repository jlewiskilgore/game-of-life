import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ControlPanel from './components/ControlPanel';
import GameBoard from './components/GameBoard';
import GenerationCounter from './components/GenerationCounter';
import './App.sass';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = { generation: 0, pauseState: false, isRunning: false };

		this.incrementGeneration = this.incrementGeneration.bind(this);
		this.runGameLoop = this.runGameLoop.bind(this);
		this.pauseGameLoop = this.pauseGameLoop.bind(this);
		this.clearGameBoard = this.clearGameBoard.bind(this);
	}

	incrementGeneration() {
		var currentGen = this.state.generation;
		var nextGen = currentGen+1;
		
		this.setState({ generation: nextGen });
	}

	runGameLoop() {
		var currentGen = this.state.generation;
		var isPaused = this.state.pauseState;

		if(currentGen < 1000 && isPaused == false) {
			this.incrementGeneration();
			this.refs.gameBoard.getNextGenerationCellValues();
			setTimeout( this.runGameLoop, 50);
		}
		// If game is current paused, pressing start again will unpause and run
		else if(isPaused == true) {
			this.pauseGameLoop();
		}

		this.setState({ isRunning: true });
	}

	pauseGameLoop() {
		var isPaused = this.state.pauseState;

		if(isPaused == true) {
			this.setState({ pauseState: false });
		}
		else if(isPaused == false) {
			this.setState({ pauseState: true });
		}
	}

	clearGameBoard() {
		console.log("main clearboard");
		this.refs.gameBoard.clearGameBoard();
	}

	render() {
		return (
		  <div>
		  	<GenerationCounter currentGeneration={this.state.generation} />
		  	<ControlPanel startGame={this.runGameLoop} pauseGame={this.pauseGameLoop} clearGameBoard={this.clearGameBoard} isRunning={this.state.isRunning} />
		    <GameBoard ref="gameBoard" numOfRows={35} numOfCols={65} />
		  </div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('container'));
