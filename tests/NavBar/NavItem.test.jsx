import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { expect } from 'chai'
import { mount } from 'enzyme'
import { describe, it } from 'mocha'
import NavItem, {
  Divider, DesktopLink, DesktopAnchor, DesktopInactive, MobileLink, MobileAnchor, MobileInactive,
} from '../../src/NavBar/NavItem'
import Theme from '../../src/Theme'

describe('NavBar - NavItem', () => {
  it('displays a span with text when currentPage and match are equal', () => {
    const wrapper = mount(
      <ThemeProvider theme={Theme}>
        <NavItem currentPage="/" match="/" href="/" text="Index" />
      </ThemeProvider>,
    )

    expect(wrapper.find(DesktopLink)).to.have.length(0)
    expect(wrapper.find(DesktopAnchor)).to.have.length(0)
    expect(wrapper.find(DesktopInactive).html()).to.contain('Index')
    expect(wrapper.find(Divider)).to.have.length(0)
  })

  it('displays inactive and divider when divider parameter is true', () => {
    const wrapper = mount(
      <ThemeProvider theme={Theme}>
        <NavItem currentPage="/" match="/" href="/" text="Index" divider />
      </ThemeProvider>,
    )

    expect(wrapper.find(DesktopLink)).to.have.length(0)
    expect(wrapper.find(DesktopAnchor)).to.have.length(0)
    expect(wrapper.find(DesktopInactive).html()).to.contain('Index')
    expect(wrapper.find(Divider)).to.have.length(1)
  })

  it('displays mobile links when mobile parameter is true', () => {
    const wrapper = mount(
      <ThemeProvider theme={Theme}>
        <NavItem currentPage="/" match="/" href="/" text="Index" mobile />
      </ThemeProvider>,
    )

    expect(wrapper.find(MobileLink)).to.have.length(0)
    expect(wrapper.find(MobileAnchor)).to.have.length(0)
    expect(wrapper.find(MobileInactive).html()).to.contain('Index')
    expect(wrapper.find(Divider)).to.have.length(0)
  })

  it('displays a desktop link without a target when currentPage and match are not equal and target is omitted', () => {
    const wrapper = mount(
      <ThemeProvider theme={Theme}>
        <BrowserRouter>
          <NavItem currentPage="somePage" match="otherPage" href="/" text="Link" />
        </BrowserRouter>
      </ThemeProvider>,
    )

    expect(wrapper.find(DesktopAnchor)).to.have.length(0)
    expect(wrapper.find(DesktopInactive)).to.have.length(0)
    expect(wrapper.find(DesktopLink).html()).to.contain('Link')
    expect(wrapper.find(DesktopLink).prop('to')).to.equal('/')
    expect(wrapper.find(Divider)).to.have.length(0)
  })

  it('displays a mobile link without a target when currentPage and match are not equal, target is omitted and mobile is true', () => {
    const wrapper = mount(
      <ThemeProvider theme={Theme}>
        <BrowserRouter>
          <NavItem currentPage="somePage" match="otherPage" href="/" text="Link" mobile />
        </BrowserRouter>
      </ThemeProvider>,
    )

    expect(wrapper.find(MobileAnchor)).to.have.length(0)
    expect(wrapper.find(MobileInactive)).to.have.length(0)
    expect(wrapper.find(MobileLink).html()).to.contain('Link')
    expect(wrapper.find(MobileLink).prop('to')).to.equal('/')
    expect(wrapper.find(Divider)).to.have.length(0)
  })

  it('displays a desktop link with specified target when currentPage and match are not equal and target is provided', () => {
    const wrapper = mount(
      <ThemeProvider theme={Theme}>
        <NavItem currentPage="somePage" match="otherPage" href="/" text="Link" target="_blank" />
      </ThemeProvider>,
    )

    expect(wrapper.find(DesktopLink)).to.have.length(0)
    expect(wrapper.find(DesktopInactive)).to.have.length(0)
    expect(wrapper.find(DesktopAnchor).html()).to.contain('Link')
    expect(wrapper.find(DesktopAnchor).prop('href')).to.equal('/')
    expect(wrapper.find(DesktopAnchor).prop('target')).to.equal('_blank')
    expect(wrapper.find(Divider)).to.have.length(0)
  })

  it('displays a mobile link with specified target when currentPage and match are not equal, target is provided and mobile is true', () => {
    const wrapper = mount(
      <ThemeProvider theme={Theme}>
        <NavItem currentPage="somePage" match="otherPage" href="/" text="Link" target="_blank" mobile />
      </ThemeProvider>,
    )

    expect(wrapper.find(MobileLink)).to.have.length(0)
    expect(wrapper.find(MobileInactive)).to.have.length(0)
    expect(wrapper.find(MobileAnchor).html()).to.contain('Link')
    expect(wrapper.find(MobileAnchor).prop('href')).to.equal('/')
    expect(wrapper.find(MobileAnchor).prop('target')).to.equal('_blank')
    expect(wrapper.find(Divider)).to.have.length(0)
  })

  it('displays a link with a divider when divider parameter is true', () => {
    const wrapper = mount(
      <ThemeProvider theme={Theme}>
        <NavItem currentPage="somePage" match="otherPage" href="/" text="Link" target="_blank" divider />
      </ThemeProvider>,
    )

    expect(wrapper.find(DesktopLink)).to.have.length(0)
    expect(wrapper.find(DesktopInactive)).to.have.length(0)
    expect(wrapper.find(DesktopAnchor).html()).to.contain('Link')
    expect(wrapper.find(DesktopAnchor).prop('href')).to.equal('/')
    expect(wrapper.find(DesktopAnchor).prop('target')).to.equal('_blank')
    expect(wrapper.find(Divider)).to.have.length(1)
  })

  it('displays a link with specified onClick when currentPage and match are not equal and onClick is provided', () => {
    const clickFunction = () => { }
    const wrapper = mount(
      <ThemeProvider theme={Theme}>
        <NavItem currentPage="somePage" match="otherPage" text="Link" click={clickFunction} />
      </ThemeProvider>,
    )

    expect(wrapper.find(DesktopLink)).to.have.length(0)
    expect(wrapper.find(DesktopInactive)).to.have.length(0)
    expect(wrapper.find(DesktopAnchor).html()).to.contain('Link')
    expect(wrapper.find(DesktopAnchor).prop('onClick')).to.equal(clickFunction)
    expect(wrapper.find(Divider)).to.have.length(0)
  })

  it('displays a link with a divider when divider parameter is true', () => {
    const clickFunction = () => { }
    const wrapper = mount(
      <ThemeProvider theme={Theme}>
        <NavItem currentPage="somePage" match="otherPage" text="Link" click={clickFunction} divider />
      </ThemeProvider>,
    )

    expect(wrapper.find(DesktopLink)).to.have.length(0)
    expect(wrapper.find(DesktopInactive)).to.have.length(0)
    expect(wrapper.find(DesktopAnchor).html()).to.contain('Link')
    expect(wrapper.find(DesktopAnchor).prop('onClick')).to.equal(clickFunction)
    expect(wrapper.find(Divider)).to.have.length(1)
  })
})
