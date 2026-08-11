import { WaterMark } from "./Symbols";

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-mark">
        <WaterMark className="footer-symbol" />
        <span>AJÉ BUMI</span>
      </div>

      <div className="footer-nav">
        <a href="#world">Our World</a>
        <a href="#collection">Collection</a>
        <a href="#ritual">Ritual</a>
        <a href="#private-access">Private Access</a>
      </div>

      <div className="footer-bottom">
        <p>Rooted in ancestry. Guided by the waters. Made to be heirloomed.</p>
        <p>© {new Date().getFullYear()} Ajé Bumi</p>
      </div>
    </footer>
  );
}
