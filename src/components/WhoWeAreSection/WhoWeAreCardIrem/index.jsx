import Image from "next/image";
import styles from "components/WhoWeAreSection/WhoWeAreCardIrem/WhoWeAreCardItem.module.scss";

export default function WhoWeAreCardItem({ imageSrc, title, subtitle, text }) {
  return (
    <div className={styles.card}>
      <div className={styles.cardImageWrapper}>
        <Image className={styles.cardImage} alt="card image" src={imageSrc} />
      </div>
      <p className={styles.cardSubTitle}>{subtitle}</p>
      <h4 className={styles.title}>{title}</h4>
      <p className={styles.cardText}>{text}</p>
    </div>
  );
}
