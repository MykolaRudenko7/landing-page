import { v4 as uuidv4 } from 'uuid'
import { servicesSectionData } from 'data/servicesSectionData'
import { scrollSectionId } from 'data/scrollSectionId'
import ServiceSectionCardItem from 'components/ServicesSection/ServiceSectionCardItem'
import styles from 'components/ServicesSection/ServicesSection.module.scss'

export default function ServicesSection() {
  const { services } = scrollSectionId

  return (
    <section className={styles.services} id={services}>
      <div className={styles.servicesWrapper}>
        <div className={styles.servicesLabel}>
          <h3 className={styles.titleText}>What We Do</h3>
        </div>
        <div className={styles.cards}>
          {servicesSectionData.map((item) => (
            <ServiceSectionCardItem key={uuidv4()} {...item} />
          ))}
        </div>
      </div>
    </section>
  )
}
