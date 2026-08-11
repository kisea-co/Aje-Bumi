import { WaterMark } from "./Symbols";

export function OceanMemory() {
  return (
    <section className="ocean">
      <div className="ocean-texture" aria-hidden="true">
        <span className="wave wave-one" />
        <span className="wave wave-two" />
        <span className="wave wave-three" />
      </div>

      <div className="ocean-content">
        <WaterMark className="ocean-symbol" />
        <p className="eyebrow light">Ocean · Memory · Becoming</p>
        <blockquote>
          The tide remembers
          <span>every shore.</span>
        </blockquote>
        <p>
          Water appears as depth, reflection, movement, and continuity—a quiet return to what is
          carried forward.
        </p>
      </div>

      <div className="ocean-caption">
        <span>THE BIRTHPLACE</span>
        <span>DEEP WATER · REFLECTION · MOTHER OF PEARL</span>
      </div>
    </section>
  );
}
