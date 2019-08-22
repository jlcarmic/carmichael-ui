import React from 'react'
import { ThemeProvider } from 'styled-components'
import { expect } from 'chai'
import { mount } from 'enzyme'
import { describe, it } from 'mocha'
import Divider, { Line, Text } from '../../src/Divider/Divider'
import Theme from '../../src/Theme'

describe('Divider', () => {
  it('displays the divider with the text provided', () => {
    const wrapper = mount(
      <ThemeProvider theme={Theme}>
        <Divider text="this is divider text" />
      </ThemeProvider>,
    )

    expect(wrapper.find(Line)).to.have.length(2)
    expect(wrapper.find(Text).text()).to.equal('this is divider text')
  })
})
