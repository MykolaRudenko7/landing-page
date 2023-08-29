import Link from "next/link";
import Image from "next/image";
import { whoWeAreSectionData } from "data/whoWeAreData";
import styles from "components/WhoWeAreSection/WhoWeAre.module.scss";

export default function WhoWeAre() {
  const { imageSrc, text, title } = whoWeAreSectionData;

  return (
    <section id="whoWeAre" className={styles.whoWeAre}>
      <div className={styles.whoWeAreWrapper}>
        <div className={styles.whoWeAreImageWrapper}>
          <Image
            className={styles.whoWeAreImage}
            alt="blockImage"
            src={imageSrc}
            width={771}
            height={878}
          />
        </div>
        <div className={styles.whoWeAreTextBlock}>
          <Link
            className={styles.whoWeAreButton}
            href="#"
            about="who we are"
            role="block lable button"
          >
            <p className={styles.buttonText}>Who we are</p>
          </Link>
          <h4 className={styles.title}>{title}</h4>
          <p className={styles.text}>{text}</p>
        </div>
      </div>
    </section>
  );
}
