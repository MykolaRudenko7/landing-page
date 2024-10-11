import Link from 'next/link'
import { linkItemVariants } from 'shared/Link/linkItemVariants'
import { LinkAllProps } from 'types/types'

export function LinkItem({
  href,
  about,
  children,
  tabIndex = 0,
  target,
  variant = 'default',
  active,
  role,
  scroll,
}: LinkAllProps) {
  return (
    <Link
      about={about}
      className={linkItemVariants({ variant, active })}
      href={href}
      role={role}
      scroll={scroll}
      tabIndex={tabIndex}
      target={target}
    >
      {children}
    </Link>
  )
}
