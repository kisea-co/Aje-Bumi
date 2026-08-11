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
          src="/images/aje-bumi/hero/hero-house-of-aje.png"
          alt="Ajé Bumi still life with shell, gold adornment, linen, stone, and ocean water"
          fill
          priority
          sizes="(max-width: 980px) 100vw, 58vw"
        />
        <div className={styles.caption}>
          <span>Water · Memory · Adornment</span>
          <small>A return to what has always been.</small>
        </div>
      </div>
    </section>
  );
}
