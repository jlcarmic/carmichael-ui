import React from 'react'
import PropTypes from 'prop-types'
import styled, { withTheme } from 'styled-components'
import FontAwesome from 'react-fontawesome'

export const Container = styled.div`
  height: ${(props) => props.theme.scrollable.container.height.mobile};
  margin: ${(props) => props.theme.scrollable.container.margin};
  overflow: auto;
  position: relative;

  &::-webkit-scrollbar {
    display: none;
  }

  @media only screen and (min-width: 750px) {
    height: ${(props) => props.theme.scrollable.container.height.desktop};
  }
`

export const ScrollToTop = styled.button`
  background-color: ${(props) => props.theme.scrollable.scrollToTop.backgroundColor};
  border: none;
  bottom: ${(props) => props.theme.scrollable.scrollToTop.bottom};
  color: ${(props) => props.theme.scrollable.scrollToTop.color};
  font-size: ${(props) => props.theme.scrollable.scrollToTop.fontSize.mobile};
  font-weight: ${(props) => props.theme.scrollable.scrollToTop.fontWeight};
  opacity: 0;
  position: absolute;
  right: ${(props) => props.theme.scrollable.scrollToTop.right.mobile};
  transition: opacity .5s ease-out;

  &:focus {
    outline-color: transparent;
    outline-style: none;
  }

  @media only screen and (min-width: 750px) {
    font-size: ${(props) => props.theme.scrollable.scrollToTop.fontSize.desktop};
    right: ${(props) => props.theme.scrollable.scrollToTop.right.desktop};
  }
`

const scrollToTop = (event) => {
  const container = event.target.parentNode.previousSibling
  container.scrollTop = 0
}

const showHideScrollButton = (event) => {
  const container = event.target
  const scrollButton = container.nextSibling

  if (container.scrollTop <= 150) {
    scrollButton.style.opacity = 0
  } else {
    scrollButton.style.opacity = 1
  }
}

const Scrollable = ({ children }) => (
  <>
    <Container id="container" onScroll={(event) => showHideScrollButton(event)}>
      {children}
    </Container>
    <ScrollToTop id="scrollButton" type="button" onClick={(event) => scrollToTop(event)}>
      <FontAwesome name="arrow-circle-o-up" />
    </ScrollToTop>
  </>
)

Scrollable.propTypes = {
  /**
   *  The React components to be displayed within the scrollable container
   */
  children: PropTypes.element.isRequired,
}

export default withTheme(Scrollable)
