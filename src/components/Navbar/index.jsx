'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Link as ScrollLink } from 'react-scroll'
import Image from 'next/image'
import { v4 as uuidv4 } from 'uuid'
import cn from 'classnames'
import { useTranslations } from 'next-intl'
import { navbarData } from 'data/navbarLinksData'
import { scrollSectionId } from 'data/scrollSectionId'
import LinkItem from 'shared/LinkItem'
import styles from 'components/Navbar/Navbar.module.scss'

export default function Navbar() {
  const { contact } = scrollSectionId
  const { links, logoImage } = navbarData
  const pathname = usePathname()
  const [isNavbarMenuOpen, setIsNavbarMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const tNavbar = useTranslations('NavbarLinks')
  const tButton = useTranslations('Buttons')
  const tLanguageSwitcher = useTranslations('NavbarLanguageSwitcher')

  const handleMenuToggle = () => {
    setIsNavbarMenuOpen(!isNavbarMenuOpen)
    document.body.classList.toggle('scrollLock')
  }

  const clickOnLink = () => {
    setIsNavbarMenuOpen(false)
    document.body.classList.remove('scrollLock')
  }

  const handleScroll = () => {
    const isScrolled = window.scrollY > 10

    setIsScrolled(isScrolled)
  }

  return (
    <nav className={styles.navbar}>
      <div className={cn(styles.wrapper, { [styles.isScrolled]: isScrolled })}>
        <div className={styles.logoLinksBlock}>
          <a className={styles.logoWrapper} href="#" tabIndex="0">
            <Image alt="logo image" className={styles.logoImage} src={logoImage} />
          </a>
          <div
            className={cn(styles.linksWrapper, {
              [styles.isNavbarMenuOpen]: isNavbarMenuOpen,
            })}
          >
            {links.map((item) => (
              <LinkItem
                key={uuidv4()}
                tabIndex="0"
                {...item}
                about={tNavbar(`${item.id}.about`)}
                clickOnLink={clickOnLink}
                title={tNavbar(`${item.id}.label`)}
              />
            ))}
          </div>
          <div className={styles.languageSwitchers}>
            <Link
              about={tLanguageSwitcher('buttonEn.about')}
              className={cn(styles.languageSwitcher, { [styles.active]: pathname === '/en' })}
              href="/en"
              locale="en"
              tabIndex="0"
            >
              {tLanguageSwitcher('buttonEn.label')}
            </Link>
            <Link
              about={tLanguageSwitcher('buttonUa.about')}
              className={cn(styles.languageSwitcher, { [styles.active]: pathname === '/ua' })}
              href="/ua"
              locale="ua"
              tabIndex="0"
            >
              {tLanguageSwitcher('buttonUa.label')}
            </Link>
          </div>
        </div>
        <div className={styles.navbarWrapper}>
          <ScrollLink
            about={tButton('buttonBoost.about')}
            className={styles.navbarButton}
            duration={750}
            href="#"
            offset={-60}
            role="button"
            smooth={true}
            tabIndex="0"
            to={contact}
          >
            {tButton('buttonBoost.label')}
          </ScrollLink>
          <div
            className={cn(styles.menuBurger, {
              [styles.isNavbarMenuOpen]: isNavbarMenuOpen,
            })}
            onClick={handleMenuToggle}
          >
            <span className={styles.burger__line1} />
            <span className={styles.burger__line2} />
            <span className={styles.burger__line3} />
          </div>
        </div>
      </div>
    </nav>
  )
}
