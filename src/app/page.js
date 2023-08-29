import Navbar from "components/Navbar";
import WhoWeAre from "components/WhoWeAreSection";
import StartHereSection from "components/StartHereSection";
import styles from "app/Home.module.scss";
import ServicesSection from "components/ServicesSection";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.frame}>
        <header className={styles.header}>
        <Navbar />
        </header>
        <main>
          <StartHereSection />
          <WhoWeAre />
          <ServicesSection />
        </main>
      </div>
    </main>
  );
}
