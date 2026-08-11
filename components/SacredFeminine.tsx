import { CowrieMark } from "./Symbols";

export function SacredFeminine() {
  return (
    <section className="sacred section" id="world">
      <div className="section-index">
        <span>II.</span>
        <span className="index-line" />
        <span>THE SACRED FEMININE</span>
      </div>

      <div className="sacred-grid">
        <div className="sacred-copy">
          <p className="eyebrow rust">A quiet force</p>
          <h2>Softness without surrender.</h2>
          <p className="serif-intro">
            The feminine is not ornament around the story. She is the current beneath it.
          </p>
          <p className="body-copy">
            Ajé Bumi moves through radiance, intuition, memory, and self-possession. The world is
            warm, luminous, and intentional—made to feel held rather than decorated.
          </p>

          <div className="sacred-note">
            <CowrieMark className="small-symbol" />
            <div>
              <span>ESSENCE</span>
              <p>Divine femininity · self-worth · radiance · becoming</p>
            </div>
          </div>
        </div>

        <div className="sacred-collage" aria-label="Sacred Feminine editorial image placeholders">
          <div className="collage-image portrait">
            <span>01 · PRESENCE</span>
          </div>
          <div className="collage-image blush">
            <span>02 · SILK</span>
          </div>
          <div className="collage-image pearl">
            <span>03 · PEARL</span>
          </div>
        </div>
      </div>
    </section>
  );
}
