import React from 'react'
import PropTypes from 'prop-types'
import FontAwesome from 'react-fontawesome'
import styled from 'styled-components'

const Flash = styled.div`
  border-style: ${(props) => props.theme.flashMessage.borderStyle};
  border-width: ${(props) => props.theme.flashMessage.borderWidth};
  font-size: ${(props) => props.theme.flashMessage.fontSize};
  font-weight: ${(props) => props.theme.flashMessage.fontWeight};
  margin-top: ${(props) => props.theme.flashMessage.marginTop};
  margin-right: ${(props) => props.theme.flashMessage.marginRight};
  margin-bottom: ${(props) => props.theme.flashMessage.marginBottom};
  margin-left: ${(props) => props.theme.flashMessage.marginLeft};
  padding: ${(props) => props.theme.flashMessage.padding};
  text-align: ${(props) => props.theme.flashMessage.textAlign};
`

const Error = styled(Flash)`
  background-color: ${(props) => props.theme.flashMessage.error.backgroundColor};
  border-color: ${(props) => props.theme.flashMessage.error.borderColor};
  color: ${(props) => props.theme.flashMessage.error.color};
`

const Info = styled(Flash)`
  background-color: ${(props) => props.theme.flashMessage.info.backgroundColor};
  border-color: ${(props) => props.theme.flashMessage.info.borderColor};
  color: ${(props) => props.theme.flashMessage.info.color};
`

const Success = styled(Flash)`
  background-color: ${(props) => props.theme.flashMessage.success.backgroundColor};
  border-color: ${(props) => props.theme.flashMessage.success.borderColor};
  color: ${(props) => props.theme.flashMessage.success.color};
`

const Warning = styled(Flash)`
  background-color: ${(props) => props.theme.flashMessage.warning.backgroundColor};
  border-color: ${(props) => props.theme.flashMessage.warning.borderColor};
  color: ${(props) => props.theme.flashMessage.warning.color};
`

const CloseFlash = styled.a`
  float: right;
  font-size: 18px;
  margin-top: -4px;
`

const FlashMessage = ({ close, message, theme, type }) => {
  switch (type) {
    case 'error':
      return (
        <Error>
          {message}
          <CloseFlash onClick={close}><FontAwesome name="times" /></CloseFlash>
        </Error>
      )
    case 'info':
      return (
        <Info>
          {message}
          <CloseFlash onClick={close}><FontAwesome name="times" /></CloseFlash>
        </Info>
      )
    case 'success':
      return (
        <Success>
          {message}
          <CloseFlash onClick={close}><FontAwesome name="times" /></CloseFlash>
        </Success>
      )
    case 'warning':
      return (
        <Warning>
          {message}
          <CloseFlash onClick={close}><FontAwesome name="times" /></CloseFlash>
        </Warning>
      )
    default:
      return null
  }
}

FlashMessage.defaultProps = {
  close: () => { },
}

FlashMessage.propTypes = {
  /**
   *  The function called when the X icon is clicked
   */
  close: PropTypes.func,
  /**
   * The message displayed in the body of the flash message
   */
  message: PropTypes.string.isRequired,
  /**
   * The type of flash message to display, this impacts the colors
   */
  type: PropTypes.oneOf(['error', 'info', 'success', 'warning']).isRequired,
}

export default FlashMessage
