import React, { Component } from 'react';

class GenerationCounter extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div id="generation-counter">
			  <p>Current Generation: {this.props.currentGeneration} </p>
			</div>
		);
	}
}

export default GenerationCounter;