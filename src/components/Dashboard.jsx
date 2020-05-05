import React from 'react'
import {  Menu, Icon} from 'semantic-ui-react'
import { Link } from 'react-router-dom'

export default class MenuExampleSecondary extends React.Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state
    console.log(this.props)
    return (
      <Menu secondary>
         <Icon name='home' size='big' />
         <Menu.Item
          name='analytics'
          active={activeItem === 'analytics'}
          onClick={this.handleItemClick}
        />
       <Link to='/nutrition'><Menu.Item
          name='nutrition'
          active={activeItem === 'nutrition'}
          onClick={this.handleItemClick}
        /></Link>
        <Menu.Menu position='right'>
          <Menu.Item
          name={this.props.user.username}
           
          />

           <Menu.Item
            name='logout'
            active={activeItem === 'logout'}
            onClick={this.props.logout}
          />
        </Menu.Menu>
      </Menu>
    )
  }
}

