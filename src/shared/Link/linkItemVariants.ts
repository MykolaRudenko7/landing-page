import { cva } from 'class-variance-authority'
import styles from 'shared/Link/Link.module.scss'

export const linkItemVariants = cva(styles.link, {
  variants: {
    variant: {
      default: styles.link,
      logo: styles.logo,
      languageSwitcher: styles.languageSwitcher,
      button: styles.button,
      ordinary: styles.ordinary,
      service: styles.service,
      social: styles.social,
    },
    active: {
      true: styles.active,
      false: '',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
})
