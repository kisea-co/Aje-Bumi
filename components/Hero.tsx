import { SunMark } from "./Symbols";

export function Hero() {
  return (
    <section className="hero">
      <div className="hero-rail" aria-hidden="true">
        <span>HOUSE OF AJÉ</span>
        <span>01</span>
      </div>

      <div className="hero-copy">
        <div className="hero-symbol-row">
          <span className="hairline" />
          <SunMark className="hero-symbol" />
          <span className="hairline" />
        </div>

        <p className="eyebrow">Rooted in Ajé. Expressed in her.</p>
        <h1>
          Adornment for
          <span>the woman becoming.</span>
        </h1>
        <p className="hero-subline">Grace as a form of power.</p>

        <div className="hero-actions">
          <a className="text-link" href="#collection">
            Discover the first offering
          </a>
          <p>Jewelry, memory, water, and the quiet language of inheritance.</p>
        </div>
      </div>

      <div className="hero-visual" role="img" aria-label="Reserved for approved Ajé Bumi Sacred Feminine campaign photography">
        <div className="hero-light hero-light-one" />
        <div className="hero-light hero-light-two" />
        <div className="silk-fold silk-one" />
        <div className="silk-fold silk-two" />
        <div className="jewel-orbit orbit-one" />
        <div className="jewel-orbit orbit-two" />
        <div className="hero-image-label">
          <span>LIGHT · ADORNMENT</span>
          <small>Replace with approved Sacred Feminine campaign image</small>
        </div>
      </div>
    </section>
  );
}
