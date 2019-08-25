import React from 'react'
import { storiesOf } from '@storybook/react' // eslint-disable-line import/no-extraneous-dependencies
import { action } from '@storybook/addon-actions' // eslint-disable-line import/no-extraneous-dependencies
import ProfileBlock from './ProfileBlock'

const submit = (event, message) => {
  event.preventDefault()
  action(message)()
}

storiesOf('Profile', module)
  .add('in auth mode', () => {
    return (<ProfileBlock action={(e) => submit(e, 'password submitted')} fields={[]} mode="auth" title="Account Details" />)
  })
  .add('in display mode', () => {
    const fields = [{
      display: 'jlcarmic@gmail.com',
      name: 'email',
    }, {
      display: '********************',
      name: 'password',
    }, {
      display: 'Connected (jlcarmic@gmail.com)',
      name: 'google',
    }, {
      display: 'Not Connected',
      name: 'twitter',
      link: action('link twitter clicked'),
    }]

    return (<ProfileBlock action={action('edit button clicked')} editable fields={fields} mode="display" title="Account Details" />)
  })
  .add('in edit mode', () => {
    const fields = [{
      control: 'text',
      name: 'email',
      onChange: action('email changed'),
      placeholder: 'Email',
      value: 'jlcarmic@gmail.com',
    }, {
      control: 'password',
      name: 'password',
      onChange: action('password changed'),
      placeholder: 'Password',
    }]

    return (<ProfileBlock action={(e) => submit(e, 'save button clicked')} fields={fields} mode="edit" title="Account Details" />)
  })
