import styles from "components/PortfilioSection/WhyChooseBlock/WhyChooseCardItem/WhyChooseCardItem.module.scss";

export default function WhyChooseCardItem({ title, text }) {
  return (
    <div className={styles.whyChooseCardItem}>
      <div className={styles.whyChooseCardItemWrapper}>
        <h6 className={styles.title}>{title}</h6>
        <p className={styles.text}>{text}</p>
      </div>
    </div>
  );
}
