import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const BaseArrow = styled.i`
  border-color: ${(props) => props.theme.arrow.color};
  border-style: solid;
  display: inline-block;
  height: 12px;
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
  width: 12px;
`

export const NorthArrow = styled(BaseArrow)`
  border-width: 3px 0 0 3px;
  margin-top: 5px;
`

export const SouthArrow = styled(BaseArrow)`
  border-width: 0 3px 3px 0;
  margin-top: -5px;
`

export const EastArrow = styled(BaseArrow)`
  border-width: 3px 3px 0 0;
  margin-left: -5px;
`

export const WestArrow = styled(BaseArrow)`
  border-width: 0 0 3px 3px;
  margin-left: 5px;
`

const Arrow = ({ direction }) => {
  switch (direction) {
    case 'north':
      return (<NorthArrow />)
    case 'south':
      return (<SouthArrow />)
    case 'east':
      return (<EastArrow />)
    case 'west':
      return (<WestArrow />)
    /* istanbul ignore next */
    default:
      return null
  }
}

Arrow.propTypes = {
  /**
   * The direction the arrow should point, the point of the arrow will face that direction
   */
  direction: PropTypes.oneOf(['north', 'south', 'east', 'west']),
}

export default Arrow
