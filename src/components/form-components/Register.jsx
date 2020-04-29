import React, { Component } from 'react';
import { Button, Form, Grid, Header,  Message, Segment, Container} from 'semantic-ui-react'
import { Link } from 'react-router-dom'


export default class Register extends Component{

    state ={
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
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.handleSubmit(this.state)
      }

      handleChange = (e) => {
        let {name, value} = e.target
        this.setState({
          [name]: value
        })
      }
      
    render(){
        let {username, email, goal, lifestyle, age, weight, bf_current, bf_goal, waist, arm, thigh, chest, password} = this.state
        return(
            <div>
  <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450 }}>
      <Header as='h2' color='teal' textAlign='center'>
         Register for a new account
      </Header>
      <Form size='large' onSubmit={this.handleSubmit}>
        <Segment stacked>
          <Form.Input 
          fluid icon='user' 
          type="text"
          name="username"
          value={username}
          onChange={this.handleChange}
          iconPosition='left' 
          placeholder='Username' />

          <Form.Input  
          fluid icon='mail'
          type="email"
          name="email"
          value={email}
          onChange={this.handleChange}
          iconPosition='left' 
          placeholder='email' />

          <Form.Input
            fluid icon="lock"
            iconPosition="left"
            placeholder="password"
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
          />
        <Header as='h2' color='blue' textAlign='center'>
         Enter your current stats below:
        </Header>
            
             <Form.Input 
          fluid icon='user' 
          type="text"
          name="goal"
          value={goal}
          onChange={this.handleChange}
          iconPosition='left' 
          placeholder='goal' />

             <Form.Input 
          fluid icon='user' 
          type="text"
          name="lifestyle"
          value={lifestyle}
          onChange={this.handleChange}
          iconPosition='left' 
          placeholder='lifestyle' />

             <Form.Input 
          fluid icon='user' 
          type="text"
          name="age"
          value={age}
          onChange={this.handleChange}
          iconPosition='left' 
          placeholder='age' />

             <Form.Input 
          fluid icon='user' 
          type="text"
          name="weight"
          value={weight}
          onChange={this.handleChange}
          iconPosition='left' 
          placeholder='weight' />

             <Form.Input 
          fluid icon='user' 
          type="text"
          name="bf_current"
          value={bf_current}
          onChange={this.handleChange}
          iconPosition='left' 
          placeholder='bf_current' />

             <Form.Input 
          fluid icon='user' 
          type="text"
          name="bf_goal"
          value={bf_goal}
          onChange={this.handleChange}
          iconPosition='left' 
          placeholder='bf_goal' />

             <Form.Input 
          fluid icon='user' 
          type="text"
          name="waist"
          value={waist}
          onChange={this.handleChange}
          iconPosition='left' 
          placeholder='waist' />

             <Form.Input 
          fluid icon='user' 
          type="text"
          name="arm"
          value={arm}
          onChange={this.handleChange}
          iconPosition='left' 
          placeholder='arm' />

             <Form.Input 
          fluid icon='user' 
          type="text"
          name="thigh"
          value={thigh}
          onChange={this.handleChange}
          iconPosition='left' 
          placeholder='thigh' />

             <Form.Input 
          fluid icon='user' 
          type="text"
          name="chest"
          value={chest}
          onChange={this.handleChange}
          iconPosition='left' 
          placeholder='chest' />

          

          <Button color='teal' fluid size='large'>
            Register
          </Button>
        </Segment>
      </Form>
      {
          this.state.errors ? this.handleErrors() : null
      }
      <Message>
        Already have an account? <Link to="/login">Log in</Link>
      </Message>
    </Grid.Column>
  </Grid>
      </div>

        )
    }
}