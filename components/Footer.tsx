export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-wordmark">AJÉ BUMI</div>

      <div className="footer-center">
        <p>The story. The symbol. The heirloom.</p>
        <nav aria-label="Footer navigation">
          <a href="/our-story">Our Story</a>
          <a href="/#collection">Collection</a>
          <a href="/#private-access">Private Access</a>
        </nav>
      </div>

      <div className="footer-bottom">
        <span>Jewelry & Co.</span>
        <span>© {new Date().getFullYear()}</span>
      </div>
    </footer>
  );
}
