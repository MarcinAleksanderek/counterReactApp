var Counter = React.createClass({
	getInitialState: function() {
		return {
			counter: 0
		};
	},

	increment: function() {
		this.setState({
			counter: this.state.counter + 1
		});
	},

	decrement: function() {
		this.setState({
			counter: this.state.counter - 1
		});
	},

	render: function() {
		return React.createElement('li', {},
				React.createElement('span', {},'Counter ' + this.state.counter),
				React.createElement('div', {className: 'spBetween'},
					React.createElement('div', {
						onClick: this.increment,
						className: 'button green'}, 'increment'),
					React.createElement('div', {
						onClick: this.decrement,
						className: 'button red'}, 'decrement'),
					)
			);
	}
});