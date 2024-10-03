import { cva } from 'class-variance-authority'
import styles from 'shared/ScrollIdLink/ScrollIdLink.module.scss'

export const scrollLinkVariants = cva(styles.link, {
  variants: {
    variant: {
      default: styles.scrollLink,
      navButton: styles.navButton,
      buttonPrimary: styles.buttonPrimary,
      buttonSecondary: styles.buttonSecondary,
    },
    hide: {
      true: styles.hideOnSmallTablet,
      false: '',
    },
  },
  defaultVariants: {
    variant: 'default',
    hide: false,
  },
})
