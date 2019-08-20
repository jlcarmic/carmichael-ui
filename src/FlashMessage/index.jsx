import React from 'react'
import styled from 'styled-components'
import FontAwesome from 'react-fontawesome'

const Flash = styled.div`
  border-style: solid;
  border-width: 0 0 1px 0;
  font-size: 14px;
  font-weight: 600;
  margin: -15px -8px 0;
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

export default ({ type, message, close }) => {
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
