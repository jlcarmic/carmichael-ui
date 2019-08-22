import React from 'react'
import { ThemeProvider } from 'styled-components'
import sinon from 'sinon'
import { expect } from 'chai'
import { mount } from 'enzyme'
import {
  afterEach, beforeEach, describe, it,
} from 'mocha'
import FlashMessage, {
  CloseFlash, ErrorFlash, InfoFlash, SuccessFlash, WarningFlash,
} from '../../src/FlashMessage/FlashMessage'
import Theme from '../../src/Theme'

describe('FlashMessage', () => {
  let sandbox
  let stubbedClose

  beforeEach(() => {
    sandbox = sinon.createSandbox()
    stubbedClose = sandbox.stub()
  })

  afterEach(() => {
    sandbox.restore()
  })

  it('displays the success flash message with a close button', () => {
    const wrapper = mount(
      <ThemeProvider theme={Theme}>
        <FlashMessage type="success" message="this is a message" close={stubbedClose} />
      </ThemeProvider>,
    )

    expect(wrapper.find(SuccessFlash)).to.have.length(1)
    expect(wrapper.find(InfoFlash)).to.have.length(0)
    expect(wrapper.find(WarningFlash)).to.have.length(0)
    expect(wrapper.find(ErrorFlash)).to.have.length(0)

    expect(wrapper.find(SuccessFlash).text()).to.equal('this is a message')

    expect(wrapper.find(CloseFlash)).to.have.length(1)
    wrapper.find(CloseFlash).simulate('click')
    expect(stubbedClose.callCount).to.equal(1)
  })

  it('displays the warning flash message with a close button', () => {
    const wrapper = mount(
      <ThemeProvider theme={Theme}>
        <FlashMessage type="warning" message="this is a message" close={stubbedClose} />
      </ThemeProvider>,
    )

    expect(wrapper.find(WarningFlash)).to.have.length(1)
    expect(wrapper.find(SuccessFlash)).to.have.length(0)
    expect(wrapper.find(InfoFlash)).to.have.length(0)
    expect(wrapper.find(ErrorFlash)).to.have.length(0)

    expect(wrapper.find(WarningFlash).text()).to.equal('this is a message')

    expect(wrapper.find(CloseFlash)).to.have.length(1)
    wrapper.find(CloseFlash).simulate('click')
    expect(stubbedClose.callCount).to.equal(1)
  })

  it('displays the info flash message with a close button', () => {
    const wrapper = mount(
      <ThemeProvider theme={Theme}>
        <FlashMessage type="info" message="this is a message" close={stubbedClose} />
      </ThemeProvider>,
    )

    expect(wrapper.find(InfoFlash)).to.have.length(1)
    expect(wrapper.find(SuccessFlash)).to.have.length(0)
    expect(wrapper.find(WarningFlash)).to.have.length(0)
    expect(wrapper.find(ErrorFlash)).to.have.length(0)

    expect(wrapper.find(InfoFlash).text()).to.equal('this is a message')

    expect(wrapper.find(CloseFlash)).to.have.length(1)
    wrapper.find(CloseFlash).simulate('click')
    expect(stubbedClose.callCount).to.equal(1)
  })

  it('displays the error flash message with a close button', () => {
    const wrapper = mount(
      <ThemeProvider theme={Theme}>
        <FlashMessage type="error" message="this is a message" close={stubbedClose} />
      </ThemeProvider>,
    )

    expect(wrapper.find(ErrorFlash)).to.have.length(1)
    expect(wrapper.find(SuccessFlash)).to.have.length(0)
    expect(wrapper.find(InfoFlash)).to.have.length(0)
    expect(wrapper.find(WarningFlash)).to.have.length(0)

    expect(wrapper.find(ErrorFlash).text()).to.equal('this is a message')

    expect(wrapper.find(CloseFlash)).to.have.length(1)
    wrapper.find(CloseFlash).simulate('click')
    expect(stubbedClose.callCount).to.equal(1)
  })
})
