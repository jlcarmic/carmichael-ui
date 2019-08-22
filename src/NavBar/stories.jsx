import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { action } from '@storybook/addon-actions' // eslint-disable-line import/no-extraneous-dependencies
import { storiesOf } from '@storybook/react' // eslint-disable-line import/no-extraneous-dependencies
import styled from 'styled-components'
import HamburgerMenu from './Hamburger'
import NavItem from './NavItem'

const logo = () => (
  <div style={{ paddingTop: '10px' }}>LOGO</div>
)

const Spacer = styled.div`
  height: 30vh;
  overflow: auto;
  position: relative;
`

storiesOf('NavBar/Hamburger', module)
  .add('Menu Open', () => (
    <BrowserRouter>
      <Spacer>
        <HamburgerMenu
          currentPage="/home"
          isHamburgerOpen
          Logo={logo}
          menuLinks={[{
            text: 'Home',
            href: '/home',
            match: '/home',
            mobile: true,
          }, {
            text: 'Profile',
            href: '/profile',
            match: '/profile',
            mobile: true,
          }]}
          override
          setHamberState={action('close menu')}
        />
      </Spacer>
    </BrowserRouter>
  ))
  .add('Menu Closed', () => (
    <Spacer>
      <HamburgerMenu
        currentPage="/home"
        Logo={logo}
        menuLinks={[]}
        override
        setHamberState={action('open menu')}
      />
    </Spacer>
  ))

storiesOf('NavBar/NavItem', module)
  .add('External Link for Desktop with Divider', () => (
    <NavItem divider href="https://asky.io" target="_blank" text="Asky" />
  ))
  .add('External Link for Desktop without Divider', () => (
    <NavItem href="https://asky.io" target="_blank" text="Asky" />
  ))
  .add('External Link for Mobile with Divider', () => (
    <NavItem mobile divider href="https://asky.io" target="_blank" text="Asky" />
  ))
  .add('External Link for Mobile without Divider', () => (
    <NavItem mobile href="https://asky.io" target="_blank" text="Asky" />
  ))
  .add('Internal Link for Desktop with Divider (currentPage)', () => (
    <BrowserRouter>
      <NavItem divider to="/home" match="/home" text="Home" />
    </BrowserRouter>
  ))
  .add('Internal Link for Desktop without Divider (not currentPage)', () => (
    <BrowserRouter>
      <NavItem to="/home" match="/profile" text="Home" />
    </BrowserRouter>
  ))
  .add('Internal Link for Mobile with Divider (currentPage)', () => (
    <BrowserRouter>
      <NavItem mobile divider to="/home" match="/home" text="Home" />
    </BrowserRouter>
  ))
  .add('Internal Link for Mobile without Divider (not currentPage)', () => (
    <BrowserRouter>
      <NavItem mobile to="/home" match="/profile" text="Home" />
    </BrowserRouter>
  ))
