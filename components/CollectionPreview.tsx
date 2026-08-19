import Image from "next/image";
import styles from "./CollectionPreview.module.css";

const pieces = [
  {
    number: "01",
    title: "Walnut Necklaces",
    category: "Necklaces",
    image: "/images/aje-bumi/walnut-necklaces.png.JPG",
    alt: "Gold necklaces with warm brown stone pendants styled against a natural stone surface",
  },
  {
    number: "02",
    title: "Variety Ring Set",
    category: "Rings",
    image: "/images/aje-bumi/variety-ring-set.png.JPG",
    alt: "Assorted gold, pearl, and dark stone rings arranged in an editorial still life",
  },
  {
    number: "03",
    title: "Brown + Pearl",
    category: "Adornment",
    image: "/images/aje-bumi/brown-pearl-rings.png.JPG",
    alt: "Gold pieces with brown stone and pearl details displayed on clear glass",
  },
  {
    number: "04",
    title: "Gold Bracelet",
    category: "Bracelets",
    image: "/images/aje-bumi/gold-bracelet-product.png",
    alt: "Gold bracelet photographed as a refined jewelry product study",
  },
];

export function CollectionPreview() {
  return (
    <section className={styles.section} id="collection">
      <div className={styles.heading}>
        <div>
          <p className="eyebrow">The Shop Preview</p>
          <h2>A first look at the collection.</h2>
        </div>
        <p className={styles.note}>
          An early edit of Ajé Bumi adornment — warm metals, luminous pearl, and earth-toned stones
          selected to feel collected rather than consumed.
        </p>
      </div>

      <div className={styles.grid}>
        {pieces.map((piece) => (
          <article className={styles.card} key={piece.number}>
            <div className={styles.imageWrap}>
              <Image
                className={styles.image}
                src={piece.image}
                alt={piece.alt}
                fill
                sizes="(max-width: 720px) 100vw, (max-width: 1050px) 50vw, 25vw"
              />
              <span className={styles.number}>{piece.number}</span>
            </div>
            <div className={styles.caption}>
              <h3>{piece.title}</h3>
              <p>{piece.category}</p>
            </div>
          </article>
        ))}
      </div>

      <div className={styles.footer}>
        <span className={styles.line} />
        <a href="#private-access">Private access to the first offering</a>
        <span className={styles.line} />
      </div>
    </section>
  );
}
