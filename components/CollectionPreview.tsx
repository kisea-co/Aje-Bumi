const cards = [
  { title: "The First Offering", meta: "Collection preview" },
  { title: "Forms of Water", meta: "Editorial study" },
  { title: "Heirloom Objects", meta: "Coming soon" },
];

export function CollectionPreview() {
  return (
    <section className="collection section" id="collection">
      <div className="section-heading-row">
        <div>
          <div className="section-kicker">Collection</div>
          <h2>Pieces made to be kept.</h2>
        </div>
        <p className="section-aside">Final product details and imagery will be added when client assets are approved.</p>
      </div>
      <div className="collection-grid">
        {cards.map((card, index) => (
          <article className="collection-card" key={card.title}>
            <div className={`collection-image placeholder-${index + 1}`}>Image placeholder</div>
            <p className="card-meta">{card.meta}</p>
            <h3>{card.title}</h3>
          </article>
        ))}
      </div>
      <a className="button-link" href="#newsletter">Join the list for collection access</a>
    </section>
  );
}
