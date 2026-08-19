import Image from "next/image";
import styles from "./Hero.module.css";

export function Hero() {
  return (
    <section className={styles.hero}>
      <Image
        className={styles.image}
        src="/images/aje-bumi/hero/aje-bumi-hero.png"
        alt="Ajé Bumi editorial world of water, earth, ritual, and adornment"
        fill
        priority
        sizes="100vw"
      />

      <div className={styles.overlay} aria-hidden="true" />

      <div className={styles.copy}>
        <p className={styles.house}>THE HOUSE OF AJÉ BUMI</p>
        <p className={styles.kicker}>Rooted in Ajé · Expressed in Her</p>

        <h1 className={styles.title}>
          Adornment for
          <em>the woman becoming.</em>
        </h1>

        <p className={styles.subline}>
          A world of water, memory, feminine divinity, and the beauty of returning to what was always within.
        </p>

        <a className={styles.enter} href="#world">
          <span>Enter the house</span>
          <span aria-hidden="true">↓</span>
        </a>
      </div>

      <div className={styles.edgeNote} aria-hidden="true">
        <span>WATER</span>
        <span>·</span>
        <span>WOMAN</span>
        <span>·</span>
        <span>ADORNMENT</span>
      </div>
    </section>
  );
}
