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
    fontSize: '14px',
    padding: '5px',
    borderRadius: '10px',
    backgroundColor: '#d9d9d956',
    backdropFilter: 'blur(45px)',
    border: '2px solid transparent',
    boxShadow: 'none',
    '&:hover': {
      border: '2px solid white',
    },
  }),
  option: (baseStyles) => ({
    ...baseStyles,
    backgroundColor: '#3a3d60',
    fontSize: '14px',
    '&:hover': {
      backgroundColor: '#fff',
      color: '#3a3d60',
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
    color: '#fff',
    opacity: '0.7',
  }),
  input: (baseStyles) => ({
    ...baseStyles,
    color: '#fff',
  }),
  singleValue: (baseStyles) => ({
    ...baseStyles,
    color: '#fff',
  }),
}
