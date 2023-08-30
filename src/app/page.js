import Navbar from "components/Navbar";
import WhoWeAre from "components/WhoWeAreSection";
import ServicesSection from "components/ServicesSection";
import StartHereSection from "components/StartHereSection";
import PortfilioSection from "components/PortfilioSection";
import styles from "app/Home.module.scss";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.frame}>
        <header className={styles.header}>{/* <Navbar /> */}</header>
        <main>
          {/* <StartHereSection />
          <WhoWeAre />
          <ServicesSection /> */}
          <PortfilioSection />
        </main>
      </div>
    </main>
  );
}
