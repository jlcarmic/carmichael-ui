import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const Links = styled.div`
  margin: ${(props) => props.theme.forms.formLink.margin};
  text-align: center;
`

export const Link = styled(NavLink)`
  color: ${(props) => props.theme.forms.formLink.link.color};
  cursor: pointer;
  font-size: ${(props) => props.theme.forms.formLink.link.fontSize};
  text-decoration: ${(props) => props.theme.forms.formLink.link.textDecoration};
`

export const Divider = styled.span`
  color: ${(props) => props.theme.forms.formLink.divider.color};
  font-size: ${(props) => props.theme.forms.formLink.divider.fontSize};
  margin: ${(props) => props.theme.forms.formLink.divider.margin};
`

const FormLinks = ({ links }) => {
  const linkList = links.map(({ to, label }, index) => (
    index < (links.length - 1)
      ? (
        <span key={label}>
          <Link key={label} to={to}>{label}</Link>
          <Divider>|</Divider>
        </span>
      )
      : (<Link key={label} to={to}>{label}</Link>)
  ))

  return (<Links>{linkList}</Links>)
}

FormLinks.propTypes = {
  /**
   * The array of objects representing the links to display (ex. { to: '/home', label: 'Home' })
   */
  links: PropTypes.arrayOf(PropTypes.shape({
    to: PropTypes.string,
    label: PropTypes.string,
  })).isRequired,
}

export default FormLinks
