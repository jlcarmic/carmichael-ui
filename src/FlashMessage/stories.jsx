import React from 'react'
import { storiesOf } from '@storybook/react' // eslint-disable-line import/no-extraneous-dependencies
import { action } from '@storybook/addon-actions' // eslint-disable-line import/no-extraneous-dependencies
import FlashMessage from './FlashMessage'

storiesOf('FlashMessage', module)
  .add('type="error"', () => (
    <FlashMessage close={action('close message')} message="This is the displayed text" type="error" />
  ))
  .add('type="info"', () => (
    <FlashMessage close={action('close message')} message="This is the displayed text" type="info" />
  ))
  .add('type="success"', () => (
    <FlashMessage close={action('close message')} message="This is the displayed text" type="success" />
  ))
  .add('type="warning"', () => (
    <FlashMessage close={action('close message')} message="This is the displayed text" type="warning" />
  ))
