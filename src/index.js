import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore} from 'redux';

let stateChanger = (state, action)=>{
	if(state === undefined){
		return {n: 0}
	}else{
		if(action.type === 'add'){
			let newState = {n: state.n + action.payload}
			return newState
		}else{
			return state
		}
	}
}

let store = createStore(stateChanger)
store.subscribe(()=>{
  render()
})

render()

function render(){
  ReactDOM.render(
    <App store={store.getState().n}
      onAdd1={()=>store.dispatch({type: 'add', payload: 1})}
    />, document.getElementById('root'));
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
