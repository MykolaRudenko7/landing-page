"use client";

import { Link } from "react-scroll";
import styles from "components/Navbar/LinkItem/LinkItem.module.scss";

export default function LinkItem({ title, id }) {
  return (
    <Link
      to={id}
      smooth={true}
      duration={500}
      offset={-10}
      className={styles.link}
    >
      {title}
    </Link>
  );
}
