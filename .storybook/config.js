import { addDecorator, addParameters, configure } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import mytheme from '../theme'

addDecorator(withInfo({
  inline: true
}))

addParameters({ options: { theme: mytheme } })

const req = require.context('../src', true, /[^/]+\/stories.js$/)

function loadStories() {
  req.keys().forEach((filename) => req(filename))
}

configure(loadStories, module)
