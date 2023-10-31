import { useId } from 'react'
import { validationFormRules } from 'utils/validationFormRules'

export const getInputFields = (register, errors) => {
  const { nameValidation, lastNameValidation, emailValidation } = validationFormRules

  return [
    {
      id: useId(),
      name: 'firstName',
      label: 'Name',
      placeholder: ' ',
      type: 'text',
      register: register('firstName', nameValidation),
      error: errors.firstName,
    },
    {
      id: useId(),
      name: 'lastName',
      label: 'Last Name',
      placeholder: ' ',
      type: 'text',
      register: register('lastName', lastNameValidation),
      error: errors.lastName,
    },
    {
      id: useId(),
      name: 'email',
      label: 'E-mail',
      placeholder: ' ',
      type: 'email',
      register: register('email', emailValidation),
      error: errors.email,
    },
  ]
}
