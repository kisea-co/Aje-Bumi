import Image from "next/image";
import styles from "./Hero.module.css";

export function Hero() {
  return (
    <section className={styles.hero} aria-label="Ajé Bumi">
      <Image
        className={styles.image}
        src="/images/aje-bumi/hero/aje-bumi-hero.png"
        alt="Ajé Bumi editorial still life shaped by water, earth, and adornment"
        fill
        priority
        sizes="100vw"
      />
      <div className={styles.overlay} aria-hidden="true" />
      <div className={styles.copy}>
        <p className={styles.house}>AJÉ BUMI JEWELRY & CO.</p>
        <h1 className={styles.title}>Adornment, <em>remembered.</em></h1>
      </div>
    </section>
  );
}
