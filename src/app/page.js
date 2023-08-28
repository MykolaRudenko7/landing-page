import styles from "app/Home.module.scss";
import Navbar from "components/Navbar";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.frame}>
        <header className={styles.header}>
          <Navbar />
        </header>
      </div>
    </main>
  );
}
