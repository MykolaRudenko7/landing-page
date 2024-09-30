'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useTheme } from 'next-themes'
import { v4 as uuidv4 } from 'uuid'
import cn from 'classnames'
import { useTranslations } from 'next-intl'
import { footerSectionData } from 'data/footerSectionData'
import LinkItem from 'shared/ScrollIdLink'
import styles from 'components/Footer/Footer.module.scss'
import { ThemeNames } from 'types/types'

export default function Footer() {
  const { theme } = useTheme()

  const {
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
          <Link
            about={logoLinkAlt}
            className={styles.logoWrapper}
            href="#"
            role="link"
            tabIndex={0}
          >
            <Image
              alt={imageAlt}
              className={cn(styles.logoImage, {
                [styles.logoImageLight]: theme === ThemeNames.Light,
              })}
              loading="lazy"
              {...logoImage}
            />
          </Link>
          <div className={styles.scrollLinksWrapper}>
            <ul className={styles.scrollLinks} role="list">
              {linksForScroll.map((link, tId) => (
                <li key={uuidv4()} role="listitem">
                  <LinkItem {...link} about={linkForScroll[tId]} title={linkForScroll[tId]} />
                </li>
              ))}
            </ul>
            <ul className={styles.ordinaryLinks} role="list">
              <li className={styles.ordinaryLinkWrapper} role="listitem">
                <Link className={styles.ordinaryLink} href="#" {...privacyPolicyLink}>
                  {privacyPolicy}
                </Link>
              </li>
              <li className={styles.ordinaryLinkWrapper} role="listitem">
                <Link className={styles.ordinaryLink} href="#" {...termsOfServiceLink}>
                  {termsOfService}
                </Link>
              </li>
            </ul>
          </div>
          <div className={styles.servicesLinks}>
            <LinkItem about={servicesLink} id={mainLink.id} title={servicesLink} />
            {links.map(({ tabIndex }, tId) => (
              <Link
                about={servicesLinks[tId]}
                className={styles.serviceLink}
                href="#"
                key={uuidv4()}
                tabIndex={tabIndex}
              >
                {servicesLinks[tId]}
              </Link>
            ))}
          </div>
          <div className={styles.getInTouch}>
            <p className={styles.getInTouchTitle}>{getInTouchTitle}</p>
            <div className={styles.socialsImages}>
              {socials.map(({ href, iconSrc, tabIndex, target }, tId) => (
                <Link
                  about={socialsLinks[tId]}
                  className={styles.socialImageLink}
                  href={{ pathname: href }}
                  key={uuidv4()}
                  tabIndex={tabIndex}
                  target={target}
                >
                  <Image
                    alt={socialsLinks[tId]}
                    className={cn(styles.socialImage, {
                      [styles.socialImageLight]: theme === ThemeNames.Light,
                    })}
                    loading="lazy"
                    {...iconSrc}
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
        <p className={styles.about}>2023@Tech Cats</p>
      </div>
    </div>
  )
}
