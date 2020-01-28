import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './Button';

class App extends React.Component {
	constructor(){
		super()
		this.state = {
		
		}
	}

	render(){
		return (
			<div className="wrapper">
				<Button value="点我呀" />
				<Button value="快点我!" />
				<Button value="舒服了" />
			</div>
		)
	}
}

export default App;
