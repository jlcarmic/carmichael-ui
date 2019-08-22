import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import FontAwesome from 'react-fontawesome'
import NavItem from './NavItem'

const Hamburger = styled.div`
  display: block;
  left: ${(props) => props.theme.hamburger.left};
  position: absolute;
  top: ${(props) => props.theme.hamburger.top};

  @media only screen and (min-width: 750px) {
    display: ${(props) => (props.override ? 'block' : 'none')};
  }
`

export const Overlay = styled.div`
  background-color: ${(props) => props.theme.hamburger.overlay.backgroundColor};
  color: ${(props) => props.theme.hamburger.overlay.color};
  height: ${(props) => props.theme.hamburger.overlay.height};
  left: ${(props) => props.theme.hamburger.overlay.left};
  position: absolute;
  top: ${(props) => props.theme.hamburger.overlay.top};
  width: ${(props) => props.theme.hamburger.overlay.width};
  z-index: 2;
`

const Close = styled(FontAwesome)`
  position: absolute;
  right: ${(props) => props.theme.hamburger.close.right};
  top: ${(props) => props.theme.hamburger.close.top};

  &:focus {
    outline-color: transparent;
    outline-style: none;
  }
`

const Content = styled.div`
  flex-direction: column;
  justify-content: center;
  text-align: center;
`

const Links = styled.div`
  border-color: ${(props) => props.theme.hamburger.links.borderColor};
  border-style: ${(props) => props.theme.hamburger.links.borderStyle};
  border-width: ${(props) => props.theme.hamburger.links.borderWidth};
  display: flex;
  flex-direction: column;
  margin-top: ${(props) => props.theme.hamburger.links.marginTop};
  padding-top: ${(props) => props.theme.hamburger.links.paddingTop};
`

export const NonMenu = styled.div`
  height: ${(props) => props.theme.hamburger.nonMenu.height};
  opacity: ${(props) => props.theme.hamburger.nonMenu.opacity};
  position: absolute;
  top: ${(props) => props.theme.hamburger.nonMenu.top};
  width: ${(props) => props.theme.hamburger.nonMenu.width};
  z-index: 1;
`

export const Icon = styled.div`
  &:focus {
    outline-color: transparent;
    outline-style: none;
  }
`

export const IconBar = styled.div`
  background-color: ${(props) => props.theme.hamburger.iconBar.backgroundColor};
  height: ${(props) => props.theme.hamburger.iconBar.height};
  margin-bottom: ${(props) => props.theme.hamburger.iconBar.marginBottom};
  width: ${(props) => props.theme.hamburger.iconBar.width};
`

const HamburgerMenu = (props) => {
  const {
    currentPage, isHamburgerOpen, Logo, menuLinks, override, setHamburgerState,
  } = props

  return (
    <Hamburger override={override}>
      {
        isHamburgerOpen
          ? (
            <span id="hamburgerMenu">
              <Overlay>
                <Close name="times" tabIndex={0} onClick={setHamburgerState} />
                <Content>
                  <Logo />
                  <Links>
                    {
                      menuLinks.map((link) => (
                        <NavItem
                          key={link.match.toLowerCase()}
                          currentPage={currentPage}
                          match={link.match}
                          href={link.href}
                          target={link.target}
                          text={link.text}
                          mobile={link.mobile}
                          click={link.click}
                        />
                      ))
                    }
                  </Links>
                </Content>
              </Overlay>
              <NonMenu role="button" tabIndex={0} onClick={setHamburgerState} onKeyPress={setHamburgerState} />
            </span>
          )
          : (
            <Icon id="hamburgerIcon" role="button" tabIndex={0} onClick={setHamburgerState} onKeyPress={setHamburgerState}>
              <IconBar />
              <IconBar />
              <IconBar />
            </Icon>
          )
      }
    </Hamburger>
  )
}

HamburgerMenu.defaultProps = {
  currentPage: '',
  menuLinks: [],
}

HamburgerMenu.propTypes = {
  /**
   *  The relative path of the page being displayed
   */
  currentPage: PropTypes.string,
  /**
   *  A boolean representing whether the menu is open or closed
   */
  isHamburgerOpen: PropTypes.bool.isRequired,
  /**
   *  The site logo to display at the top of the menu
   */
  Logo: PropTypes.func.isRequired,
  /**
   *  The list of links to be displayed in the menu
   */
  menuLinks: PropTypes.arrayOf(PropTypes.shape({
    match: PropTypes.string,
    href: PropTypes.string,
    target: PropTypes.string,
    text: PropTypes.string,
    mobile: PropTypes.bool,
    click: PropTypes.func,
  })),
  /**
   *  The function for changing the open/closed state of the menu
   */
  setHamburgerState: PropTypes.func.isRequired,
}

export default HamburgerMenu
