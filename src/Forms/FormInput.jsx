import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

export const Input = styled.input`
  border-color: ${(props) => props.theme.forms.formInput.input.borderColor};
  border-radius: ${(props) => props.theme.forms.formInput.input.borderRadius};
  border-style: ${(props) => props.theme.forms.formInput.input.borderStyle};
  border-width: ${(props) => props.theme.forms.formInput.input.borderWidth};
  font-size: ${(props) => props.theme.forms.formInput.input.fontSize};
  padding: ${(props) => props.theme.forms.formInput.input.padding};
  width: ${(props) => props.theme.forms.formInput.input.width};

  &:focus {
    outline-color: ${(props) => props.theme.forms.formInput.input.focus.outlineColor};
  }

  &::placeholder {
    color: ${(props) => props.theme.forms.formInput.input.placeholder.color};
  }
`

export const RadioGroup = styled.div`
  font-size: ${(props) => props.theme.forms.formInput.radioGroup.fontSize};
  padding: ${(props) => props.theme.forms.formInput.radioGroup.padding};
  text-align: ${(props) => props.theme.forms.formInput.radioGroup.textAlign};
  width: ${(props) => props.theme.forms.formInput.radioGroup.width};
`

export const RadioInput = styled.input`
  margin: ${(props) => props.theme.forms.formInput.radioInput.margin};
`

export const SubmitButton = styled.button`
  background-color: ${(props) => props.theme.forms.formInput.submitButton.backgroundColor};
  border-color: ${(props) => props.theme.forms.formInput.submitButton.borderColor};
  border-radius: ${(props) => props.theme.forms.formInput.submitButton.borderRadius};
  border-style: ${(props) => props.theme.forms.formInput.submitButton.borderStyle};
  border-width: ${(props) => props.theme.forms.formInput.submitButton.borderWidth};
  color: ${(props) => props.theme.forms.formInput.submitButton.color};
  font-size: ${(props) => props.theme.forms.formInput.submitButton.fontSize};
  font-weight: ${(props) => props.theme.forms.formInput.submitButton.fontWeight};
  margin: ${(props) => props.theme.forms.formInput.submitButton.margin};
  outline-color: ${(props) => props.theme.forms.formInput.submitButton.outlineColor};
  outline-style: ${(props) => props.theme.forms.formInput.submitButton.outlineStyle};
  padding: ${(props) => props.theme.forms.formInput.submitButton.padding};

  &:active {
    background-color: ${(props) => props.theme.forms.formInput.submitButton.active.backgroundColor};
    color: ${(props) => props.theme.forms.formInput.submitButton.active.color};
    outline-color: ${(props) => props.theme.forms.formInput.submitButton.active.outlineColor};
    outline-style: ${(props) => props.theme.forms.formInput.submitButton.active.outlineStyle};
  }
`

export const TextArea = styled.textarea`
  border-color: ${(props) => props.theme.forms.formInput.textArea.borderColor};
  border-radius: ${(props) => props.theme.forms.formInput.textArea.borderRadius};
  border-style: ${(props) => props.theme.forms.formInput.textArea.borderStyle};
  border-width: ${(props) => props.theme.forms.formInput.textArea.borderWidth};
  font-size: ${(props) => props.theme.forms.formInput.textArea.fontSize};
  height: ${(props) => props.theme.forms.formInput.textArea.height};
  overflow: ${(props) => props.theme.forms.formInput.textArea.overflow};
  padding: ${(props) => props.theme.forms.formInput.textArea.padding};
  resize: ${(props) => props.theme.forms.formInput.textArea.resize};
  width: ${(props) => props.theme.forms.formInput.textArea.width};

  &:focus {
    outline-color: ${(props) => props.theme.forms.formInput.textArea.focus.outlineColor};
  }

  &::placeholder {
    color: ${(props) => props.theme.forms.formInput.textArea.placeholder.color};
  }
`

const FormInput = (props) => {
  const {
    autoComplete, buttonText, control, field, maxLength, onChange, placeholder, required, value,
  } = props

  switch (control) {
    case 'hidden':
      return (<Input type="hidden" id={field} name={field} defaultValue={value} autoComplete={autoComplete} />)
    case 'password':
      return (
        <Input
          type="password"
          id={field}
          name={field}
          placeholder={placeholder}
          autoComplete={autoComplete}
          required={required}
        />
      )
    case 'radio':
      return (
        <RadioGroup>
          <span>True</span>
          <RadioInput type="radio" id={field} name={field} value="true" onChange={onChange} checked={value} required />
          <span>False</span>
          <RadioInput type="radio" id={field} name={field} value="false" onChange={onChange} checked={!value} required />
        </RadioGroup>
      )
    case 'submit':
      return (<SubmitButton id={field} type="submit">{buttonText}</SubmitButton>)
    case 'text':
      return (
        <Input
          type="text"
          id={field}
          name={field}
          placeholder={placeholder}
          autoComplete={autoComplete}
          required={required}
          onChange={onChange}
          maxLength={maxLength}
          value={value}
        />
      )
    case 'textarea':
      return (
        <TextArea
          id={field}
          name={field}
          required={required}
          onChange={onChange}
          placeholder={placeholder}
          value={value}
        />
      )
    /* istanbul ignore next */
    default:
      return null
  }
}

FormInput.defaultProps = {
  autoComplete: '',
  buttonText: '',
  maxLength: 150,
  onChange: null,
  placeholder: '',
  required: false,
  value: undefined,
}

FormInput.propTypes = {
  /**
   * The type of control to put display
   */
  control: PropTypes.oneOf(['hidden', 'password', 'radio', 'submit', 'text', 'textarea']).isRequired,
  /**
   * The name of the form input field
   */
  field: PropTypes.string.isRequired,
  /**
   * The maximum characters that can be entered into a text input
   */
  maxLength: PropTypes.number,
  /**
   * The value to place into the form input field (true/false for radio buttons)
   */
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  /**
   * The text to be displayed when the field is empty
   */
  placeholder: PropTypes.string,
  /**
   * The value to place in the input's autoComplete attribute
   */
  autoComplete: PropTypes.string,
  /**
   * A boolean representing whether the field should be marked as required
   */
  required: PropTypes.bool,
  /**
   * The function to execute when the field value is changed
   */
  onChange: PropTypes.func,
  /**
   * The text to place on the button when control type is submit
   */
  buttonText: PropTypes.string,
}

export default FormInput
