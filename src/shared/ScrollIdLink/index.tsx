'use client'

import { Button as ScrollLink } from 'react-scroll'
import { scrollLinkVariants } from 'shared/ScrollIdLink/scrollLinkVariants'
import { ScrollLinkProps } from 'types/types'

export default function ScrollIdLink({
  id,
  clickOnLink,
  about,
  tabIndex = 0,
  children,
  href,
  role,
  smooth = true,
  duration = 750,
  offset = -60,
  variant = 'default',
  hide = false,
}: ScrollLinkProps) {
  return (
    <ScrollLink
      about={about}
      className={scrollLinkVariants({ variant, hide })}
      duration={duration}
      href={href}
      offset={offset}
      onClick={clickOnLink}
      role={role}
      smooth={smooth}
      tabIndex={tabIndex}
      to={id}
    >
      {children}
    </ScrollLink>
  )
}
