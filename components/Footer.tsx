export function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="footer-brand">AJE BUMI</div>
      <div className="footer-links">
        <a href="mailto:hello@ajebumi.com">Contact</a>
        <a href="#top">Back to top</a>
      </div>
      <p className="footer-note">© {new Date().getFullYear()} Aje Bumi. All rights reserved.</p>
    </footer>
  );
}
