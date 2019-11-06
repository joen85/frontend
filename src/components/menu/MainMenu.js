import React from 'react'
import {
  Container,
  Menu,
  Icon
} from 'semantic-ui-react'
import style from 'style/style'

/** [메뉴 컴포넌트] */

const MainMenu = ({activeItem, handleItemClick}) => (
  <Container style={style.container_mainmenu}>
    <Menu icon='labeled' stackable widths={5}>
      <Menu.Item 
        name='home'
        active={activeItem === 'home'}
        onClick={handleItemClick}
        data-url='/'>
        <Icon name='home' />
        HOME
      </Menu.Item>

      <Menu.Item 
        name='search'
        active={activeItem === 'search'}
        onClick={handleItemClick}
        data-url='/search'>
        <Icon name='search' />
        SEARCH
      </Menu.Item>

       <Menu.Item 
        name='map'
        active={activeItem === 'map'}
        onClick={handleItemClick}
        data-url='/'>
        <Icon name='map' />
        MAP
      </Menu.Item>

      <Menu.Item 
        name='mylist'
        active={activeItem === 'mylist'}
        onClick={handleItemClick}
        data-url='/mylist'>
        <Icon name='paw' />
        MY LIST
      </Menu.Item>     

      <Menu.Item 
        name='more'
        active={activeItem === 'list'}
        onClick={handleItemClick}
        data-url='/list'>
        <Icon name='list' />
        MORE
      </Menu.Item>       
    </Menu>
  </Container> 
)

export default MainMenu