var React = require('react');
var ReactDOM = require('react-dom');
var Avatar = require('./components/Avatar.js');

var CommentBox = React.createClass({
	getInitialState : function(){  //getInitialState
		return {
			longs : '12346'
		}
	},
	getDefaultProps: function(){
		return {
			propsDate : "这是props---"
		}		
	},
	componentWillMount : function(){
		return console.log('componentWillMount ---- 服务器端和客户端都只调用一次，在初始化渲染执行之前立刻调用。如果在这个方法内调用 setState，render() 将会感知到更新后的 state，将会执行仅一次，尽管 state 改变了。');		
	},
	componentDidMount : function(){
		
		return console.log("componentDidMount -- 在初始化渲染执行之后立刻调用一次，仅客户端有效（服务器端不会调用）。在生命周期中的这个时间点，组件拥有一个 DOM 展现，你可以通过 this.getDOMNode() 来获取相应 DOM 节点。 发送 AJAX 请求，可以在该方法中执行这些操作");
	},
	componentWillReaceiveProps : function(){
		return console.log("在组件接收到新的 props 的时候调用")
		//用此函数可以作为 react 在 prop 传入之后， render() 渲染之前更新 state 的机会。老的 props 可以通过 this.props 获取到。在该函数中调用 this.setState() 将不会引起第二次渲染。
	},
	
	render : function(){
		return(
			<div>
				<h1>{this.props.data}</h1>
				{this.state.longs}
				<div>
					<Avatar propsDate={this.props.propsDate} />
				</div>
			</div>
		)
	}
})
 
var data = "这里是绑定props"
 
ReactDOM.render(
	<CommentBox data = {data} />,
	document.getElementById('app')
);