import React from 'react'
import PropTypes from 'prop-types'
import FontAwesome from 'react-fontawesome'
import styled from 'styled-components'

import Form from '../Forms/Form'
import FormField from '../Forms/FormField'
import FormInput from '../Forms/FormInput'

export const Block = styled.div`
  background-color: inherit;
  border-color: ${(props) => props.theme.profile.borderColor};
  border-style: ${(props) => props.theme.profile.borderStyle};
  border-radius: ${(props) => props.theme.profile.borderRadius};
  border-width: ${(props) => props.theme.profile.borderWidth};
  color: ${(props) => props.theme.profile.color};
  display: flex;
  flex-direction: column;
  width: ${(props) => props.theme.profile.width.mobile};

  @media only screen and (min-width: 750px) {
    width: ${(props) => props.theme.profile.width.desktop};
  }
`

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 10px;
`

export const Title = styled.div`
  color: ${(props) => props.theme.profile.title.color};
  font-size: ${(props) => props.theme.profile.title.fontSize};
  font-weight: ${(props) => props.theme.profile.title.fontWeight};
`

export const Edit = styled(FontAwesome)`
  color: ${(props) => props.theme.profile.editIcon.color};
  font-size: ${(props) => props.theme.profile.editIcon.fontSize};
`

export const Elements = styled.div`
  margin: 20px 40px 20px 20px;
`

export const Link = styled(FontAwesome)`
  color: ${(props) => props.theme.profile.link.color};
  font-weight: ${(props) => props.theme.profile.link.fontWeight};
  margin-left: ${(props) => props.theme.profile.link.marginLeft};
`

const ProfileBlock = ({
  action, editable, fields, mode, title,
}) => {
  let elements

  switch (mode) {
    case 'auth':
      elements = () => (
        <Form name="profileAuth" onSubmit={action}>
          <FormField centered fieldName="profileAuthPassword" labelText="Login to Edit Profile">
            <FormInput control="password" field="profileAuthPassword" placeholder="Password" required />
          </FormField>
          <FormField centered fieldName="profileAuthButton">
            <FormInput control="submit" field="profileAuthButton" buttonText="Login" />
          </FormField>
        </Form>
      )
      break;
    case 'display':
      elements = () => fields.map((field) => (
        <FormField key={field.name} fieldName={field.name} labelText={field.name}>
          {field.display || field.value}
          {field.link ? <Link name="link" onClick={field.link} /> : null}
        </FormField>
      ))
      break;
    case 'edit':
      elements = () => (
        <Form name="profileEdit" onSubmit={action}>
          {
            fields.map((field) => (
              <FormField key={field.name} fieldName={field.name} labelText={field.name}>
                <FormInput control={field.control} field={field.name} onChange={field.onChange} placeholder={field.placeholder} value={field.value} />
              </FormField>
            ))
          }
          <FormField centered fieldName="profileEditButton">
            <FormInput control="submit" field="profileEditButton" buttonText="Save" />
          </FormField>
        </Form>
      )
      break;
    /* istanbul ignore next */
    default:
      elements = () => null
  }

  return (
    <Block>
      <Header>
        <Title>{title}</Title>
        {editable ? <Edit name="pencil" onClick={action} /> : null}
      </Header>
      <Elements>
        {elements()}
      </Elements>
    </Block>
  )
}

ProfileBlock.defaultProps = {
  editable: false,
}

ProfileBlock.propTypes = {
  /**
   * The function to execute when the action is take
   * auth: when the password form is submitted
   * display: when the edit button is clicked
   * edit: when the editing form is submitted
   */
  action: PropTypes.func.isRequired,
  /**
   * Controls the display of the edit icon in the top right
   */
  editable: PropTypes.bool,
  /**
   * The fields to display in the profile block
   */
  fields: PropTypes.arrayOf(PropTypes.shape({
    control: PropTypes.string,
    display: PropTypes.string,
    link: PropTypes.func,
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func,
    placeholder: PropTypes.string,
    value: PropTypes.string,
  })),
  /**
   * The mode of the profile block:
   *  auth: displays a password form to unlock the block
   *  display: shows all the values and an edit button
   *  edit: shows a form for editing the fields
   */
  mode: PropTypes.oneOf(['auth', 'display', 'edit']).isRequired,
}

export default ProfileBlock
