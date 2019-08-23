import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { action } from '@storybook/addon-actions' // eslint-disable-line import/no-extraneous-dependencies
import { storiesOf } from '@storybook/react' // eslint-disable-line import/no-extraneous-dependencies
import NavItem from './NavItem'

storiesOf('NavItem', module)
  .add('External Link with Divider', () => (
    <NavItem divider href="https://asky.io" target="_blank" text="Asky" />
  ))
  .add('External Link without Divider', () => (
    <NavItem href="https://asky.io" target="_blank" text="Asky" />
  ))
  .add('Click Function Link with Divider', () => (
    <NavItem divider click={action("link clicked")} text="Asky" />
  ))
  .add('Click Function Link without Divider', () => (
    <NavItem click={action("link clicked")} text="Asky" />
  ))
  .add('Internal Link with Divider (currentPage)', () => (
    <BrowserRouter>
      <NavItem divider to="/home" match="/home" text="Home" />
    </BrowserRouter>
  ))
  .add('Internal Link without Divider (not currentPage)', () => (
    <BrowserRouter>
      <NavItem to="/home" match="/profile" text="Home" />
    </BrowserRouter>
  ))
