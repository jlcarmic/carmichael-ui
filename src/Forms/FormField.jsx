import React from 'react'
import PropTypes from 'prop-types'
import styled, { withTheme } from 'styled-components'

export const LeftAlignedFormField = styled.div`
  margin: ${(props) => props.theme.forms.formField.leftAlignedFormField.margin};
  position: relative;
  text-align: left;
`

export const CenteredFormField = styled.div`
  margin: ${(props) => props.theme.forms.formField.centeredFormField.margin};
  position: relative;
  text-align: center;
`

export const LabelText = styled.span`
  font-size: ${(props) => props.theme.forms.formField.labelText.fontSize};
  color: ${(props) => props.theme.forms.formField.labelText.color};
  margin-right: ${(props) => props.theme.forms.formField.labelText.marginRight};
  position: absolute;
  top: ${(props) => props.theme.forms.formField.labelText.top};
`

const FormField = (props) => {
  const {
    children, centered, fieldName, labelText,
  } = props

  const Field = centered ? CenteredFormField : LeftAlignedFormField

  return (
    <Field>
      <label id={`${fieldName}Label`} htmlFor={fieldName}>
        {labelText ? <LabelText>{labelText}</LabelText> : null}
        {children}
      </label>
    </Field>
  )
}

FormField.defaultProps = {
  centered: false,
  labelText: '',
}

FormField.propTypes = {
  /**
   * The input child element to display
   */
  children: PropTypes.element.isRequired,
  /**
   * True if element should be centered, otherwise false
   */
  centered: PropTypes.bool,
  /**
   * The name of the input child element
   */
  fieldName: PropTypes.string.isRequired,
  /**
   * The text to display above the child input element
   */
  labelText: PropTypes.string,
}

export default withTheme(FormField)
