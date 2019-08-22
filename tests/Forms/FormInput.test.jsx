import React from 'react'
import { ThemeProvider } from 'styled-components'
import { expect } from 'chai'
import { mount } from 'enzyme'
import { describe, it } from 'mocha'
import FormInput, {
  Input, RadioGroup, RadioInput, SubmitButton, TextArea,
} from '../../src/Forms/FormInput'
import Theme from '../../src/Theme'

describe('Forms - Input', () => {
  it('displays a set of radio input fields when the control passed in is radio', () => {
    const changeFunction = () => { }
    const wrapper = mount(
      <ThemeProvider theme={Theme}>
        <FormInput control="radio" field="bool" value onChange={changeFunction} />
      </ThemeProvider>,
    )

    expect(wrapper.find(RadioGroup)).to.have.length(1)
    expect(wrapper.find(RadioInput)).to.have.length(2)

    expect(wrapper.find(RadioInput).at(0).prop('type')).to.equal('radio')
    expect(wrapper.find(RadioInput).at(0).prop('id')).to.equal('bool')
    expect(wrapper.find(RadioInput).at(0).prop('name')).to.equal('bool')
    expect(wrapper.find(RadioInput).at(0).prop('value')).to.equal('true')
    expect(wrapper.find(RadioInput).at(0).prop('checked')).to.equal(true)

    expect(wrapper.find(RadioInput).at(1).prop('type')).to.equal('radio')
    expect(wrapper.find(RadioInput).at(1).prop('id')).to.equal('bool')
    expect(wrapper.find(RadioInput).at(1).prop('name')).to.equal('bool')
    expect(wrapper.find(RadioInput).at(1).prop('value')).to.equal('false')
    expect(wrapper.find(RadioInput).at(1).prop('checked')).to.equal(false)
  })

  it('displays a hidden input field when the control passed in is hidden', () => {
    const wrapper = mount(
      <ThemeProvider theme={Theme}>
        <FormInput control="hidden" field="secret" value="mysecret" autoComplete="password" />
      </ThemeProvider>,
    )

    expect(wrapper.find(Input).prop('type')).to.equal('hidden')
    expect(wrapper.find(Input).prop('id')).to.equal('secret')
    expect(wrapper.find(Input).prop('name')).to.equal('secret')
    expect(wrapper.find(Input).prop('defaultValue')).to.equal('mysecret')
    expect(wrapper.find(Input).prop('autoComplete')).to.equal('password')
  })

  it('displays a submit button when the control passed in is submit', () => {
    const wrapper = mount(
      <ThemeProvider theme={Theme}>
        <FormInput control="submit" field="change" buttonText="Change Me" />
      </ThemeProvider>,
    )

    expect(wrapper.find(SubmitButton).prop('type')).to.equal('submit')
    expect(wrapper.find(SubmitButton).prop('id')).to.equal('change')
    expect(wrapper.find(SubmitButton).text()).to.equal('Change Me')
  })

  it('displays a text input field when the control passed in is text', () => {
    const changeFunction = () => { }
    const wrapper = mount(
      <ThemeProvider theme={Theme}>
        <FormInput
          control="text"
          field="email"
          placeholder="mrpuddins@catmail.com"
          autoComplete="email"
          onChange={changeFunction}
          maxLength={25}
          value="jlcarmic@gmail.com"
          required
        />
      </ThemeProvider>,
    )

    expect(wrapper.find(Input).prop('type')).to.equal('text')
    expect(wrapper.find(Input).prop('id')).to.equal('email')
    expect(wrapper.find(Input).prop('name')).to.equal('email')
    expect(wrapper.find(Input).prop('placeholder')).to.equal('mrpuddins@catmail.com')
    expect(wrapper.find(Input).prop('autoComplete')).to.equal('email')
    expect(wrapper.find(Input).prop('required')).to.equal(true)
    expect(wrapper.find(Input).prop('onChange')).to.equal(changeFunction)
    expect(wrapper.find(Input).prop('maxLength')).to.equal(25)
    expect(wrapper.find(Input).prop('value')).to.equal('jlcarmic@gmail.com')
  })

  it('displays a text input field with a maxLength of 150 when the control passed in is text and no maxLength provided', () => {
    const changeFunction = () => { }
    const wrapper = mount(
      <ThemeProvider theme={Theme}>
        <FormInput
          control="text"
          field="email"
          placeholder="mrpuddins@catmail.com"
          autoComplete="email"
          onChange={changeFunction}
          value="jlcarmic@gmail.com"
          required
        />
      </ThemeProvider>,
    )

    expect(wrapper.find(Input).prop('type')).to.equal('text')
    expect(wrapper.find(Input).prop('id')).to.equal('email')
    expect(wrapper.find(Input).prop('name')).to.equal('email')
    expect(wrapper.find(Input).prop('placeholder')).to.equal('mrpuddins@catmail.com')
    expect(wrapper.find(Input).prop('autoComplete')).to.equal('email')
    expect(wrapper.find(Input).prop('required')).to.equal(true)
    expect(wrapper.find(Input).prop('onChange')).to.equal(changeFunction)
    expect(wrapper.find(Input).prop('maxLength')).to.equal(150)
    expect(wrapper.find(Input).prop('value')).to.equal('jlcarmic@gmail.com')
  })

  it('displays a password input field when the control passed in is password', () => {
    const wrapper = mount(
      <ThemeProvider theme={Theme}>
        <FormInput control="password" field="current" placeholder="supersecret" autoComplete="password" required={false} />
      </ThemeProvider>,
    )

    expect(wrapper.find(Input).prop('type')).to.equal('password')
    expect(wrapper.find(Input).prop('name')).to.equal('current')
    expect(wrapper.find(Input).prop('id')).to.equal('current')
    expect(wrapper.find(Input).prop('placeholder')).to.equal('supersecret')
    expect(wrapper.find(Input).prop('autoComplete')).to.equal('password')
    expect(wrapper.find(Input).prop('require')).to.equal(undefined)
  })

  it('displays a textarea input firled when the control passed in is textarea', () => {
    const changeFunction = () => { }
    const wrapper = mount(
      <ThemeProvider theme={Theme}>
        <FormInput control="textarea" field="current" placeholder="supersecret" onChange={changeFunction} required={false} />
      </ThemeProvider>,
    )

    expect(wrapper.find(TextArea)).to.have.length(1)
    expect(wrapper.find(TextArea).prop('name')).to.equal('current')
    expect(wrapper.find(TextArea).prop('id')).to.equal('current')
    expect(wrapper.find(TextArea).prop('placeholder')).to.equal('supersecret')
    expect(wrapper.find(TextArea).prop('require')).to.equal(undefined)
  })
})
