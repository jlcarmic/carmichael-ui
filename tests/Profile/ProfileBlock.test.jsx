import React from 'react'
import { ThemeProvider } from 'styled-components'
import { expect } from 'chai'
import { stub } from 'sinon'
import { mount } from 'enzyme'
import { describe, it } from 'mocha'
import Theme from '../../src/Theme'
import ProfileBlock, {
  Block, Edit, Elements, Header, Link, Title,
} from '../../src/Profile/ProfileBlock'
import Form from '../../src/Forms/Form'
import FormField, { LabelText } from '../../src/Forms/FormField'
import FormInput from '../../src/Forms/FormInput'

describe('Profile - ProfileBlock', () => {
  it('displays an auth form when mode is auth', () => {
    const action = stub()
    const wrapper = mount(
      <ThemeProvider theme={Theme}>
        <ProfileBlock mode="auth" action={action} title="Account Details" />
      </ThemeProvider>,
    )

    expect(wrapper.find(Block)).to.have.length(1)
    expect(wrapper.find(Header)).to.have.length(1)
    expect(wrapper.find(Title).text()).to.equal('Account Details')
    expect(wrapper.find(Edit)).to.have.length(0)
    expect(wrapper.find(Elements)).to.have.length(1)
    expect(wrapper.find(Form)).to.have.length(1)
    expect(wrapper.find(Form).at(0).prop('onSubmit')).to.equal(action)
    expect(wrapper.find(FormField)).to.have.length(2)
    expect(wrapper.find(FormInput)).to.have.length(2)
  })

  it('displays the fields data with no form when mode is display, including link icon when link provided', () => {
    const action = stub()
    const fields = [{
      display: 'jlcarmic@gmail.com',
      name: 'email',
    }, {
      display: 'Not Connected',
      name: 'twitter',
      link: action,
    }, {
      name: 'google',
      value: 'Connected (jlcarmic@gmail.com)',
    }]
    const wrapper = mount(
      <ThemeProvider theme={Theme}>
        <ProfileBlock mode="display" fields={fields} action={action} title="Account Details" />
      </ThemeProvider>,
    )

    expect(wrapper.find(Block)).to.have.length(1)
    expect(wrapper.find(Header)).to.have.length(1)
    expect(wrapper.find(Title).text()).to.equal('Account Details')
    expect(wrapper.find(Edit)).to.have.length(0)
    expect(wrapper.find(Elements)).to.have.length(1)
    expect(wrapper.find(FormField)).to.have.length(3)
    expect(wrapper.find(FormField).at(0).text()).to.contain('email')
    expect(wrapper.find(FormField).at(0).text()).to.contain('jlcarmic@gmail.com')
    expect(wrapper.find(FormField).at(1).text()).to.contain('twitter')
    expect(wrapper.find(FormField).at(1).text()).to.contain('Not Connected')
    expect(wrapper.find(FormField).at(2).text()).to.contain('google')
    expect(wrapper.find(FormField).at(2).text()).to.contain('Connected (jlcarmic@gmail.com)')
    expect(wrapper.find(Link).prop('onClick')).to.equal(action)
  })

  it('displays the edit icon when editable is true', () => {
    const action = stub()
    const wrapper = mount(
      <ThemeProvider theme={Theme}>
        <ProfileBlock mode="display" editable fields={[]} action={action} title="Account Details" />
      </ThemeProvider>,
    )

    expect(wrapper.find(Block)).to.have.length(1)
    expect(wrapper.find(Header)).to.have.length(1)
    expect(wrapper.find(Title).text()).to.equal('Account Details')
    expect(wrapper.find(Edit)).to.have.length(1)
  })

  it('displays an editing form when mode is edit', () => {
    const action = stub()
    const fields = [{
      control: 'text',
      name: 'email',
      onChange: action,
      placeholder: 'Email',
      value: 'jlcarmic@gmail.com',
    }, {
      control: 'password',
      name: 'password',
      onChange: action,
      placeholder: 'Password',
    }]
    const wrapper = mount(
      <ThemeProvider theme={Theme}>
        <ProfileBlock mode="edit" fields={fields} action={action} title="Account Details" />
      </ThemeProvider>,
    )

    expect(wrapper.find(Block)).to.have.length(1)
    expect(wrapper.find(Header)).to.have.length(1)
    expect(wrapper.find(Title).text()).to.equal('Account Details')
    expect(wrapper.find(Edit)).to.have.length(0)
    expect(wrapper.find(Elements)).to.have.length(1)
    expect(wrapper.find(Form)).to.have.length(1)
    expect(wrapper.find(Form).at(0).prop('onSubmit')).to.equal(action)
    expect(wrapper.find(FormField)).to.have.length(3)
    expect(wrapper.find(FormInput)).to.have.length(3)
    expect(wrapper.find(FormInput).at(0).prop('control')).to.equal('text')
    expect(wrapper.find(FormInput).at(1).prop('control')).to.equal('password')
    expect(wrapper.find(FormInput).at(2).prop('control')).to.equal('submit')
  })
})
