export function Header() {
  return (
    <header className="site-header">
      <a className="wordmark" href="/" aria-label="Ajé Bumi home">AJÉ BUMI</a>
      <nav className="nav" aria-label="Primary navigation">
        <a href="/our-story">Our Story</a>
        <a href="/#collection">Collection</a>
        <a href="/#private-access">Journal</a>
      </nav>
      <a className="header-note" href="/#collection">Shop</a>
    </header>
  );
}
