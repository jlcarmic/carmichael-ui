import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { expect } from 'chai'
import sinon from 'sinon'
import { mount } from 'enzyme'
import {
  afterEach, beforeEach, describe, it,
} from 'mocha'
import HamburgerMenu, {
  Icon, IconBar, NonMenu, Overlay,
} from '../../src/NavBar/Hamburger'
import NavItem from '../../src/NavBar/NavItem'
import Theme from '../../src/Theme'

const logo = () => (
  <div>LOGO</div>
)

describe('NavBar - Hamburger', () => {
  let sandbox
  let changeStateFunction

  beforeEach(() => {
    sandbox = sinon.createSandbox()
    changeStateFunction = sandbox.stub()
  })

  afterEach(() => {
    sandbox.restore()
  })

  it('displays the hamburger menu with a link when isHamburgerOpen is true', () => {
    const links = [{
      match: '/home', href: '/home', text: 'Home', mobile: true,
    }]

    const wrapper = mount(
      <ThemeProvider theme={Theme}>
        <BrowserRouter>
          <HamburgerMenu
            isHamburgerOpen
            Logo={logo}
            menuLinks={links}
            override
            setHamburgerState={changeStateFunction}
          />
        </BrowserRouter>
      </ThemeProvider>,
    )

    expect(wrapper.find(Overlay)).to.have.length(1)
    expect(wrapper.find(NavItem)).to.have.length(1)
    expect(wrapper.find(Icon).length).to.equal(0)
    expect(wrapper.find(NonMenu).prop('onClick')).to.equal(changeStateFunction)
  })

  it('displays the hamburger icon when isHamburgerOpen is false', () => {
    const wrapper = mount(
      <ThemeProvider theme={Theme}>
        <HamburgerMenu
          isHamburgerOpen={false}
          Logo={logo}
          setHamburgerState={sinon.stub()}
        />
      </ThemeProvider>,
    )

    expect(wrapper.find(Icon).length).to.equal(1)
    expect(wrapper.find(IconBar).length).to.equal(3)
    expect(wrapper.find(Overlay).length).to.equal(0)
  })
})
