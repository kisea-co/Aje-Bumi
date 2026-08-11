export function Header() {
  return (
    <header className="site-header">
      <a className="wordmark" href="#top" aria-label="Ajé Bumi home">
        AJÉ BUMI
      </a>

      <nav className="nav" aria-label="Primary navigation">
        <a href="#world">Our World</a>
        <a href="#collection">Collection</a>
        <a href="#ritual">Ritual</a>
        <a href="#private-access">Private Access</a>
      </nav>

      <a className="header-note" href="#collection">
        Enter the house
      </a>
    </header>
  );
}
