'use client'

import { Button as ScrollLink } from 'react-scroll'
import styles from 'shared/ScrollIdLink/ScrollIdLink.module.scss'
import { ScrollIdLinkProps } from 'types/types'

export default function ScrollIdLink({ title, id, clickOnLink, about }: ScrollIdLinkProps) {
  return (
    <ScrollLink
      about={about}
      className={styles.link}
      duration={750}
      offset={-60}
      onClick={clickOnLink}
      tabIndex={0}
      to={id}
      smooth
    >
      {title}
    </ScrollLink>
  )
}
