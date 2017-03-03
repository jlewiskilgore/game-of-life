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
			console.log(this.props.rowNum + " " + this.props.colNum);
		}
		else {
			this.setState({ isAlive: true });
			console.log("cell is now alive");
			console.log(this.props.rowNum + " " + this.props.colNum);
		}
	}

	render() {

		if(this.state.isAlive == true) {
			return (
				<div id="board-cell">
				  <input className="alive" type="button" onClick={this.toggleAlive} />
				</div>
			);
		}
		else if(this.state.isAlive == false) {
			return (
				<div id="board-cell">
				  <input className="notAlive" type="button" onClick={this.toggleAlive} />
				</div>
			);
		}
	}
}

export default Cell;