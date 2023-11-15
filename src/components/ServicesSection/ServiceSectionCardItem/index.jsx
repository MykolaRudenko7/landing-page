import { v4 as uuidv4 } from 'uuid'
import styles from 'components/ServicesSection/ServiceSectionCardItem/ServiceSectionCardItem.module.scss'

export default function ServiceSectionCardItem({ listTitle, listOptions }) {
  return (
    <div className={styles.listBlock}>
      <h6 className={styles.listTitle}>
        <span className={styles.listTitleText}>{listTitle}</span>
      </h6>
      <ul className={styles.list}>
        {listOptions.map((option) => (
          <li className={styles.listItem} key={uuidv4()}>
            {option}
          </li>
        ))}
      </ul>
    </div>
  )
}
