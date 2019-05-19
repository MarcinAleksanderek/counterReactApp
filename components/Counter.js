var Counter = React.createClass({
	getInitialState: function() {
		console.log("send query for PROPS of each counter")
		return {
			counter: 0
		};
	},

	//other lifecycle methods
	getDefaultProps: function() {
		console.log ("get default Props for component, for example for active chat window its initial position (in case of many windows)")
	},

	componentDidMount: function() {
		console.log ("Send some API queries, set State- component will be re-rendered before the browser updates the UI");
		console.log ("setState can be used in this method but with caution- might create performance issues")
	},

	componentDidUpdate: function() {
		console.log ("updating the DOM in response to prop or state changes.");
		console.log ("setState can be used but should check conditions before that- can lead to infinite loop");
		/*if (this.props.userName !== prevProps.userName) {
			this.fetchData(this.props.userName);
		}*/
	},

	componentWillUnmount: function() {
		console.log ("Clean up stuff, cancell API calls, clean cache in storage, remove listeners etc.")
	},

	shouldComponentUpdate: function() {
		console.log ("Block update of componen if its not necessary, only for performance optimisation. Also should return BOOLEAN")
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