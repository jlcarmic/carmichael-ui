import React from 'react'
import { storiesOf } from '@storybook/react' // eslint-disable-line import/no-extraneous-dependencies
import Divider from './Divider'

storiesOf('Divider', module)
  .add('Divider', () => (
    <Divider text="Divider Text" />
  ))
