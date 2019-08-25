import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: ${(props) => props.theme.forms.form.flexDirection};
  justify-content: ${(props) => props.theme.forms.form.justifyContent};
  margin: ${(props) => props.theme.forms.form.margin};
  max-width: ${(props) => props.theme.forms.form.maxWidth};
`

export const Title = styled.div`
  font-size: ${(props) => props.theme.forms.form.title.fontSize};
  font-weight: ${(props) => props.theme.forms.form.title.fontWeight};
  margin: ${(props) => props.theme.forms.form.title.margin};
`

const Form = (props) => {
  const {
    children, name, onSubmit, title,
  } = props

  return (
    <Wrapper>
      {title ? <Title>{title}</Title> : null}
      <form name={name} onSubmit={onSubmit}>{children}</form>
    </Wrapper>
  )
}

Form.defaultProps = {
  name: '',
  onSubmit: null,
  title: null,
}

Form.propTypes = {
  /**
   * The elements to display in the form
   */
  children: PropTypes.node.isRequired,
  /**
   * The name attribute of the form
   */
  name: PropTypes.string,
  /**
   * The method to execute when the form is submitted
   */
  onSubmit: PropTypes.func,
  /**
   * The title to display at the top of the form
   */
  title: PropTypes.string,
}

export default Form
