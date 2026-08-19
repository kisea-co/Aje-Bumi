export function Header() {
  return (
    <header className="site-header">
      <a className="wordmark" href="/" aria-label="Ajé Bumi home">
        AJÉ BUMI
      </a>

      <nav className="nav" aria-label="Primary navigation">
        <a href="/our-story">The House</a>
        <a href="/#collection">Collections</a>
        <a href="/#ritual">Materials</a>
        <a href="/#private-access">Private Access</a>
      </nav>

      <a className="header-note" href="/our-story">
        Enter the house
      </a>
    </header>
  );
}
