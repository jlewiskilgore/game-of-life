import React, { Component } from 'react';

class ControlPanel extends Component {
	constructor(props) {
		super(props);

		this.startSimulation = this.startSimulation.bind(this);
		this.pauseSimulation = this.pauseSimulation.bind(this);
		this.clearBoard = this.clearBoard.bind(this);
	}

	startSimulation() {
		this.props.startGame();
		document.getElementById("start-button").disabled = true;
		document.getElementById("pause-button").disabled = false;
	}

	pauseSimulation() {
		this.props.pauseGame();
		document.getElementById("start-button").disabled = false;
		document.getElementById("pause-button").disabled = true;
	}

	clearBoard() {
		this.props.clearGameBoard();
	}

	render() {
		if(this.props.isRunning == true) {
			return (
				<div id="control-panel">
				  <input id="start-button" type="button" value="Start" onClick={this.startSimulation} />
				  <input id="pause-button" type="button" value="Pause" onClick={this.pauseSimulation} />
				  <input id="clear-button" type="button" value="Clear Board" onClick={this.clearBoard} />
				</div>
			);
		}
		else {
			return (
				<div id="control-panel">
				  <input id="start-button" type="button" value="Start" onClick={this.startSimulation} />
				  <input id="pause-button" type="button" value="Pause" onClick={this.pauseSimulation} disabled/>
				  <input id="clear-button" type="button" value="Clear Board" onClick={this.clearBoard} />
				</div>
			);
		}
	}
}

export default ControlPanel;