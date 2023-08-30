import Link from "next/link";
import { portfolioSectionData } from "data/portfolioSectionData";
import WhyChooseCardItem from "components/PortfilioSection/WhyChooseBlock/WhyChooseCardItem";
import styles from "components/PortfilioSection/WhyChooseBlock/WhyChooseBlock.module.scss";

export default function WhyChooseBlock() {
  const {
    whyChooseBlockData: { cards, mainCard },
  } = portfolioSectionData;

  return (
    <div className={styles.whyChooseBlock}>
      <div className={styles.whyChooseBlockWrapper}>
        <div className={styles.mainCard}>
          <div className={styles.mainCardWrapper}>
            <div className={styles.buttonLable}>
              <p className={styles.buttonText}>Why Choose TECH COSSACKS?</p>
            </div>
            <h6 className={styles.mainCardTitle}>{mainCard.title}</h6>
            <p className={styles.mainCardText}>{mainCard.text}</p>
            <Link
              href="#"
              role="button"
              about="ready to elevate?"
              className={styles.elevateButton}
            >
              <span className={styles.buttonText}>Ready to Elevate?</span>
            </Link>
          </div>
        </div>
        <div className={styles.smallCircles}>
          {cards.map((item) => (
            <WhyChooseCardItem {...item} />
          ))}
        </div>
      </div>
    </div>
  );
}
