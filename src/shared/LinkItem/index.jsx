'use client'

import { Button as ScrollLink } from 'react-scroll'
import styles from 'shared/LinkItem/LinkItem.module.scss'

export default function LinkItem({ title, id, clickOnLink, about }) {
  return (
    <ScrollLink
      about={about}
      className={styles.link}
      duration={750}
      offset={-60}
      onClick={clickOnLink}
      smooth={true}
      tabIndex="0"
      to={id}
    >
      {title}
    </ScrollLink>
  )
}
