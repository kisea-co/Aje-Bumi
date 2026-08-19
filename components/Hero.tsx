import Image from "next/image";
import styles from "./Hero.module.css";

export function Hero() {
  return (
    <section className={styles.hero} aria-label="The House of Ajé Bumi">
      <Image
        className={styles.image}
        src="/images/aje-bumi/hero/aje-bumi-hero.png"
        alt="Ajé Bumi editorial world shaped by water, earth, and sacred feminine symbolism"
        fill
        priority
        sizes="100vw"
      />
      <div className={styles.overlay} aria-hidden="true" />

      <div className={styles.copy}>
        <p className={styles.house}>THE HOUSE OF AJÉ BUMI</p>
        <h1 className={styles.title}>The story. The symbol. <em>The heirloom.</em></h1>
        <p className={styles.subline}>For the Sacred Feminine — in all her forms.</p>
      </div>

      <div className={styles.scrollCue} aria-hidden="true">
        <span>Discover</span>
        <i />
      </div>
    </section>
  );
}
