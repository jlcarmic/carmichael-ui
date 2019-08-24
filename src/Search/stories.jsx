import React from 'react'
import { storiesOf } from '@storybook/react' // eslint-disable-line import/no-extraneous-dependencies
import { action } from '@storybook/addon-actions' // eslint-disable-line import/no-extraneous-dependencies
import Search from './Search'

storiesOf('Search', module)
  .add('Search', () => (
    <Search updateSearchTerm={action('search term changed')} />
  ))
