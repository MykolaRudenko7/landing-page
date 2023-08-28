import Link from "next/link";
import Image from "next/image";
import { startHereSectionData } from "data/startHereSectionData";
import styles from "components/StartHereSection/StartHereSection.module.scss";

export default function StartHereSection() {
  const { imageSrc, text, title } = startHereSectionData;

  return (
    <section id="startHere" className={styles.startHere}>
      <div className={styles.startHereContainer}>
        <div className={styles.textBlock}>
          <h3 className={styles.textBlockTitle}>{title}</h3>
          <p className={styles.textBlockText}>{text}</p>
          <div className={styles.buttonsBlock}>
            <Link
              about="schedule a consultation"
              href="#"
              role="button"
              className={styles.buttonConsultation}
            >
              Schedule a consultation
            </Link>
            <Link
              about="explore our services"
              href="#"
              role="button"
              className={styles.buttonServices}
            >
              Explore our services
            </Link>
          </div>
        </div>
        <div className={styles.imageWrapper}>
          <Image
            className={styles.image}
            src={imageSrc}
            alt="start here block image"
          />
        </div>
      </div>
    </section>
  );
}
