import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import FontAwesome from 'react-fontawesome'

const Flash = styled.div`
  border-style: solid;
  border-width: 0 0 1px 0;
  font-size: ${(props) => (props.fontSize ? props.fontSize : '14px')};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : '600')};
  margin-top: ${(props) => (props.marginTop ? props.marginTop : '-8px')};
  margin-right: ${(props) => (props.marginRight ? props.marginRight : '-8px')};
  margin-bottom: ${(props) => (props.marginBottom ? props.marginBottom : '0')};
  margin-left: ${(props) => (props.marginLeft ? props.marginLeft : '-8px')};
  padding: 8px;
  text-align: center;
`

const Error = styled(Flash)`
  background-color: #F1DEDE;
  border-color: #A74544;
  color: #A74544;
`

const Info = styled(Flash)`
  background-color: #DAEDF6;
  border-color: #34708E;
  color: #34708E;
`

const Success = styled(Flash)`
  background-color: #DFF0D9;
  border-color: #3E753F;
  color: #3E753F;
`

const Warning = styled(Flash)`
  background-color: #FCF8E4;
  border-color: #896C3F;
  color: #896C3F;
`

const CloseFlash = styled.a`
  float: right;
  font-size: 18px;
  margin-top: -4px;
`

const FlashMessage = ({
  close, fontSize, fontWeight, marginBottom, marginLeft, marginRight, marginTop, message, type,
}) => {
  switch (type) {
    case 'error':
      return (
        <Error
          fontSize={fontSize}
          fontWeight={fontWeight}
          marginBottom={marginBottom}
          marginLeft={marginLeft}
          marginRight={marginRight}
          marginTop={marginTop}
        >
          {message}
          <CloseFlash onClick={close}><FontAwesome name="times" /></CloseFlash>
        </Error>
      )
    case 'info':
      return (
        <Info
          fontSize={fontSize}
          fontWeight={fontWeight}
          marginBottom={marginBottom}
          marginLeft={marginLeft}
          marginRight={marginRight}
          marginTop={marginTop}
        >
          {message}
          <CloseFlash onClick={close}><FontAwesome name="times" /></CloseFlash>
        </Info>
      )
    case 'success':
      return (
        <Success
          fontSize={fontSize}
          fontWeight={fontWeight}
          marginBottom={marginBottom}
          marginLeft={marginLeft}
          marginRight={marginRight}
          marginTop={marginTop}
        >
          {message}
          <CloseFlash onClick={close}><FontAwesome name="times" /></CloseFlash>
        </Success>
      )
    case 'warning':
      return (
        <Warning
          fontSize={fontSize}
          fontWeight={fontWeight}
          marginBottom={marginBottom}
          marginLeft={marginLeft}
          marginRight={marginRight}
          marginTop={marginTop}
        >
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
  fontSize: '14px',
  fontWeight: '600',
  marginTop: '-8px',
  marginRight: '-8px',
  marginBottom: '0',
  marginLeft: '-8px',
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
  /**
   * (Optional): Allows setting of the font size within the flash message. Default: 14px
   */
  fontSize: PropTypes.string,
  /**
   * (Optional): Allows setting of the font weight within the flash message. Default: 600
   */
  fontWeight: PropTypes.string,
  /**
   * (Optional): Allows setting of the top margin for the flash message. Default: -8px
   */
  marginTop: PropTypes.string,
  /**
   * (Optional): Allows setting of the right margin for the flash message. Default: -8px
   */
  marginRight: PropTypes.string,
  /**
   * (Optional): Allows setting of the bottom margin for the flash message. Default: 0
   */
  marginBottom: PropTypes.string,
  /**
   * (Optional): Allows setting of the left margin for the flash message. Default: -8px
   */
  marginLeft: PropTypes.string,
}

export default FlashMessage
