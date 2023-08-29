import Link from "next/link";
import Image from "next/image";
import { v4 as uuidv4 } from "uuid";
import { startHereSectionData } from "data/startHereSectionData";
import StartHereCardItem from "components/StartHereSection/StartHereCardItem";
import styles from "components/StartHereSection/StartHereSection.module.scss";

export default function StartHereSection() {
  const { textBlock } = startHereSectionData;

  return (
    <section id="startHere" className={styles.startHere}>
      <div className={styles.startHereContainer}>
        <div className={styles.textBlock}>
          <h3 className={styles.textBlockTitle}>{textBlock.title}</h3>
          <p className={styles.textBlockText}>{textBlock.text}</p>
          <div className={styles.buttonsBlock}>
            <Link
              about="schedule a consultation"
              href="#"
              role="button"
              className={styles.buttonConsultation}
            >
              <p className={styles.buttonText}>Schedule a consultation</p>
            </Link>
            <Link
              about="explore our services"
              href="#"
              role="button"
              className={styles.buttonServices}
            >
              <p className={styles.buttonText}>Explore our services</p>
            </Link>
          </div>
        </div>
        <div className={styles.imageWrapper}>
          <Image
            className={styles.image}
            src={textBlock.imageSrc}
            alt="start here block image"
          />
        </div>
      </div>
      <div className={styles.cardsBlock}>
        <div className={styles.cardsBlockContainer}>
          {startHereSectionData.cards.map((card) => (
            <StartHereCardItem {...card} key={uuidv4()} />
          ))}
        </div>
      </div>
    </section>
  );
}
