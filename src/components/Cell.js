import React, { Component } from 'react';

class Cell extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div id="board-cell">
			  <p>Single Board Cell</p>
			</div>
		);
	}
}

export default Cell;