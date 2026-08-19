export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-intro">
        <p className="footer-kicker">AJÉ BUMI JEWELRY & CO.</p>
        <h2>
          Adornment for what was
          <em>always within.</em>
        </h2>
        <p className="footer-manifesto">
          For the Sacred Feminine — in all her forms.
        </p>
      </div>

      <div className="footer-links-wrap">
        <div className="footer-link-group">
          <span>Enter the house</span>
          <a href="/our-story">Our Story</a>
          <a href="/#world">The Sacred Feminine</a>
          <a href="/#ritual">Material Language</a>
        </div>

        <div className="footer-link-group">
          <span>The offering</span>
          <a href="/#collection">Shop Preview</a>
          <a href="/#private-access">Private Access</a>
        </div>
      </div>

      <div className="footer-signoff">
        <p className="footer-welcome">Welcome home.</p>
        <p className="footer-copyright">© {new Date().getFullYear()} Ajé Bumi Jewelry & Co.</p>
      </div>
    </footer>
  );
}
