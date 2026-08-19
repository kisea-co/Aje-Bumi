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
          <p className="serif-intro">The feminine is not ornament around the story. She is the current beneath it.</p>
          <p className="body-copy">
            Ajé Bumi moves through radiance, intuition, memory, good character, and self-possession. The world is warm, tactile, and intentional—an atmosphere of abundance without excess.
          </p>

          <div className="sacred-note">
            <CowrieMark className="small-symbol" />
            <div>
              <span>ESSENCE</span>
              <p>Radiance · stewardship · intuition · becoming</p>
            </div>
          </div>
        </div>

        <div className="sacred-collage visual-collage" aria-label="Sacred Feminine editorial studies">
          <div className="visual-tile primary">
            <img src="/images/aje-bumi/golden-hour-ritual.png" alt="Sacred feminine figure in golden-hour light" />
            <span>01 · ADORNMENT</span>
          </div>
          <div className="visual-tile">
            <img src="/images/aje-bumi/golden-magnolia-heirloom.png" alt="Magnolia in warm natural light" />
            <span>02 · BLOOM</span>
          </div>
          <div className="visual-tile">
            <img src="/images/aje-bumi/sunlit-tigers-eye-still-life.png" alt="Earth-toned Ajé Bumi still life" />
            <span>03 · EARTH</span>
          </div>
        </div>
      </div>
    </section>
  );
}
