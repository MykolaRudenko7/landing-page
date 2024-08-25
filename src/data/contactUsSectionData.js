export const contactCountryOptions = [
  { value: 'Ukraine', label: 'Ukraine', code: 'ua' },
  { value: 'United Kingdom', label: 'United Kingdom', code: 'gb' },
  { value: 'United States', label: 'United States', code: 'us' },
  { value: 'United Arab Emirates', label: 'United Arab Emirates', code: 'ae' },
  { value: 'Saudi Arabia', label: 'Saudi Arabia', code: 'sa' },
  { value: 'Europe', label: 'Europe', code: '' },
  { value: '', label: 'Write other here...', code: '' },
]

export const initialContactMethods = {
  phoneCall: false,
  whatsapp: false,
  email: false,
}
export const customStylesMarkets = {
  control: (baseStyles) => ({
    ...baseStyles,
    fontSize: '1.4rem',
    padding: '0.5rem',
    borderRadius: '1rem',
    backgroundColor: 'var(--background-service-card)',
    backdropFilter: 'blur(4.5rem)',
    border: '0.2rem solid transparent',
    boxShadow: '0 0.1rem 0.4rem 0.2rem rgba(0, 0, 0, 0.25)',
    '&:hover': {
      border: '0.2rem solid var(--text-color)',
    },
  }),
  option: (baseStyles) => ({
    ...baseStyles,
    backgroundColor: 'var(--secondary-color)',
    fontSize: '1.4rem',
    color: 'var(--text-color)',
    '&:hover': {
      backgroundColor: 'var(--text-color)',
      color: 'var(--secondary-color)',
    },
  }),
  menu: (baseStyles) => ({
    ...baseStyles,
    zIndex: '5',
  }),
  menuList: (baseStyles) => ({
    ...baseStyles,
    padding: 0,
  }),
  placeholder: (baseStyles) => ({
    ...baseStyles,
    color: 'var(--text-color)',
    opacity: '0.7',
  }),
  input: (baseStyles) => ({
    ...baseStyles,
    color: 'var(--text-color)',
  }),
  singleValue: (baseStyles) => ({
    ...baseStyles,
    color: 'var(--text-color)',
  }),
}
