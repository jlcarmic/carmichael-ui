import React from 'react'
import { ThemeProvider } from 'styled-components'
import { expect } from 'chai'
import { mount } from 'enzyme'
import { describe, it } from 'mocha'
import Arrow, { NorthArrow, SouthArrow, EastArrow, WestArrow } from '../../src/Arrow/Arrow'
import Theme from '../../src/Theme'

describe('Arrow', () => {
  it('diaplys the NorthArrow when the direction provided is north', () => {
    const wrapper = mount(
      <ThemeProvider theme={Theme}>
        <Arrow direction="north" />
      </ThemeProvider>,
    )

    expect(wrapper.find(NorthArrow)).to.have.length(1)
    expect(wrapper.find(SouthArrow)).to.have.length(0)
    expect(wrapper.find(EastArrow)).to.have.length(0)
    expect(wrapper.find(WestArrow)).to.have.length(0)
  })

  it('diaplys the SouthArrow when the direction provided is south', () => {
    const wrapper = mount(
      <ThemeProvider theme={Theme}>
        <Arrow direction="south" />
      </ThemeProvider>,
    )

    expect(wrapper.find(NorthArrow)).to.have.length(0)
    expect(wrapper.find(SouthArrow)).to.have.length(1)
    expect(wrapper.find(EastArrow)).to.have.length(0)
    expect(wrapper.find(WestArrow)).to.have.length(0)
  })

  it('diaplys the EastArrow when the direction provided is east', () => {
    const wrapper = mount(
      <ThemeProvider theme={Theme}>
        <Arrow direction="east" />
      </ThemeProvider>,
    )

    expect(wrapper.find(NorthArrow)).to.have.length(0)
    expect(wrapper.find(SouthArrow)).to.have.length(0)
    expect(wrapper.find(EastArrow)).to.have.length(1)
    expect(wrapper.find(WestArrow)).to.have.length(0)
  })

  it('diaplys the WestArrow when the direction provided is west', () => {
    const wrapper = mount(
      <ThemeProvider theme={Theme}>
        <Arrow direction="west" />
      </ThemeProvider>,
    )

    expect(wrapper.find(NorthArrow)).to.have.length(0)
    expect(wrapper.find(SouthArrow)).to.have.length(0)
    expect(wrapper.find(EastArrow)).to.have.length(0)
    expect(wrapper.find(WestArrow)).to.have.length(1)
  })
})
