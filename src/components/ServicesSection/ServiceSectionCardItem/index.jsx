import { v4 as uuidv4 } from "uuid";
import styles from "components/ServicesSection/ServiceSectionCardItem/ServiceSectionCardItem.module.scss";

export default function ServiceSectionCardItem({ listTitle, listOptons }) {
  return (
    <div className={styles.listBlock}>
      <h6 className={styles.listTitle}>
        <span className={styles.listTitleText}>{listTitle}</span>
      </h6>
      <ul className={styles.list}>
        {listOptons.map((option) => (
          <li key={uuidv4()} className={styles.listItem}>
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
}
