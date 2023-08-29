import Image from "next/image";
import { whoWeAreSectionData } from "data/whoWeAreData";
import styles from "components/WhoWeAreSection/WhoWeAreSection.module.scss";

export default function WhoWeAreSection() {
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
          <div className={styles.whoWeAreLableButton}>
            <p className={styles.buttonText}>Who we are</p>
          </div>
          <h4 className={styles.title}>{title}</h4>
          <p className={styles.text}>{text}</p>
        </div>
      </div>
    </section>
  );
}
