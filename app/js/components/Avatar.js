var React = require('react');

module.exports = React.createClass({
	render : function(){
		var results = this.props.results;
		/*
		function styleDiv(){
			console.log(this.props.divShow);
			return {display: this.props.divShow ? 'block' : 'none'}
		};
		*/
		var styleDiv={
			display: this.props.divShow ? 'block' : 'none',
		};
		return (	
			<div>
				<h5 onClick={this.props.handleClick}>{this.props.propsDate}</h5>
				<ol style={styleDiv}>
					{results.map(function(result){
						return <li key={result.id}>{result.text}</li>;
					})}
					/*
						map 与 foreach   map不返回对象
					*/
				</ol>
			</div>	
		)
	}	
})

 