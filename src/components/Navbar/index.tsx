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
import ThemeChanger from 'components/ThemeCharger'
import LinkItem from 'shared/ScrollIdLink'
import { LanguagesUrlEndpoints, ThemeNames } from 'types/types'
import styles from 'components/Navbar/Navbar.module.scss'

function Navbar() {
  const { theme } = useTheme()
  const { links, logoImage, logoLink, buttonEn, buttonUk, scrollToContactButton } = navbarData
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
  const tImages = useTranslations('Images')
  const tLanguageSwitcher = useTranslations('NavbarLanguageSwitcher')
  const tLinks = useTranslations('LinkAlt')

  const buttonEnAboutText = tLanguageSwitcher('buttonEn.about')
  const buttonUaAboutText = tLanguageSwitcher('buttonUa.about')
  const buttonEnLabelText = tLanguageSwitcher('buttonEn.label')
  const buttonUaLabelText = tLanguageSwitcher('buttonUa.label')
  const buttonBoostText = tButton('buttonBoost')

  const logoLinkAlt = tLinks('logo')
  const logoImageAlt = tImages('logo')
  const navbarLinks = links.map((_, tId) => tNavbar(tId.toString()))

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
          <Link
            className={styles.logoWrapper}
            href="#"
            {...logoLink}
            about={logoLinkAlt}
            role="link"
          >
            <Image
              alt={logoImageAlt}
              className={cn(styles.logoImage, {
                [styles.logoImageLightTheme]: theme === ThemeNames.Light,
              })}
              {...logoImage}
              priority
            />
          </Link>
          <div
            className={cn(styles.linksWrapper, {
              [styles.isNavbarMenuOpen]: isNavbarMenuOpen,
            })}
          >
            {links.map((item, id) => (
              <LinkItem
                key={uuidv4()}
                {...item}
                about={navbarLinks[id]}
                clickOnLink={clickOnLink}
                title={navbarLinks[id]}
              />
            ))}
          </div>
          <div className={styles.languageSwitchers}>
            <Link
              about={buttonEnAboutText}
              className={cn(styles.languageSwitcher, {
                [styles.active]: pathname === (LanguagesUrlEndpoints.EN as string),
              })}
              href={{ pathname: LanguagesUrlEndpoints.EN }}
              {...buttonEn}
            >
              {buttonEnLabelText}
            </Link>
            <Link
              about={buttonUaAboutText}
              className={cn(styles.languageSwitcher, {
                [styles.active]: pathname === (LanguagesUrlEndpoints.UK as string),
              })}
              href={{ pathname: LanguagesUrlEndpoints.UK }}
              {...buttonUk}
            >
              {buttonUaLabelText}
            </Link>
            <ThemeChanger />
          </div>
        </div>
        <div className={styles.navbarWrapper}>
          <ScrollLink
            about={buttonBoostText}
            className={styles.navbarButton}
            {...scrollToContactButton}
          >
            {buttonBoostText}
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
