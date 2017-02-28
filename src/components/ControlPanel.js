import React, { Component } from 'react';

class ControlPanel extends Component {
	constructor(props) {
		super(props);
	}

	startSimulation() {
		console.log("starting...");
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