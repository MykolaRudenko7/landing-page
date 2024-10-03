'use client'

import Image from 'next/image'
import { useTheme } from 'next-themes'
import { v4 as uuidv4 } from 'uuid'
import cn from 'classnames'
import { useTranslations } from 'next-intl'
import { footerSectionData } from 'data/footerSectionData'
import { LinkItem } from 'shared/Link'
import ScrollIdLink from 'shared/ScrollIdLink'
import styles from 'components/Footer/Footer.module.scss'
import { ThemeNames } from 'types/types'

export default function Footer() {
  const { theme } = useTheme()

  const {
    logoLink,
    logoImage,
    linksForScroll,
    privacyPolicyLink,
    termsOfServiceLink,
    servicesLinks: { links, mainLink },
    getInTouch: { socials },
  } = footerSectionData

  const tFooter = useTranslations('FooterSection')
  const tImages = useTranslations('Images')
  const tLinks = useTranslations('LinkAlt')

  const imageAlt = tImages('logo')
  const privacyPolicy = tFooter('privacyPolicy')
  const termsOfService = tFooter('termsOfService')
  const getInTouchTitle = tFooter('getInTouch')
  const servicesLink = tFooter(`servicesLink`)
  const logoLinkAlt = tLinks('logo')

  const linkForScroll = linksForScroll.map((_, tId) =>
    tFooter(`linksForScroll.link${tId.toString()}`),
  )
  const servicesLinks = links.map((_, tId) => tFooter(`servicesLinks.link${tId.toString()}`))
  const socialsLinks = socials.map((_, tId) => tFooter(`socialsLinks.link${tId.toString()}`))

  return (
    <div className={styles.footer}>
      <div className={styles.footerWrapper}>
        <div className={styles.footerBlocksWrapper}>
          <LinkItem about={logoLinkAlt} {...logoLink} variant={'logo'}>
            <Image
              alt={imageAlt}
              className={cn(styles.logoImage, {
                [styles.logoImageLight]: theme === ThemeNames.Light,
              })}
              loading="lazy"
              {...logoImage}
            />
          </LinkItem>
          <div className={styles.scrollLinksWrapper}>
            <ul className={styles.scrollLinks} role="list">
              {linksForScroll.map((link, tId) => (
                <li key={uuidv4()} role="listitem">
                  <ScrollIdLink {...link} about={linkForScroll[tId]}>
                    {linkForScroll[tId]}
                  </ScrollIdLink>
                </li>
              ))}
            </ul>
            <ul className={styles.ordinaryLinks} role="list">
              <li className={styles.ordinaryLinkWrapper} role="listitem">
                <LinkItem about={privacyPolicy} {...privacyPolicyLink} variant={'ordinary'}>
                  {privacyPolicy}
                </LinkItem>
              </li>
              <li className={styles.ordinaryLinkWrapper} role="listitem">
                <LinkItem about={termsOfService} {...termsOfServiceLink} variant={'ordinary'}>
                  {termsOfService}
                </LinkItem>
              </li>
            </ul>
          </div>
          <div className={styles.servicesLinks}>
            <ScrollIdLink about={servicesLink} {...mainLink}>
              {servicesLink}
            </ScrollIdLink>
            {links.map((link, tId) => (
              <LinkItem about={servicesLinks[tId]} key={uuidv4()} {...link} variant={'service'}>
                {servicesLinks[tId]}
              </LinkItem>
            ))}
          </div>
          <div className={styles.getInTouch}>
            <p className={styles.getInTouchTitle}>{getInTouchTitle}</p>
            <div className={styles.socialsImages}>
              {socials.map((link, tId) => (
                <LinkItem about={socialsLinks[tId]} key={uuidv4()} {...link} variant={'social'}>
                  <Image
                    alt={socialsLinks[tId]}
                    className={cn(styles.socialImage, {
                      [styles.socialImageLight]: theme === ThemeNames.Light,
                    })}
                    loading="lazy"
                    {...link.iconSrc}
                  />
                </LinkItem>
              ))}
            </div>
          </div>
        </div>
        <p className={styles.about}>2023@Tech Cats</p>
      </div>
    </div>
  )
}
