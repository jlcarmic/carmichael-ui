import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { expect } from 'chai'
import { mount } from 'enzyme'
import { describe, it } from 'mocha'
import FormLinks, { Links, Link, Divider } from '../../src/Forms/FormLinks'
import Theme from '../../src/Theme'

describe('Forms - FormLinks', () => {
  it('displays the form links passed in with dividers between them when there are multiple', () => {
    const wrapper = mount(
      <ThemeProvider theme={Theme}>
        <BrowserRouter>
          <FormLinks
            links={[
              { to: '/link1', label: 'Link One' },
              { to: '/link2', label: 'Link Two' },
            ]}
          />
        </BrowserRouter>
      </ThemeProvider>,
    )

    expect(wrapper.find(Links)).to.have.length(1)
    expect(wrapper.find(Link)).to.have.length(2)
    expect(wrapper.find(Link).at(0).prop('to')).to.equal('/link1')
    expect(wrapper.find(Link).at(1).prop('to')).to.equal('/link2')
    expect(wrapper.find(Divider)).to.have.length(1)
  })

  it('displays the form links passed in no dividers when there is only one', () => {
    const wrapper = mount(
      <ThemeProvider theme={Theme}>
        <BrowserRouter>
          <FormLinks
            links={[
              { to: '/link1', label: 'Link One' },
            ]}
          />
        </BrowserRouter>
      </ThemeProvider>,
    )

    expect(wrapper.find(Links)).to.have.length(1)
    expect(wrapper.find(Link)).to.have.length(1)
    expect(wrapper.find(Link).at(0).prop('to')).to.equal('/link1')
    expect(wrapper.find(Divider)).to.have.length(0)
  })
})
