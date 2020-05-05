import React from 'react';
import './App.css';
import {  Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Dashboard from './components/Dashboard'
import Footer from './components/Footer/Footer'
import SignIn from './components/form-components/SignIn';
import Register from './components/form-components/Register'
import {withRouter} from 'react-router-dom'
import Profile from './components/Profile'
import Nutrition from './components/Nutrition'

class App extends React.Component{

  state = {

    user: {
      username: "",
      password: "",
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
        password: "",
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
    })
    localStorage.clear()
    this.props.history.push("/")
  }


  handleResponse = (resp) => {
    if (!resp.message) {
      localStorage.token = resp.token
        this.setState({
        user: resp.user,
        token: resp.token,
        isLoggedIn: true
      }, () => {
        this.props.history.push("/overview")
      })
    }

  }

  renderHomePage = (routerProps) => {
    if(this.state.token){
      return <SignIn user={this.state.user} token={this.state.token}/>
    }else {
      return <Home />
    }
  }
  
  handleLogIn = (routerProps) => {
    if(routerProps.location.pathname === '/login'){
      return <SignIn formName="Sign In" handleSubmit={this.handleLoginSubmit}/>
    }else if (routerProps.location.pathname === "/register"){
      return <Register userinfo={this.state.user} formName="Register Form" handleSubmit={this.handleRegisterSubmit}/>
    }
  }
  
  renderOverview = (routerProps) => {
    if(routerProps.location.pathname === '/overview'){
      return <Profile userInfo={this.state.user}/>
    }
  }

  renderNutrition = (routerProps) => {
    if(routerProps.location.pathname === '/nutrition'){
      return <Nutrition userInfo={this.state.user}/>
  }
  }


  render(){
    //  console.log(this.state.user.weight)
  return (
    
    <div className="App">
      {!this.state.isLoggedIn ? <Navbar  /> : <Dashboard user={this.state.user} logout={this.logSomeonOut}/>}
   
    <Switch>
    <Route exact path='/' render={Home} />
    <Route exact path='/login' render={this.handleLogIn} />
    <Route exact path='/register' render={this.handleLogIn} />
    <Route exact path='/overview' render={this.renderOverview}/>  
    <Route exact path='/nutrition' render={this.renderNutrition} />
    </Switch>
    
    <Footer />
    </div>
  );
}
}

export default withRouter(App)