import React from 'react'
import { Menu, Icon} from 'semantic-ui-react'
import { Link } from 'react-router-dom'

export default class MenuExampleSecondary extends React.Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu secondary>
         <Icon name='home' size='big' />
         <Menu.Menu position='left'>
          <Menu.Item
          name='Site Map'
          
        onClick={this.handleItemClick}
        />
        </Menu.Menu>
         <Menu.Menu position='right'>
         <Link to='/login'><Menu.Item
            name='login'
            
            onClick={this.handleItemClick}
          /></Link>
        </Menu.Menu>
      
      </Menu>
    )
  }
}