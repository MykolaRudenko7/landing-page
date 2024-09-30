import { v4 as uuidv4 } from 'uuid'
import { useTranslations } from 'next-intl'
import { servicesSectionData } from 'data/servicesSectionData'
import ServiceSectionCardItem from 'components/ServicesSection/ServiceSectionCardItem'
import { ScrollSectionId } from 'types/types'
import styles from 'components/ServicesSection/ServicesSection.module.scss'

export default function ServicesSection() {
  const tLabels = useTranslations('SectionLabels')
  const label = tLabels('servicesSection')

  return (
    <section className={styles.services} id={ScrollSectionId.Services}>
      <div className={styles.servicesWrapper}>
        <div className={styles.servicesLabel}>
          <h3 className={styles.titleText}>{label}</h3>
        </div>
        <ul className={styles.cards} role="list">
          {servicesSectionData.map((item, index) => (
            <ServiceSectionCardItem index={index} key={uuidv4()} {...item} />
          ))}
        </ul>
      </div>
    </section>
  )
}
