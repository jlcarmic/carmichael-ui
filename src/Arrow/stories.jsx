import React from 'react'
import styled from 'styled-components'
import { storiesOf } from '@storybook/react' // eslint-disable-line import/no-extraneous-dependencies

import Arrow from './Arrow'

storiesOf('Arrow', module)
  .add('North', () => (
    <Arrow direction="north" />
  ))
  .add('South', () => (
    <Arrow direction="south" />
  ))
  .add('East', () => (
    <Arrow direction="east" />
  ))
  .add('West', () => (
    <Arrow direction="west" />
  ))
