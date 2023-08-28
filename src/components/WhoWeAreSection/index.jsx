import { v4 as uuidv4 } from "uuid";
import { whoWeAreSectionCardsData } from "data/whoWeAreData";
import WhoWeAreCardItem from "components/WhoWeAreSection/WhoWeAreCardIrem";
import styles from "components/WhoWeAreSection/WhoWeAre.module.scss";

export default function WhoWeAreSection() {
  return (
    <section id="whoWeAre" className={styles.whoWeAre}>
      <div className={styles.whoWeAreContainer}>
        {whoWeAreSectionCardsData.map((card) => (
          <WhoWeAreCardItem {...card} key={uuidv4()} />
        ))}
      </div>
    </section>
  );
}
