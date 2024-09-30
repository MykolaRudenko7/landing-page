import { v4 as uuidv4 } from 'uuid'
import { useTranslations } from 'next-intl'
import { ServiceSectionCardItemProps } from 'types/types'
import styles from 'components/ServicesSection/ServiceSectionCardItem/ServiceSectionCardItem.module.scss'

export default function ServiceSectionCardItem({
  listOptions,
  index,
}: ServiceSectionCardItemProps) {
  const tServices = useTranslations('ServicesSection')

  const listTitle = tServices(`card${index.toString()}.listTitle`)
  const listTranslations = listOptions.map((_, optionIndex) =>
    tServices(`card${index.toString()}.listOptions.option${optionIndex.toString()}`),
  )

  return (
    <li className={styles.listBlock} role="listitem">
      <h4 className={styles.listTitle}>
        <span className={styles.listTitleText}>{listTitle}</span>
      </h4>
      <ul className={styles.list} role="list">
        {listOptions.map((_, optionIndex) => (
          <li className={styles.listItem} key={uuidv4()} role="listitem">
            {listTranslations[optionIndex]}
          </li>
        ))}
      </ul>
    </li>
  )
}
