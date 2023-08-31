import { v4 as uuidv4 } from 'uuid'
import { servicesSectionData } from 'data/servicesSectionData'
import ServiceSectionCardItem from 'components/ServicesSection/ServiceSectionCardItem'
import styles from 'components/ServicesSection/ServicesSection.module.scss'

export default function ServicesSection() {
  return (
    <section id="services" className={styles.services}>
      <div className={styles.servicesWrapper}>
        <h3 className={styles.servicesLable}>
          <p className={styles.buttonText}>Industries & Services We Serve</p>
        </h3>
        <div className={styles.cards}>
          {servicesSectionData.map((item) => (
            <ServiceSectionCardItem key={uuidv4()} {...item} />
          ))}
        </div>
      </div>
    </section>
  )
}
