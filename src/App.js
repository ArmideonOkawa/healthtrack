import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './components/Home'

export default class App extends React.Component{

  state = {

    user: {
      id: 0,
      username: ""
    },
    token: ""
  }

  componentDidMount(){

    if (localStorage.token) {

      fetch("http://localhost:4000/persist", {
        headers: {
          "Authorization": `bearer ${localStorage.token}`
        }
      })
      .then(r => r.json())
      .then(this.handleResponse)
     }
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

