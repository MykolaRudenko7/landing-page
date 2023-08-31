import Image from 'next/image';
import Link from 'next/link';
import { portfolioSectionData } from 'data/portfolioSectionData';
import styles from 'components/PortfilioSection/PortfolioBlock/PortfolioBlock.module.scss';

export default function PortfolioBlock() {
  const {
    textBlock: { text, title },
    cards: { cardBarossa, cardFloraNow, cardB2B },
  } = portfolioSectionData.portfolioBlockData;

  return (
    <div className={styles.portfolioBlock}>
      <div className={styles.portfolioBlockWrapper}>
        <div className={styles.textBlock}>
          <div className={styles.textBlockWrapper}>
            <h3 className={styles.portfolioLabel}>
              <span className={styles.buttonText}>Portfolio</span>
            </h3>
            <h5 className={styles.textBlockTitle}>{title}</h5>
            <p className={styles.textBlockText}>{text}</p>
            <div className={styles.cardBarossa}>
              <h6 className={styles.cardBarossaTitle}>
                <span className={styles.cardBarossaTitleText}>{cardBarossa.title}</span>
              </h6>
              <div className={styles.cardBarossaImageWrapper}>
                <Image
                  className={styles.cardBarossaImage}
                  alt="card content"
                  src={cardBarossa.imageSrc}
                />
              </div>
            </div>
          </div>
          <div className={styles.buttonWrapper}>
            <Link
              href="#"
              role="button"
              about="begin your project"
              className={styles.portfolioBlockButton}
            >
              <p className={styles.buttonText}>Begin Your Project</p>
            </Link>
          </div>
        </div>
        <div className={styles.cardsBlock}>
          <div className={styles.cardB2B}>
            <h6 className={styles.cardB2BTitle}>
              <span className={styles.cardB2BTitleText}>{cardB2B.title}</span>
            </h6>
            <div className={styles.cardB2BImageWrapper}>
              <Image
                className={styles.cardBarossaImage}
                alt="card content"
                src={cardB2B.imageSrc}
              />
            </div>
          </div>
          <div className={styles.cardFloraNow}>
            <h6 className={styles.cardFloraNowTitle}>
              <span className={styles.cardFloraNowTitleText}>{cardFloraNow.title}</span>
            </h6>
            <div className={styles.cardFloraNowImageWrapper}>
              <Image
                className={styles.cardFloraNowImage}
                alt="card content"
                src={cardFloraNow.imageSrc}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
