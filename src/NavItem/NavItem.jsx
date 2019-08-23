import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const Divider = styled.span`
  margin: ${(props) => props.theme.navItem.divider.margin};
`

export const Anchor = styled.a`
  color: ${(props) => props.theme.navItem.anchor.color.mobile};
  cursor: pointer;
  font-size: ${(props) => props.theme.navItem.anchor.fontSize.mobile};
  margin-top: ${(props) => props.theme.navItem.anchor.marginTop.mobile};
  text-decoration: none;

  @media only screen and (min-width: 750px) {
    color: ${(props) => props.theme.navItem.anchor.color.desktop};
    font-size: ${(props) => props.theme.navItem.anchor.fontSize.desktop};
    margin-top: ${(props) => props.theme.navItem.anchor.marginTop.desktop};
  }
`

export const Inactive = styled.span`
  color: ${(props) => props.theme.navItem.inactive.color.mobile};
  font-size: ${(props) => props.theme.navItem.inactive.fontSize.mobile};
  font-weight: ${(props) => props.theme.navItem.inactive.fontWeight.mobile};
  margin-top: ${(props) => props.theme.navItem.inactive.marginTop.mobile};

  @media only screen and (min-width: 750px) {
    color: ${(props) => props.theme.navItem.inactive.color.desktop};
    font-size: ${(props) => props.theme.navItem.inactive.fontSize.desktop};
    font-weight: ${(props) => props.theme.navItem.inactive.fontWeight.desktop};
    margin-top: ${(props) => props.theme.navItem.inactive.marginTop.desktop};
  }
`

export const Link = styled(NavLink)`
  color: ${(props) => props.theme.navItem.link.color.mobile};
  font-size: ${(props) => props.theme.navItem.link.fontSize.mobile};
  margin-top: ${(props) => props.theme.navItem.link.marginTop.mobile};
  text-decoration: none;

  @media only screen and (min-width: 750px) {
    color: ${(props) => props.theme.navItem.link.color.desktop};
    font-size: ${(props) => props.theme.navItem.link.fontSize.desktop};
    margin-top: ${(props) => props.theme.navItem.link.marginTop.desktop};
  }
`

/* istanbul ignore next */
const NavItem = ({
  currentPage, divider, match, href, text, click = '', target = '',
}) => {
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

  const link = currentPage === match
    ? <Inactive id={text.toLowerCase()}>{text}</Inactive>
    : <Link id={text.toLowerCase()} to={href}>{text}</Link>

  return divider
    ? (
      <>
        {link}
        <Divider>|</Divider>
      </>
    )
    : link
}

NavItem.defaultProps = {
  divider: false,
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
