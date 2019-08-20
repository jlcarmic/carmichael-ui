import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { ThemeProvider } from 'styled-components'
import theme from '../Theme'
import FlashMessage from './FlashMessage'

storiesOf('FlashMessage', module)
  .add('type="error"', () => (
    <ThemeProvider theme={theme}>
      <FlashMessage close={action('closed')} message="This is the displayed text" type="error" />
    </ThemeProvider>
  ))
  .add('type="info"', () => (
    <ThemeProvider theme={theme}>
      <FlashMessage close={action('closed')} message="This is the displayed text" type="info" theme={theme} />
    </ThemeProvider>
  ))
  .add('type="success"', () => (
    <ThemeProvider theme={theme}>
      <FlashMessage close={action('closed')} message="This is the displayed text" type="success" theme={theme} />
    </ThemeProvider>
  ))
  .add('type="warning"', () => (
    <ThemeProvider theme={theme}>
      <FlashMessage close={action('closed')} message="This is the displayed text" type="warning" theme={theme} />
    </ThemeProvider>
  ))
