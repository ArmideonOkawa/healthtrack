import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Dashboard from './components/Dashboard'

export default class App extends React.Component{

  state = {

    user: {
      id: 0,
      username: "",
      email: "",
      goal: "",
      lifestyle: "",
      age: "",
      weight: "",
      bf_current: "",
      bf_goal: "",
      waist: "",
      arm: "",
      thigh: "",
      chest: ""
    },
    token: "",
    isLoggedIn: false
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
  
  handleLoginSubmit = (userInfo) => {
    console.log("Login form has been submitted")

    fetch("http://localhost:4000/login", {
      method: "POST",
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(userInfo)
    })
      .then(r => r.json())
      .then(this.handleResponse)
  }


  handleRegisterSubmit = (userInfo) => {
    console.log("Register form has been submitted")

    fetch("http://localhost:4000/users", {
      method: "POST",
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(userInfo)
    })
      .then(r => r.json())
      .then(this.handleResponse)
  }

  logSomeonOut = () => {
    this.setState({
      user: {
        id: 0,
        username: "",
        email: "",
        goal: "",
        lifestyle: "",
        age: null,
        weight: null,
        bf_current: null,
        bf_goal: null,
        waist:null,
        arm: null,
        thigh: null,
        chest: null
      },
      token: ""
    })
    localStorage.clear()
  }


  handleResponse = (resp) => {
    if (!resp.message) {
      localStorage.token = resp.token
        this.setState({
        user: resp.user,
        token: resp.token
      }, () => {
        this.props.history.push("/overview")
      })
    }
    else {
      alert(resp.message)
    }

  }
  render(){
    console.log(this.state)
  return (
    
    <div className="App">
      {!this.state.isLoggedIn ? <Navbar  /> : <Dashboard user={this.state.username} />}
    </div>
  );
}
}

