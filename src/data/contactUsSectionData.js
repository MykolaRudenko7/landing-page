import contactUsImage from 'images/contactUsSection/contactUs.webp'

export const contactUsSectionData = {
  title: 'Ready to Elevate Your Tech Game?',
  text: 'Connect with TECH COSSACKS and embark on a transformative journey.',
  imageSrs: contactUsImage,
}

export const contactCountryOptions = [
  { value: 'Ukraine', label: 'Ukraine' },
  { value: 'United Kingdom', label: 'United Kingdom' },
  { value: 'United States', label: 'United States' },
  { value: 'Canada', label: 'Canada' },
  { value: 'Australia', label: 'Australia' },
  { value: 'Germany', label: 'Germany' },
  { value: 'France', label: 'France' },
  { value: 'Spain', label: 'Spain' },
  { value: 'Italy', label: 'Italy' },
  { value: 'Japan', label: 'Japan' },
  { value: '', label: 'Write other here...' },
]

export const customStyles = {
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
    opacity: '0.5',
  }),
  input: (baseStyles) => ({
    ...baseStyles,
    color: '#fff',
  }),
  singleValue: (baseStyles) => ({ ...baseStyles, color: '#fff' }),
}
