import React, { Component } from 'react';

class ControlPanel extends Component {
	constructor(props) {
		super(props);

		this.startSimulation = this.startSimulation.bind(this);
		this.pauseSimulation = this.pauseSimulation.bind(this);
	}

	startSimulation() {
		console.log("starting...");
		this.props.startGame();
	}

	pauseSimulation() {
		console.log("pausing...");
		this.props.pauseGame();
	}

	render() {
		return (
			<div id="control-panel">
			  <input type="button" value="Start" onClick={this.startSimulation} />
			  <input type="button" value="Pause" onClick={this.pauseSimulation} />
			</div>
		);
	}
}

export default ControlPanel;