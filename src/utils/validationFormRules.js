export const validationFormRules = {
  nameValidation: {
    required: 'Name is required',
    maxLength: { value: 20, message: 'Maximum length is 20 characters' },
    pattern: {
      value: /^[a-z ,.'-]+$/i,
      message: 'You need to enter only letters.',
    },
  },
  lastNameValidation: {
    required: false,
    maxLength: { value: 20, message: 'Maximum length is 20 characters' },
    pattern: {
      value: /^[a-z ,.'-]+$/i,
      message: 'You need to enter only letters.',
    },
  },
  emailValidation: {
    required: 'Email is required',
    maxLength: { value: 50, message: 'Maximum length is 50 characters' },
    pattern: {
      value: /^\S+@\S+\.\S+$/,
      message: 'Email is not valid',
    },
  },
  countryValidation: {
    required: true,
    pattern: {
      value: /^[^/\\:*?<>]+$/,
      message: 'Input cannot have the following characters: / \\ : * ? < >',
    },
    maxLength: { value: 30, message: 'Maximum length is 30 characters' },
  },
  textAreaValidation: {
    required: false,
    maxLength: { value: 300, message: 'Maximum length is 300 characters' },
  },
  mobileNumberValidation: {
    required: true,
    minLength: { value: 12, message: 'Minimum length is 12 characters' },
  },
}
