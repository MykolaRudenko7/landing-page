'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { v4 as uuidv4 } from 'uuid'
import cn from 'classnames'
import { navbarData } from 'data/navbarLinksData'
import LinkItem from 'components/Navbar/LinkItem'
import styles from 'components/Navbar/Navbar.module.scss'

export default function Navbar() {
  const { links, logoImage } = navbarData

  const [isNavbarMenuOpen, setIsNavbarMenuOpen] = useState(false)
  const handleMenuToggle = () => {
    setIsNavbarMenuOpen(!isNavbarMenuOpen)
  }

  return (
    <nav className={styles.navbar}>
      <div className={styles.logoLinksBlock}>
        <Link href="" className={styles.logoWrapper}>
          <Image className={styles.logoImage} alt="logo image" src={logoImage} />
        </Link>
        <div
          className={cn(styles.linksWrapper, {
            [styles.isNavbavMenuOpen]: isNavbarMenuOpen,
          })}
        >
          {links.map((item) => (
            <LinkItem key={uuidv4()} {...item} handleMenuToggle={handleMenuToggle} />
          ))}
        </div>
      </div>
      <div className={styles.navbarWrapper}>
        <Link className={styles.navbarButton} href="#" role="button" about="boost your business!">
          <p className={styles.buttonText}>Boost your business!</p>
        </Link>
        <div
          className={cn(styles.menuBurger, {
            [styles.isNavbavMenuOpen]: isNavbarMenuOpen,
          })}
          onClick={handleMenuToggle}
        >
          <span className={styles.burger__line1} />
          <span className={styles.burger__line2} />
          <span className={styles.burger__line3} />
        </div>
      </div>
    </nav>
  )
}
