const cards = [
  { number: "01", title: "The First Offering", note: "Collection imagery forthcoming" },
  { number: "02", title: "Objects of Adornment", note: "Product details forthcoming" },
  { number: "03", title: "Made to Be Kept", note: "Private preview forthcoming" },
];

export function CollectionPreview() {
  return (
    <section className="collection section" id="collection">
      <div className="collection-heading">
        <div>
          <p className="eyebrow">Adornment</p>
          <h2>Objects for moments that matter.</h2>
        </div>
        <p className="collection-note">
          The collection will enter here once final product photography, names, materials, and
          approved product language are received.
        </p>
      </div>

      <div className="collection-grid">
        {cards.map((card, index) => (
          <article className="collection-card" key={card.number}>
            <div className={`product-placeholder product-${index + 1}`}>
              <span className="product-number">{card.number}</span>
              <div className="product-shape" />
              <small>APPROVED PRODUCT IMAGE</small>
            </div>
            <div className="product-caption">
              <h3>{card.title}</h3>
              <p>{card.note}</p>
            </div>
          </article>
        ))}
      </div>

      <div className="collection-footer">
        <span className="hairline dark" />
        <a href="#private-access">Join the list for private access</a>
        <span className="hairline dark" />
      </div>
    </section>
  );
}
