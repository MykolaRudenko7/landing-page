import Link from 'next/link'
import Image from 'next/image'
import { v4 as uuidv4 } from 'uuid'
import { footerSectionData } from 'data/footerSectionData'
import LinkItem from 'shared/LinkItem'
import styles from 'components/Footer/Footer.module.scss'

export default function Footer() {
  const {
    logoImage,
    linksForScroll,
    servicesLinks: { links, mainLink },
    getInTouch: { socials, title },
  } = footerSectionData

  return (
    <div className={styles.footer}>
      <div className={styles.footerWrapper}>
        <div className={styles.footerBlocksWrapper}>
          <Link className={styles.logoWrapper} href="#" tabIndex="0">
            <Image alt="logo image" className={styles.logoImage} src={logoImage} priority />
          </Link>
          <div className={styles.scrollLinksWrapper}>
            <ul className={styles.scrollLinks}>
              {linksForScroll.map((link) => (
                <LinkItem key={uuidv4()} tabIndex="0" {...link} />
              ))}
            </ul>
            <ul className={styles.ordinaryLinks}>
              <li className={styles.ordinaryLinkWrapper}>
                <Link className={styles.ordinaryLink} href="#" tabIndex="0">
                  Privacy Policy
                </Link>
              </li>
              <li className={styles.ordinaryLinkWrapper}>
                <Link className={styles.ordinaryLink} href="#" tabIndex="0">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
          <div className={styles.servicesLinks}>
            <LinkItem id={mainLink.id} tabIndex="0" title={mainLink.title} />
            {links.map(({ title, href }) => (
              <Link
                about="services link"
                className={styles.serviceLink}
                href={href}
                key={uuidv4()}
                tabIndex="0"
              >
                {title}
              </Link>
            ))}
          </div>
          <div className={styles.getInTouch}>
            <p className={styles.getInTouchTitle}>{title}</p>
            <div className={styles.socialsImages}>
              {socials.map(({ href, iconSrc, alt }) => (
                <Link
                  about="social"
                  className={styles.socialImageLink}
                  href={href}
                  key={uuidv4()}
                  tabIndex="0"
                >
                  <Image alt={alt} className={styles.socialImage} src={iconSrc} width={42} />
                </Link>
              ))}
            </div>
          </div>
        </div>
        <p className={styles.about}>2023@TECH COSSACKS</p>
      </div>
    </div>
  )
}
