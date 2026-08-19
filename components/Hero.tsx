import Image from "next/image";
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

      <div className={styles.media}>
        <Image
          className={styles.image}
          src="/images/aje-bumi/hero/aje-bumi-hero.png"
          alt="Ajé Bumi editorial still life rooted in water, earth, ritual, and adornment"
          fill
          priority
          sizes="(max-width: 980px) 100vw, 58vw"
        />
        <div className={styles.caption}>
          <span>Water · Earth · Adornment</span>
          <small>A world shaped around Ajé.</small>
        </div>
      </div>
    </section>
  );
}
