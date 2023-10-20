import { v4 as uuidv4 } from 'uuid'
import styles from 'components/PortfolioSection/PortfolioBlock/PortfolioBlockCardItem/AppearTextCardContentItem/AppearTextCardContentItem.module.scss'

export default function AppearTextCardContentItem({ label, list }) {
  return (
    <div className={styles.textBlockWrapper}>
      <h6 className={styles.title}>{label}</h6>
      <ul className={styles.listItems}>
        {list?.map((item) => (
          <li className={styles.listItem} key={uuidv4()}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}
