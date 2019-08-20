import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import FlashMessage from './FlashMessage'

storiesOf('FlashMessage', module)
  .add('type="error"', () => (
    <FlashMessage close={action('closed')} message="This is the displayed text" type="error" />
  ))
  .add('type="info"', () => (
    <FlashMessage close={action('closed')} message="This is the displayed text" type="info" />
  ))
  .add('type="success"', () => (
    <FlashMessage close={action('closed')} message="This is the displayed text" type="success" />
  ))
  .add('type="warning"', () => (
    <FlashMessage close={action('closed')} message="This is the displayed text" type="warning" />
  ))
