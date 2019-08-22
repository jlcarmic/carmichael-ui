import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { storiesOf } from '@storybook/react' // eslint-disable-line import/no-extraneous-dependencies
import { action } from '@storybook/addon-actions' // eslint-disable-line import/no-extraneous-dependencies
import Form from './Form'
import FormField from './FormField'
import FormInput from './FormInput'
import FormLinks from './FormLinks'

const links = [
  { to: '/home', label: 'Home' },
  { to: '/profile', label: 'Profile' },
]

storiesOf('Forms', module)
  .add('Form with all fields', () => (
    <Form name="MyForm" onSubmit={action('form submitted')} title="My Form">
      <FormField centered fieldName="hiddeninput" labelText="Hidden Input">
        <FormInput control="hidden" field="hiddeninput" value="hidden value" />
      </FormField>
      <FormField fieldName="textinputwithvalue" labelText="Text Input with Value">
        <FormInput control="text" field="textinputwithvalue" maxLength={250} value="Provided Value" />
      </FormField>
      <FormField fieldName="textinputwithplaceholder" labelText="Text Input with Placeholder">
        <FormInput control="text" field="textinputwithplaceholder" maxLength={250} placeholder="Provided Placeholder" required />
      </FormField>
      <FormField fieldName="passwordinput" labelText="Password Input">
        <FormInput control="password" field="passwordinput" placeholder="Placeholder" autoComplete="current-password" required />
      </FormField>
      <FormField fieldName="radioinput" labelText="Radio Input">
        <FormInput control="radio" field="radioinput" onChange={action('radio changed')} value />
      </FormField>
      <FormField fieldName="textareainput" labelText="Text Area Input">
        <FormInput control="textarea" field="textareainput" onChange={action('textarea changed')} placeholder="Placeholder text..." />
      </FormField>
      <BrowserRouter>
        <FormLinks links={links} />
      </BrowserRouter>
      <FormInput control="submit" buttonText="Submit Form" />
    </Form>
  ))
