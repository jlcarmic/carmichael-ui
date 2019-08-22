import React from 'react'
import { ThemeProvider } from 'styled-components'
import { expect } from 'chai'
import { mount } from 'enzyme'
import { describe, it } from 'mocha'
import Form, { Wrapper, Title } from '../../src/Forms/Form'
import Theme from '../../src/Theme'

describe('Forms - Form', () => {
  it('displays the form with the children inside', () => {
    const submitFunction = () => true
    const wrapper = mount(
      <ThemeProvider theme={Theme}>
        <Form name="myform" onSubmit={submitFunction} title="My Form"><p>CHILD</p></Form>
      </ThemeProvider>,
    )

    expect(wrapper.find(Wrapper)).to.have.length(1)
    expect(wrapper.find(Title).text()).to.equal('My Form')
    expect(wrapper.find('p')).to.have.length(1)
    expect(wrapper.find('p').text()).to.equal('CHILD')
  })

  it('displays the form without a title when none is provided', () => {
    const submitFunction = () => true
    const wrapper = mount(
      <ThemeProvider theme={Theme}>
        <Form name="myform" onSubmit={submitFunction}><p>CHILD</p></Form>
      </ThemeProvider>,
    )

    expect(wrapper.find(Wrapper)).to.have.length(1)
    expect(wrapper.find(Title)).to.have.length(0)
    expect(wrapper.find('p')).to.have.length(1)
    expect(wrapper.find('p').text()).to.equal('CHILD')
  })
})
