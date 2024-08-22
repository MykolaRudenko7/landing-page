import { v4 as uuidv4 } from 'uuid'
import { useTranslations } from 'next-intl'
import styles from 'components/ServicesSection/ServiceSectionCardItem/ServiceSectionCardItem.module.scss'

export default function ServiceSectionCardItem({ listOptions, index }) {
  const tServices = useTranslations('ServicesSection')
  const listTitle = tServices(`card${index}.listTitle`)

  return (
    <div className={styles.listBlock}>
      <h4 className={styles.listTitle}>
        <span className={styles.listTitleText}>{listTitle}</span>
      </h4>
      <ul className={styles.list}>
        {listOptions.map((option, optionIndex) => (
          <li className={styles.listItem} key={uuidv4()}>
            {tServices(`card${index}.listOptions.option${optionIndex}`)}
          </li>
        ))}
      </ul>
    </div>
  )
}
