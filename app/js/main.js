var React = require('react');
var ReactDOM = require('react-dom');
var Avatar = require('./components/Avatar.js');

var CommentBox = React.createClass({
	getInitialState : function(){  //getInitialState
		return {
			longs : '12346',
			divShow : false
		}
	},
	getDefaultProps: function(){
		return {
			propsDate : "点击显示与隐藏",
			results : [{
				id: 1,
				text:'dp是虚拟像素，在不同的像素密度的设备上会自动适配',
			},{
				id :2 ,
				text : 'drawable- hdpi、drawable- mdpi、drawable-ldpi的区别：'
			},{
				id :3 ,
				text : 'Scale-independent pixels，它是安卓的字体单位，以160PPI屏幕为标准，当字体大小为 100%时， 1sp=1px'
			}]
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
	handleClick : function(){
		console.log("点击了哈哈" + this.state.divShow);
		this.setState({divShow : !this.state.divShow})
	},
	render : function(){
		return(
			<div>
				<h1>{this.props.data}</h1>
				{this.state.longs}
				<div>
					<Avatar handleClick={this.handleClick} divShow={this.state.divShow} results={this.props.results} propsDate={this.props.propsDate} />
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