import { SunMark } from "./Symbols";

export function ClosingStatement() {
  return (
    <section className="closing">
      <div className="closing-inner">
        <SunMark className="closing-symbol" />
        <p className="eyebrow rust">The House of Ajé</p>
        <h2>
          Wealth is sacred.
          <span>Legacy is our offering.</span>
        </h2>
        <p>
          A house shaped by reverence, intention, and the belief that what we choose to carry can
          become part of what we leave behind.
        </p>
      </div>
    </section>
  );
}
