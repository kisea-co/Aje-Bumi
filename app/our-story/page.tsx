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
            An archive of <span>inheritance.</span>
          </h1>
          <p className="story-hero-intro">
            Ajé Bumi is jewelry shaped by ancestry, ritual, sacred femininity, and the quiet power of
            objects made to be kept.
          </p>
        </div>

        <div className="story-hero-visual" aria-hidden="true">
          <div className="story-orbit story-orbit-one" />
          <div className="story-orbit story-orbit-two" />
          <div className="story-veil story-veil-one" />
          <div className="story-veil story-veil-two" />
          <span className="story-visual-label">MEMORY · WATER · WOMAN</span>
        </div>
      </section>

      <section className="story-manifesto section">
        <div className="section-index">
          <span>02</span>
          <div className="index-line" />
          <span>THE BEGINNING</span>
        </div>

        <div className="story-editorial-grid">
          <p className="eyebrow">The House</p>
          <h2>Adornment can be beautiful and still carry memory.</h2>
          <div className="story-editorial-copy">
            <p className="serif-intro">
              Ajé Bumi was imagined as a living archive — a house for pieces that feel intimate,
              enduring, and quietly sacred.
            </p>
            <p className="body-copy">
              The language of the brand moves through water, handwork, inheritance, and sacred
              femininity. Rather than treating jewelry as something disposable or purely decorative,
              we see each object as a vessel: something worn close to the body, collected over time,
              and eventually remembered through the person who wore it.
            </p>
            <p className="body-copy">
              The result is a world that values permanence over excess, symbolism over noise, and
              beauty that does not need to announce itself to be felt.
            </p>
          </div>
        </div>
      </section>

      <section className="story-memory">
        <div className="story-memory-inner">
          <p className="eyebrow light">A language of water</p>
          <blockquote>
            What we inherit <span>moves through us.</span>
          </blockquote>
          <p>
            Water is memory, movement, return. It is a recurring visual and spiritual thread within
            Ajé Bumi — a reminder that lineage is not static. It travels, transforms, and finds new
            forms through every generation.
          </p>
        </div>
      </section>

      <section className="story-values section">
        <div className="section-index">
          <span>03</span>
          <div className="index-line" />
          <span>WHAT WE HOLD</span>
        </div>

        <div className="story-values-heading">
          <p className="eyebrow rust">Our Philosophy</p>
          <h2>Made for ritual. Made for keeping.</h2>
        </div>

        <div className="story-values-grid">
          <article>
            <span>01</span>
            <h3>Inheritance</h3>
            <p>Pieces designed to feel collected, personal, and worthy of being passed forward.</p>
          </article>
          <article>
            <span>02</span>
            <h3>Ritual</h3>
            <p>Adornment as an intentional act — a way of marking self, memory, and becoming.</p>
          </article>
          <article>
            <span>03</span>
            <h3>Sacred Femininity</h3>
            <p>Softness, abundance, intuition, embodiment, and power without performance.</p>
          </article>
          <article>
            <span>04</span>
            <h3>Permanence</h3>
            <p>A slower relationship to beauty: fewer things, chosen well, kept longer.</p>
          </article>
        </div>
      </section>

      <section className="story-closing">
        <p className="eyebrow">AJÉ BUMI</p>
        <h2>Jewelry for the woman becoming an ancestor.</h2>
        <p>
          An evolving collection of objects rooted in beauty, memory, and the belief that what we
          wear can hold more than ornament.
        </p>
      </section>

      <Newsletter />
      <Footer />
    </main>
  );
}
