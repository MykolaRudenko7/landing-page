import { v4 as uuidv4 } from 'uuid'
import { servicesSectionData } from 'data/servicesSectionData'
import ServiceSectionCardItem from 'components/ServicesSection/ServiceSectionCardItem'
import styles from 'components/ServicesSection/ServicesSection.module.scss'

export default function ServicesSection() {
  return (
    <section className={styles.services} id="services">
      <div className={styles.servicesWrapper}>
        <div className={styles.servicesLable}>
          <h3 className={styles.titleText}>Industries & Services We Serve</h3>
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
