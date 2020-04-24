import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './components/Home'

export default class App extends React.Component{

  state={
    isLoggedIn: 'false',
    user: {}
  }
  render(){
    console.log(this.state)
  return (
    
    <div className="App">
      <Home loggedInStatus={this.state.isLoggedIn} user={this.state.user} />
    </div>
  );
}
}

