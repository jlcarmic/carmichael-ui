import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: ${(props) => props.theme.divider.margin};
  max-width: ${(props) => props.theme.divider.maxWidth};
`

export const Line = styled.hr`
  margin: ${(props) => props.theme.divider.line.margin.mobile};
  width: ${(props) => props.theme.divider.line.width};

  @media only screen and (min-width: 750px) {
    margin: ${(props) => props.theme.divider.line.margin.desktop};
  }
`

export const Text = styled.div`
  font-size: ${(props) => props.theme.divider.text.fontSize.mobile};
  font-weight: ${(props) => props.theme.divider.text.fontWeight};
  margin: ${(props) => props.theme.divider.text.margin};
  width: max-content;
  white-space: nowrap;
  text-align: center;

  @media only screen and (min-width: 750px) {
    font-size: ${(props) => props.theme.divider.text.fontSize.desktop};
  }
`

const Divider = ({ text }) => (
  <Wrapper>
    <Line />
    <Text>{text}</Text>
    <Line />
  </Wrapper>
)

Divider.propTypes = {
  /**
   * The text to display between the lines
   */
  text: PropTypes.string.isRequired,
}

export default Divider
