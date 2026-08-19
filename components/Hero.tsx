import styles from "./Hero.module.css";

export function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.copy}>
        <p className={styles.kicker}>Rooted in ocean · Guided by ancestry</p>
        <h1 className={styles.title}>
          Adornment for
          <em>the woman becoming.</em>
        </h1>
        <p className={styles.subline}>Grace as a form of power.</p>

        <div className={styles.actions}>
          <a className={styles.primary} href="#world">
            Enter the house <span aria-hidden="true">→</span>
          </a>
          <a className={styles.secondary} href="#collection">
            Discover the first offering
          </a>
        </div>
      </div>
    </section>
  );
}
