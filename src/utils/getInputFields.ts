import { useId } from 'react'
import { FieldErrors, UseFormRegister } from 'react-hook-form'
import { IFormValues, InputFieldsNames } from 'types/types'

export const getInputFields = (
  register: UseFormRegister<IFormValues>,
  errors: FieldErrors<IFormValues>,
) => [
  {
    id: useId(),
    name: InputFieldsNames.FirstName,
    label: 'Name *',
    placeholder: ' ',
    type: 'text',
    register: register('firstName'),
    error: errors.firstName,
  },
  {
    id: useId(),
    name: InputFieldsNames.LastName,
    label: 'Last Name',
    placeholder: ' ',
    type: 'text',
    register: register(InputFieldsNames.LastName),
    error: errors.lastName,
  },
  {
    id: useId(),
    name: InputFieldsNames.Email,
    label: 'E-mail *',
    placeholder: ' ',
    type: 'email',
    register: register(InputFieldsNames.Email),
    error: errors.email,
  },
]

export const getCheckboxField = {
  checkboxTitle: 'Preferred Contact Methods *',
  checkboxes: [
    { id: 'phone', label: 'Phone Call', value: 'phone' },
    { id: 'whatsapp', label: 'WhatsApp', value: 'whatsapp' },
    { id: 'email', label: 'Email', value: 'email' },
  ],
}
