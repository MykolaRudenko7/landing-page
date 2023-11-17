import { v4 as uuidv4 } from 'uuid'
import { useTranslations } from 'next-intl'
import styles from 'components/PortfolioSection/PortfolioBlockCardItem/AppearTextCardContentItem/AppearTextCardContentItem.module.scss'

export default function AppearTextCardContentItem({ list, cardId, labelId }) {
  const tPortfolioSectionCards = useTranslations('PortfolioSectionCards')
  const tLabel = tPortfolioSectionCards(`card${cardId}.text.label${labelId}`)

  return (
    <div className={styles.textBlockWrapper}>
      <h6 className={styles.title}>{tLabel}</h6>
      <ul className={styles.listItems}>
        {list?.map((item, index) => (
          <li className={styles.listItem} key={uuidv4()}>
            {tPortfolioSectionCards(`card${cardId}.text.list${labelId}.option${index}`)}
          </li>
        ))}
      </ul>
    </div>
  )
}
