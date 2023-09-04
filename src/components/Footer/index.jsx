import Link from 'next/link'
import Image from 'next/image'
import { v4 as uuidv4 } from 'uuid'
import { footerSectionData } from 'data/footerSectionData'
import LinkItem from 'components/Navbar/LinkItem'
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
          <Link tabIndex="0" href="#" className={styles.logoWrapper}>
            <Image alt="logo image" src={logoImage} className={styles.logoImage} />
          </Link>
          <div className={styles.scrollLinksWrapper}>
            <ul className={styles.scrollLinks}>
              {linksForScroll.map((link) => (
                <LinkItem tabIndex="0" key={uuidv4()} {...link} />
              ))}
            </ul>
            <ul className={styles.ordinaryLinks}>
              <li className={styles.ordinaryLinkWrapper}>
                <Link tabIndex="0" href="#" className={styles.ordinaryLink}>
                  Privacy Policy
                </Link>
              </li>
              <li className={styles.ordinaryLinkWrapper}>
                <Link tabIndex="0" href="#" className={styles.ordinaryLink}>
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
          <div className={styles.servicesLinks}>
            <LinkItem tabIndex="0" title={mainLink.title} id={mainLink.id} />
            {links.map(({ title, href }) => (
              <Link
                tabIndex="0"
                className={styles.serviceLink}
                key={uuidv4()}
                href={href}
                about="services link"
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
                  tabIndex="0"
                  className={styles.socialImageLink}
                  key={uuidv4()}
                  href={href}
                  about="social"
                >
                  <Image className={styles.socialImage} width={42} alt={alt} src={iconSrc} />
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
