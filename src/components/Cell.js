import React, { Component } from 'react';

class Cell extends Component {
	constructor(props) {
		super(props);

		this.state = { isAlive: false };

		this.toggleAlive = this.toggleAlive.bind(this);
	}

	toggleAlive() {
		if(this.state.isAlive == true) {
			this.setState({ isAlive: false });
			console.log("cell is now dead");
		}
		else {
			this.setState({ isAlive: true });
			console.log("cell is now alive");
		}
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