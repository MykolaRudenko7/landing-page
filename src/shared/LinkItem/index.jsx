'use client'

import { Link } from 'react-scroll'
import styles from 'shared/LinkItem/LinkItem.module.scss'

export default function LinkItem({ title, id, handleMenuToggle }) {
  return (
    <Link
      className={styles.link}
      duration={500}
      offset={-10}
      onClick={handleMenuToggle}
      smooth={true}
      tabIndex="0"
      to={id}
    >
      {title}
    </Link>
  )
}