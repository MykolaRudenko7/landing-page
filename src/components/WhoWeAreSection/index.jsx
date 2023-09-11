import Image from 'next/image'
import { whoWeAreSectionData } from 'data/whoWeAreSectionData'
import styles from 'components/WhoWeAreSection/WhoWeAreSection.module.scss'

export default function WhoWeAreSection() {
  const { imageSrc, text, title } = whoWeAreSectionData

  return (
    <section className={styles.whoWeAre} id="whoWeAre">
      <div className={styles.whoWeAreWrapper}>
        <div className={styles.whoWeAreImageWrapper}>
          <Image
            alt="blockImage"
            className={styles.whoWeAreImage}
            height={878}
            loading="eager"
            src={imageSrc}
            width={771}
          />
        </div>
        <div className={styles.whoWeAreTextBlock}>
          <div className={styles.whoWeAreLable}>
            <h3 className={styles.titleText}>Who we are</h3>
          </div>
          <h4 className={styles.title}>{title}</h4>
          <p className={styles.text}>{text}</p>
        </div>
      </div>
    </section>
  )
}
