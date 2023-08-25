import Link from 'next/link';
import Image from 'next/image';
import { v4 as uuidv4 } from 'uuid';
import { navbarData } from 'data/navbarLinksData';
import LinkItem from 'components/Navbar/LinkItem';
import styles from 'components/Navbar/Navbar.module.scss';

export default function Navbar() {

  const { links, logoImage } = navbarData;
  
  return (
    <nav className={styles.navbar}>
      <div className={styles.logoLinksBlock}>
        <Link href="" className={styles.logoWrapper}>
          <Image className={styles.logoImage} alt="logo image" src={logoImage} />
        </Link>
        <div className={styles.linksWrapper}>
          {links.map((item) => (
            <LinkItem key={uuidv4()} {...item} />
          ))}
        </div>
      </div>
      <Link className={styles.navbarButton} href="#" role="button" about="boost your business!">
        Boost your business!
      </Link>
    </nav>
  );
}
