import React, { Component } from 'react';

class ControlPanel extends Component {
	constructor(props) {
		super(props);

		this.startSimulation = this.startSimulation.bind(this);
	}

	startSimulation() {
		console.log("starting...");
		this.props.startGame();
	}

	stopSimulation() {
		console.log("stopping...");
	}

	render() {
		return (
			<div id="control-panel">
			  <input type="button" value="Start" onClick={this.startSimulation} />
			  <input type="button" value="Stop" onClick={this.stopSimulation} />
			</div>
		);
	}
}

export default ControlPanel;