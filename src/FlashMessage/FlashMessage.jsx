import React from 'react'
import PropTypes from 'prop-types'
import FontAwesome from 'react-fontawesome'
import styled, { withTheme } from 'styled-components'

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

export const ErrorFlash = styled(Flash)`
  background-color: ${(props) => props.theme.flashMessage.error.backgroundColor};
  border-color: ${(props) => props.theme.flashMessage.error.borderColor};
  color: ${(props) => props.theme.flashMessage.error.color};
`

export const InfoFlash = styled(Flash)`
  background-color: ${(props) => props.theme.flashMessage.info.backgroundColor};
  border-color: ${(props) => props.theme.flashMessage.info.borderColor};
  color: ${(props) => props.theme.flashMessage.info.color};
`

export const SuccessFlash = styled(Flash)`
  background-color: ${(props) => props.theme.flashMessage.success.backgroundColor};
  border-color: ${(props) => props.theme.flashMessage.success.borderColor};
  color: ${(props) => props.theme.flashMessage.success.color};
`

export const WarningFlash = styled(Flash)`
  background-color: ${(props) => props.theme.flashMessage.warning.backgroundColor};
  border-color: ${(props) => props.theme.flashMessage.warning.borderColor};
  color: ${(props) => props.theme.flashMessage.warning.color};
`

export const CloseFlash = styled.a`
  float: right;
  font-size: 18px;
  margin-top: -4px;
`

const FlashMessage = ({ close, message, type }) => {
  switch (type) {
    case 'error':
      return (
        <ErrorFlash>
          {message}
          <CloseFlash onClick={close}><FontAwesome name="times" /></CloseFlash>
        </ErrorFlash>
      )
    case 'info':
      return (
        <InfoFlash>
          {message}
          <CloseFlash onClick={close}><FontAwesome name="times" /></CloseFlash>
        </InfoFlash>
      )
    case 'success':
      return (
        <SuccessFlash>
          {message}
          <CloseFlash onClick={close}><FontAwesome name="times" /></CloseFlash>
        </SuccessFlash>
      )
    case 'warning':
      return (
        <WarningFlash>
          {message}
          <CloseFlash onClick={close}><FontAwesome name="times" /></CloseFlash>
        </WarningFlash>
      )
    /* istanbul ignore next */
    default:
      return null
  }
}

FlashMessage.defaultProps = {
  close: null,
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

export default withTheme(FlashMessage)
