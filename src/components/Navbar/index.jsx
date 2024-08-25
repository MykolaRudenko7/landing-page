'use client'

import { usePathname } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { memo, useEffect, useState } from 'react'
import cn from 'classnames'
import { useTheme } from 'next-themes'
import { v4 as uuidv4 } from 'uuid'
import { useTranslations } from 'next-intl'
import { Link as ScrollLink } from 'react-scroll'
import { navbarData } from 'data/navbarLinksData'
import { scrollSectionId } from 'data/scrollSectionId'
import ThemeChanger from 'components/ThemeCharger'
import LinkItem from 'shared/LinkItem'
import styles from 'components/Navbar/Navbar.module.scss'

function Navbar() {
  const { theme } = useTheme()
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
    <nav
      className={cn(styles.navbar, {
        [styles.isNavbarMenuOpen]: isNavbarMenuOpen,
      })}
    >
      <div className={cn(styles.wrapper, { [styles.isScrolled]: isScrolled })}>
        <div className={styles.logoLinksBlock}>
          <a className={styles.logoWrapper} href="#" tabIndex="0">
            <Image
              alt="logo image"
              className={cn(styles.logoImage, { [styles.logoImageLightTheme]: theme === 'light' })}
              height={80}
              src={logoImage}
              width={80}
              priority
            />
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
                about={tNavbar(`${item.id}`)}
                clickOnLink={clickOnLink}
                title={tNavbar(`${item.id}`)}
              />
            ))}
          </div>
          <div className={styles.languageSwitchers}>
            <Link
              about={tLanguageSwitcher('buttonEn.about')}
              className={cn(styles.languageSwitcher, { [styles.active]: pathname === '/en' })}
              href="/en"
              locale="en"
              scroll={false}
              tabIndex="0"
              replace
            >
              {tLanguageSwitcher('buttonEn.label')}
            </Link>
            <Link
              about={tLanguageSwitcher('buttonUa.about')}
              className={cn(styles.languageSwitcher, { [styles.active]: pathname === '/uk' })}
              href="/uk"
              locale="uk"
              scroll={false}
              tabIndex="0"
              replace
            >
              {tLanguageSwitcher('buttonUa.label')}
            </Link>
            <ThemeChanger />
          </div>
        </div>
        <div className={styles.navbarWrapper}>
          <ScrollLink
            about={tButton('buttonBoost')}
            className={styles.navbarButton}
            duration={750}
            href="#"
            offset={-60}
            role="button"
            smooth={true}
            tabIndex="0"
            to={contact}
          >
            {tButton('buttonBoost')}
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

export default memo(Navbar)
