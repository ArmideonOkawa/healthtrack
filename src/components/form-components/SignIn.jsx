import React, { Component } from 'react';
import { Button, Form, Grid, Header,  Message, Segment, Container} from 'semantic-ui-react'
import { Link } from 'react-router-dom'


export default class SignIn extends Component{

    state ={
        username: '',
        password: ''
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
        let {username, password} = this.state
        return(
            <div>
            <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
              <Grid.Column style={{ maxWidth: 450 }}>
                <Header as='h2' color='white' textAlign='center'>
                   Log In 
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
                      fluid icon="lock"
                      iconPosition="left"
                      placeholder="password"
                      type="password"
                      name="password"
                      value={password}
                      onChange={this.handleChange}
                    />
          
                    <Button color='teal' fluid size='large'>
                      Log In
                    </Button>
                  </Segment>
                </Form>
                {
                    this.state.errors ? this.handleErrors() : null
                }
                <Message>
                  Dont have an account yet? <Link to="/register">Register</Link>
                </Message>
              </Grid.Column>
            </Grid>
                </div>

        )
    }
}