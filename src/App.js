import React, {Component} from 'react';
import './App.css';

class App extends Component {

	add1(){
		this.props.onAdd1()
	}

	render(){
		return (
			<div className="wrapper">
				<div>你点击了{this.props.store}次</div>
				<button onClick={()=>this.add1()}>+1</button>
			</div>
		)
	}
}

export default App;
