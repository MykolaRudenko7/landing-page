import { v4 as uuidv4 } from 'uuid'
import { useTranslations } from 'next-intl'
import { AppearTextCardContentItemProps } from 'types/types'
import styles from 'components/PortfolioSection/PortfolioBlockCardItem/AppearTextCardContentItem/AppearTextCardContentItem.module.scss'

export default function AppearTextCardContentItem({
  list,
  cardId,
  labelId,
}: AppearTextCardContentItemProps) {
  const tPortfolioSectionCards = useTranslations('PortfolioSectionCards')

  const label = tPortfolioSectionCards(`card${cardId.toString()}.text.label${labelId.toString()}`)
  const listTranslations = list.map((_, index) =>
    tPortfolioSectionCards(
      `card${cardId.toString()}.text.list${labelId.toString()}.option${index.toString()}`,
    ),
  )

  return (
    <div className={styles.textBlockWrapper}>
      <h6 className={styles.title}>{label}</h6>
      <ul className={styles.listItems} role="list">
        {list.map((_, index) => (
          <li className={styles.listItem} key={uuidv4()} role="listitem">
            {listTranslations[index]}
          </li>
        ))}
      </ul>
    </div>
  )
}
