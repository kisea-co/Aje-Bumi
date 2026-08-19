import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Newsletter } from "@/components/Newsletter";

export default function OurStoryPage() {
  return (
    <main id="top">
      <Header />

      <section className="story-hero">
        <div className="story-hero-rail">
          <span>THE HOUSE OF AJÉ BUMI</span>
          <span>01</span>
        </div>

        <div className="story-hero-copy">
          <p className="eyebrow rust">Our Story</p>
          <h1>
            A return to <span>what was always within.</span>
          </h1>
          <p className="story-hero-intro">
            Ajé Bumi Jewelry & Co. was founded to serve as a space for those reconnecting to their
            own feminine divinity.
          </p>
        </div>

        <div className="story-hero-visual story-photo" aria-label="Ajé Bumi sacred feminine editorial">
          <img src="/images/aje-bumi/golden-hour-ritual.png" alt="Sacred feminine figure in golden-hour light and adornment" />
          <span className="story-visual-label">ROOTED IN AJÉ · EXPRESSED IN HER</span>
        </div>
      </section>

      <section className="story-manifesto section">
        <div className="section-index">
          <span>02</span>
          <div className="index-line" />
          <span>THE RETURN</span>
        </div>

        <div className="story-editorial-grid">
          <p className="eyebrow">The House</p>
          <h2>Adornment for what life could never take from you.</h2>
          <div className="story-editorial-copy">
            <p className="serif-intro">
              Adornments that highlight what was always within, just hidden under who we&apos;ve become
              after life has had its way.
            </p>
            <p className="body-copy">
              This is for the Sacred Feminine — in all her forms. A space for remembering the parts
              of yourself that were never truly lost, only covered over by experience, expectation,
              and circumstance.
            </p>
            <p className="body-copy">
              For the founder, that return meant going back toward what felt like home and paying
              attention to what seemed to be missing. Over time, that relationship deepened into a
              practice of trust, protection, and becoming.
            </p>
          </div>
        </div>

        <div className="story-image-pair">
          <figure className="story-image story-image-wide">
            <img src="/images/aje-bumi/golden-lotus-floating.png" alt="Lotus floating in golden water" />
            <figcaption>Return · Renewal · Remembrance</figcaption>
          </figure>
          <figure className="story-image story-image-tall">
            <img src="/images/aje-bumi/golden-magnolia-heirloom.png" alt="Magnolia still life in warm natural light" />
            <figcaption>Beauty held with intention</figcaption>
          </figure>
        </div>
      </section>

      <section className="story-memory">
        <div className="story-memory-inner">
          <p className="eyebrow light">Protection</p>
          <blockquote>
            The freedom to <span>build without fear.</span>
          </blockquote>
          <p>
            Protection feels like being able to build something intricate without having it knocked
            over — like shaping a sand castle while the water, wind, and birds remain close enough
            for you to finish. Not an absence of movement, but enough shelter to keep creating.
          </p>
        </div>
      </section>

      <section className="story-values section">
        <div className="section-index">
          <span>03</span>
          <div className="index-line" />
          <span>WHAT AJÉ TEACHES</span>
        </div>

        <div className="story-values-heading">
          <p className="eyebrow rust">The Becoming</p>
          <h2>Remembering the self beneath the fear.</h2>
        </div>

        <div className="story-values-grid">
          <article><span>01</span><h3>Inner Child</h3><p>Honoring the dreams that came before fear, and understanding they were never too big or too unrealistic to pursue.</p></article>
          <article><span>02</span><h3>Wholeness</h3><p>Adulthood does not require abandoning younger versions of the self. Young and old can exist together as equally real parts of one person.</p></article>
          <article><span>03</span><h3>Wonder</h3><p>Reclaiming childlike creativity, imagination, and curiosity before the world teaches us what to fear.</p></article>
          <article><span>04</span><h3>Discernment</h3><p>Learning that what feels like denial can sometimes be protection — and that not every desired outcome is meant to be possessed.</p></article>
        </div>

        <figure className="story-image story-image-cinematic">
          <img src="/images/aje-bumi/sunlit-tigers-eye-still-life.png" alt="Ajé Bumi still life with warm earth-toned materials" />
          <figcaption>Earth · Light · Adornment</figcaption>
        </figure>
      </section>

      <section className="story-manifesto section">
        <div className="section-index">
          <span>04</span>
          <div className="index-line" />
          <span>THE ORACLE</span>
        </div>

        <div className="story-editorial-grid">
          <p className="eyebrow">The Voice</p>
          <h2>The woman being called forward.</h2>
          <div className="story-editorial-copy">
            <p className="serif-intro">The Oracle best represents the voice of Ajé Bumi because she reflects the woman the founder is being called to become.</p>
            <p className="body-copy">There is power in the tongue. Used wisely, that voice can become a channel for knowledge, wisdom, and service — not only for the self, but for those one is being called to assist.</p>
            <p className="body-copy">The symbols within Ajé Bumi come from the founder&apos;s actual spiritual practice. Each one was chosen because it has been used, encountered, or held meaning in real life. Authenticity is not decoration here; it is the point.</p>
          </div>
        </div>
      </section>

      <section className="story-closing">
        <p className="eyebrow">AJÉ BUMI</p>
        <h2>Purpose before performance.</h2>
        <p>Ajé Bumi exists to make room for needs the founder has felt herself as a spiritualist — a brand with intention behind it, not a money grab. The hope is that every person who enters this world can feel who it is for, what it stands for, and the care behind why it exists.</p>
        <p className="serif-intro" style={{ margin: "38px auto 0" }}>Welcome home.</p>
      </section>

      <Newsletter />
      <Footer />
    </main>
  );
}
