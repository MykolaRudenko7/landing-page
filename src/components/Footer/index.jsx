'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useTheme } from 'next-themes'
import { v4 as uuidv4 } from 'uuid'
import cn from 'classnames'
import { useTranslations } from 'next-intl'
import { footerSectionData } from 'data/footerSectionData'
import LinkItem from 'shared/LinkItem'
import styles from 'components/Footer/Footer.module.scss'

export default function Footer() {
  const { theme } = useTheme()

  const {
    logoImage,
    linksForScroll,
    servicesLinks: { links, mainLink },
    getInTouch: { socials },
  } = footerSectionData

  const tFooter = useTranslations('FooterSection')

  return (
    <div className={styles.footer}>
      <div className={styles.footerWrapper}>
        <div className={styles.footerBlocksWrapper}>
          <Link className={styles.logoWrapper} href="#" tabIndex="0">
            <Image
              alt="logo image"
              className={cn(styles.logoImage, {
                [styles.logoImageLight]: theme === 'light',
              })}
              loading="lazy"
              src={logoImage}
            />
          </Link>
          <div className={styles.scrollLinksWrapper}>
            <ul className={styles.scrollLinks}>
              {linksForScroll.map((link, tId) => (
                <li key={uuidv4()}>
                  <LinkItem
                    tabIndex="0"
                    {...link}
                    about={tFooter(`linksForScroll.link${tId}`)}
                    title={tFooter(`linksForScroll.link${tId}`)}
                  />
                </li>
              ))}
            </ul>
            <ul className={styles.ordinaryLinks}>
              <li className={styles.ordinaryLinkWrapper}>
                <Link className={styles.ordinaryLink} href="#" tabIndex="0">
                  {tFooter('privacyPolicy')}
                </Link>
              </li>
              <li className={styles.ordinaryLinkWrapper}>
                <Link className={styles.ordinaryLink} href="#" tabIndex="0">
                  {tFooter('termsOfService')}
                </Link>
              </li>
            </ul>
          </div>
          <div className={styles.servicesLinks}>
            <LinkItem id={mainLink.id} tabIndex="0" title={tFooter(`servicesLink`)} />
            {links.map(({ href }, tId) => (
              <Link
                about="services link"
                className={styles.serviceLink}
                href={href}
                key={uuidv4()}
                tabIndex="0"
              >
                {tFooter(`servicesLinks.link${tId}`)}
              </Link>
            ))}
          </div>
          <div className={styles.getInTouch}>
            <p className={styles.getInTouchTitle}>{tFooter('getInTouch')}</p>
            <div className={styles.socialsImages}>
              {socials.map(({ href, iconSrc, alt }) => (
                <Link
                  about="social"
                  className={styles.socialImageLink}
                  href={href}
                  key={uuidv4()}
                  tabIndex="0"
                  target="_blank"
                >
                  <Image
                    alt={alt}
                    className={cn(styles.socialImage, {
                      [styles.socialImageLight]: theme === 'light',
                    })}
                    loading="lazy"
                    src={iconSrc}
                    width={42}
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
