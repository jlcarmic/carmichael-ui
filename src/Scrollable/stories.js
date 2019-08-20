import React from 'react'
import { storiesOf } from '@storybook/react'
import styled from 'styled-components'
import Scrollable from './Scrollable'

const Child = styled.div`
  height: 45vh;
  position: relative;
`

const Top = styled.div`
  position: absolute;
  top: 0;
`

const Bottom = styled.div`
  bottom: 0;
  position: absolute;
`

const Children = () => (
  <Child>
    <Top>Top (Scroll down)</Top>
    <Bottom>Bottom (Scroll up)</Bottom>
  </Child>
)

storiesOf('Scrollable', module)
  .add('Scrollable', () => (
    <Scrollable>
      <Children />
    </Scrollable>
  ))
