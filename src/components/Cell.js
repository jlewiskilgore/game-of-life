import React, { Component } from 'react';

class Cell extends Component {
	constructor(props) {
		super(props);
	}

	toggleAlive() {
		console.log("toggle alive function");
	}

	render() {
		return (
			<div id="board-cell">
			  <input type="button" onClick={this.toggleAlive} />
			</div>
		);
	}
}

export default Cell;