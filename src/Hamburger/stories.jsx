import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { action } from '@storybook/addon-actions' // eslint-disable-line import/no-extraneous-dependencies
import { storiesOf } from '@storybook/react' // eslint-disable-line import/no-extraneous-dependencies
import styled from 'styled-components'
import HamburgerMenu from './Hamburger'

const logo = () => (
  <div style={{ paddingTop: '10px' }}>LOGO</div>
)

const Spacer = styled.div`
  height: 30vh;
  overflow: auto;
  position: relative;

  @media only screen and (min-width: 750px) {
    &::before {
      content: 'Browser window must be mobile size to properly display Hamburger'
    }
  }
`

storiesOf('Hamburger', module)
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
          }, {
            text: 'Profile',
            href: '/profile',
            match: '/profile',
          }]}
          setHamberState={action('close menu')}
        />
      </Spacer>
    </BrowserRouter>
  ), { viewport: { defaultViewport: 'iphone6' } })
  .add('Menu Closed', () => (
    <Spacer>
      <HamburgerMenu
        currentPage="/home"
        Logo={logo}
        menuLinks={[]}
        setHamberState={action('open menu')}
      />
    </Spacer>
  ), { viewport: { defaultViewport: 'iphone6' } })
