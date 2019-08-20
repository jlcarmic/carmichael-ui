import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import FontAwesome from 'react-fontawesome'

const Container = styled.div`
  height: ${(props) => props.theme.scrollable.mobile.container.height};
  margin: ${(props) => props.theme.scrollable.mobile.container.margin};
  overflow: auto;
  position: relative;

  &::-webkit-scrollbar {
    display: none;
  }

  @media only screen and (min-width: 750px) {
    height: ${(props) => props.theme.scrollable.desktop.container.height};
  }
`

const ScrollToTop = styled.button`
  background-color: ${(props) => props.theme.scrollable.mobile.scrollToTop.backgroundColor};
  border: none;
  bottom: ${(props) => props.theme.scrollable.mobile.scrollToTop.bottom};
  color: ${(props) => props.theme.scrollable.mobile.scrollToTop.color};
  font-size: ${(props) => props.theme.scrollable.mobile.scrollToTop.fontSize};
  font-weight: ${(props) => props.theme.scrollable.mobile.scrollToTop.fontWeight};
  opacity: 0;
  position: absolute;
  right: ${(props) => props.theme.scrollable.mobile.scrollToTop.right};
  transition: opacity .5s ease-out;

  &:focus {
    outline-color: transparent;
    outline-style: none;
  }

  @media only screen and (min-width: 750px) {
    font-size: ${(props) => props.theme.scrollable.desktop.scrollToTop.fontSize};
    right: ${(props) => props.theme.scrollable.desktop.scrollToTop.right};
  }
`

export const scrollToTop = (document) => {
  const container = document.getElementById('container')
  container.scrollTop = 0
}

export const showHideScrollButton = (document) => {
  const container = document.getElementById('container')
  const scrollButton = document.getElementById('scrollButton')

  if (container.scrollTop <= 150) {
    scrollButton.style.opacity = 0
  } else {
    scrollButton.style.opacity = 1
  }
}

const Scrollable = ({ children }) => (
  <>
    <Container id="container" onScroll={() => showHideScrollButton(document)}>
      {children}
    </Container>
    <ScrollToTop id="scrollButton" type="button" onClick={() => scrollToTop(document)}>
      <FontAwesome name="arrow-circle-o-up" />
    </ScrollToTop>
  </>
)

Scrollable.propTypes = {
  /**
   *  The React components to be displayed within the scrollable container
   */
  children: PropTypes.element.isRequired
}

export default Scrollable
