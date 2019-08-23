import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { expect } from 'chai'
import { mount } from 'enzyme'
import { describe, it } from 'mocha'
import NavItem, {
  Divider, Link, Anchor, Inactive,
} from '../../src/NavItem/NavItem'
import Theme from '../../src/Theme'

describe('NavItem', () => {
  it('displays a span with text when currentPage and match are equal', () => {
    const wrapper = mount(
      <ThemeProvider theme={Theme}>
        <NavItem currentPage="/" match="/" href="/" text="Index" />
      </ThemeProvider>,
    )

    expect(wrapper.find(Link)).to.have.length(0)
    expect(wrapper.find(Anchor)).to.have.length(0)
    expect(wrapper.find(Inactive).html()).to.contain('Index')
    expect(wrapper.find(Divider)).to.have.length(0)
  })

  it('displays inactive and divider when divider parameter is true', () => {
    const wrapper = mount(
      <ThemeProvider theme={Theme}>
        <NavItem currentPage="/" match="/" href="/" text="Index" divider />
      </ThemeProvider>,
    )

    expect(wrapper.find(Link)).to.have.length(0)
    expect(wrapper.find(Anchor)).to.have.length(0)
    expect(wrapper.find(Inactive).html()).to.contain('Index')
    expect(wrapper.find(Divider)).to.have.length(1)
  })

  it('displays a desktop link without a target when currentPage and match are not equal and target is omitted', () => {
    const wrapper = mount(
      <ThemeProvider theme={Theme}>
        <BrowserRouter>
          <NavItem currentPage="somePage" match="otherPage" href="/" text="Link" />
        </BrowserRouter>
      </ThemeProvider>,
    )

    expect(wrapper.find(Anchor)).to.have.length(0)
    expect(wrapper.find(Inactive)).to.have.length(0)
    expect(wrapper.find(Link).html()).to.contain('Link')
    expect(wrapper.find(Link).prop('to')).to.equal('/')
    expect(wrapper.find(Divider)).to.have.length(0)
  })

  it('displays a desktop link with specified target when currentPage and match are not equal and target is provided', () => {
    const wrapper = mount(
      <ThemeProvider theme={Theme}>
        <NavItem currentPage="somePage" match="otherPage" href="/" text="Link" target="_blank" />
      </ThemeProvider>,
    )

    expect(wrapper.find(Link)).to.have.length(0)
    expect(wrapper.find(Inactive)).to.have.length(0)
    expect(wrapper.find(Anchor).html()).to.contain('Link')
    expect(wrapper.find(Anchor).prop('href')).to.equal('/')
    expect(wrapper.find(Anchor).prop('target')).to.equal('_blank')
    expect(wrapper.find(Divider)).to.have.length(0)
  })

  it('displays a link with a divider when divider parameter is true', () => {
    const wrapper = mount(
      <ThemeProvider theme={Theme}>
        <NavItem currentPage="somePage" match="otherPage" href="/" text="Link" target="_blank" divider />
      </ThemeProvider>,
    )

    expect(wrapper.find(Link)).to.have.length(0)
    expect(wrapper.find(Inactive)).to.have.length(0)
    expect(wrapper.find(Anchor).html()).to.contain('Link')
    expect(wrapper.find(Anchor).prop('href')).to.equal('/')
    expect(wrapper.find(Anchor).prop('target')).to.equal('_blank')
    expect(wrapper.find(Divider)).to.have.length(1)
  })

  it('displays a link with specified onClick when currentPage and match are not equal and onClick is provided', () => {
    const clickFunction = () => { }
    const wrapper = mount(
      <ThemeProvider theme={Theme}>
        <NavItem currentPage="somePage" match="otherPage" text="Link" click={clickFunction} />
      </ThemeProvider>,
    )

    expect(wrapper.find(Link)).to.have.length(0)
    expect(wrapper.find(Inactive)).to.have.length(0)
    expect(wrapper.find(Anchor).html()).to.contain('Link')
    expect(wrapper.find(Anchor).prop('onClick')).to.equal(clickFunction)
    expect(wrapper.find(Divider)).to.have.length(0)
  })

  it('displays a link with a divider when divider parameter is true', () => {
    const clickFunction = () => { }
    const wrapper = mount(
      <ThemeProvider theme={Theme}>
        <NavItem currentPage="somePage" match="otherPage" text="Link" click={clickFunction} divider />
      </ThemeProvider>,
    )

    expect(wrapper.find(Link)).to.have.length(0)
    expect(wrapper.find(Inactive)).to.have.length(0)
    expect(wrapper.find(Anchor).html()).to.contain('Link')
    expect(wrapper.find(Anchor).prop('onClick')).to.equal(clickFunction)
    expect(wrapper.find(Divider)).to.have.length(1)
  })
})
