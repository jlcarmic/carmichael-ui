import { addDecorator, addParameters, configure } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import React from 'react'
import { ThemeProvider } from 'styled-components'
import Theme from '../src/Theme'
import StorybookTheme from '../StorybookTheme'

const req = require.context('../src', true, /[^/]+\/stories.jsx$/)

function loadStories() {
  req.keys().forEach((filename) => req(filename))
}

addParameters({ options: { theme: StorybookTheme } })

addDecorator(withInfo({
  inline: true
}))

addDecorator((story) => (
  <ThemeProvider theme={Theme}>
    {story()}
  </ThemeProvider>
))

configure(loadStories, module)
