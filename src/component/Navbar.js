import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import '../App.css';

export default class MenuExampleTabularOnBottom extends Component {
  state = { activeItem: 'active' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state
    const colors = ['brown']
    return (
      <div className='navheight'>
        <Menu widths={3} color={colors} inverted tabular>
          

            <Menu.Item
                as={Link} to="/"
                name='active'
                active={activeItem === 'active'}
                onClick={this.handleItemClick}
            >
                <h3 className='navtext'>I'M LOST</h3>
            </Menu.Item>
   
          

          
            <Menu.Item
                as={Link} to="/About"
                name='2'
                active={activeItem === '2'}
                onClick={this.handleItemClick}
            >
                <h3 className='navtext'>ABOUT ME</h3>
            </Menu.Item>
          


            <Menu.Item
                as={Link} to="/Contacts"
                name='3'
                active={activeItem === '3'}
                onClick={this.handleItemClick}
            >
                <h3 className='navtext'>EMERGENCY CONTACTS</h3> 
            
            </Menu.Item>
          
        </Menu>
      </div>
    )
  }
}
