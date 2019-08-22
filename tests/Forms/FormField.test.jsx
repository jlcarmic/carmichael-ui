import React from 'react'
import { ThemeProvider } from 'styled-components'
import { expect } from 'chai'
import { mount } from 'enzyme'
import { describe, it } from 'mocha'
import FormField, { LeftAlignedFormField, CenteredFormField, LabelText } from '../../src/Forms/FormField'
import Theme from '../../src/Theme'

describe('Forms - FormField', () => {
  it('displays the input with a label as left aligned when centered is not passed', () => {
    const wrapper = mount(
      <ThemeProvider theme={Theme}>
        <FormField control="text" fieldName="myfield" labelText="My Field">
          <input type="text" name="myfield" />
        </FormField>
      </ThemeProvider>,
    )

    expect(wrapper.find(LeftAlignedFormField)).to.have.length(1)
    expect(wrapper.find(CenteredFormField)).to.have.length(0)
    expect(wrapper.find(LabelText)).to.have.length(1)
    expect(wrapper.find(LabelText).text()).to.equal('My Field')
    expect(wrapper.find('input')).to.have.length(1)
  })

  it('displays the input with a label as center aligned when centered is passed', () => {
    const wrapper = mount(
      <ThemeProvider theme={Theme}>
        <FormField control="text" fieldName="myfield" labelText="My Field" centered>
          <input type="text" name="myfield" />
        </FormField>
      </ThemeProvider>,
    )

    expect(wrapper.find(CenteredFormField)).to.have.length(1)
    expect(wrapper.find(LeftAlignedFormField)).to.have.length(0)
    expect(wrapper.find(LabelText)).to.have.length(1)
    expect(wrapper.find(LabelText).text()).to.equal('My Field')
    expect(wrapper.find('input')).to.have.length(1)
  })

  it('displays the input with no label when no text is passed', () => {
    const wrapper = mount(
      <ThemeProvider theme={Theme}>
        <FormField control="text" fieldName="myfield" centered>
          <input type="text" name="myfield" />
        </FormField>
      </ThemeProvider>,
    )

    expect(wrapper.find(CenteredFormField)).to.have.length(1)
    expect(wrapper.find(LeftAlignedFormField)).to.have.length(0)
    expect(wrapper.find(LabelText)).to.have.length(0)
    expect(wrapper.find('input')).to.have.length(1)
  })
})
