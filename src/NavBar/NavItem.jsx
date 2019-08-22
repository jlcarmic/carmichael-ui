import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const Divider = styled.span`
  margin: ${(props) => props.theme.navItem.divider.margin};
`

export const DesktopLink = styled(NavLink)`
  color: ${(props) => props.theme.navItem.desktopLink.color};
  text-decoration: none;
`

export const DesktopAnchor = styled.a`
  color: ${(props) => props.theme.navItem.desktopAnchor.color};
  text-decoration: none;
`

export const DesktopInactive = styled.span`
  color: ${(props) => props.theme.navItem.desktopInactive.color};
`

export const MobileLink = styled(NavLink)`
  color: ${(props) => props.theme.navItem.mobileLink.color};
  font-size: ${(props) => props.theme.navItem.mobileLink.fontSize};
  margin-top: ${(props) => props.theme.navItem.mobileLink.marginTop};
  text-decoration: none;
`

export const MobileAnchor = styled.a`
  color: ${(props) => props.theme.navItem.mobileAnchor.color};
  font-size: ${(props) => props.theme.navItem.mobileAnchor.fontSize};
  margin-top: ${(props) => props.theme.navItem.mobileAnchor.marginTop};
  text-decoration: none;
`

export const MobileInactive = styled.span`
  color: ${(props) => props.theme.navItem.mobileInactive.color};
  font-size: ${(props) => props.theme.navItem.mobileInactive.fontSize};
  font-weight: ${(props) => props.theme.navItem.mobileInactive.fontWeight};
  margin-top: ${(props) => props.theme.navItem.mobileInactive.marginTop};
`

/* istanbul ignore next */
const NavItem = ({
  currentPage, divider, mobile, match, href, text, click = '', target = '',
}) => {
  const Link = mobile ? MobileLink : DesktopLink
  const Anchor = mobile ? MobileAnchor : DesktopAnchor
  const Inactive = mobile ? MobileInactive : DesktopInactive

  if (target) {
    return divider
      ? (
        <>
          <Anchor id={text.toLowerCase()} href={href} target={target}>{text}</Anchor>
          <Divider>|</Divider>
        </>
      )
      : <Anchor id={text.toLowerCase()} href={href} target={target}>{text}</Anchor>
  }

  if (click) {
    return divider
      ? (
        <>
          <Anchor id={text.toLowerCase()} onClick={click}>{text}</Anchor>
          <Divider>|</Divider>
        </>
      )
      : <Anchor id={text.toLowerCase()} onClick={click}>{text}</Anchor>
  }

  const item = currentPage === match
    ? <Inactive id={text.toLowerCase()}>{text}</Inactive>
    : <Link id={text.toLowerCase()} to={href}>{text}</Link>

  return divider
    ? (
      <>
        {item}
        <Divider>|</Divider>
      </>
    )
    : item
}

// currentPage, divider, mobile, match, href, text, click = '', target = '',

NavItem.defaultProps = {
  divider: false,
  mobile: false,
  click: null,
  target: '',
  currentPage: '',
  match: '',
  href: '',
}

NavItem.propTypes = {
  /**
   * The relative path of the page being displayed
   */
  currentPage: PropTypes.string,
  /**
   * A boolean representing whether a divider should be displayed after the link
   */
  divider: PropTypes.bool,
  /**
   * A boolean representing whether a desktop or mobile link should be displayed
   */
  mobile: PropTypes.bool,
  /**
   * The string that should be compared to the currentPage to determine
   * if the link should be disabled
   */
  match: PropTypes.string,
  /**
   * The URL the link should direct the user to
   */
  href: PropTypes.string,
  /**
   * The text of the link to be displayed to the user
   */
  text: PropTypes.string.isRequired,
  /**
   * The function to be executed when the link is clicked
   */
  click: PropTypes.func,
  /**
   * The target attribute of the link (ex. _blank)
   */
  target: PropTypes.string,
}

export default NavItem
