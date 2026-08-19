const materials = [
  { title: "Earth", subtitle: "The foundation", className: "earth", image: "/images/aje-bumi/sunlit-tigers-eye-still-life.png" },
  { title: "Light", subtitle: "The atmosphere", className: "light-card", image: "/images/aje-bumi/golden-magnolia-heirloom.png" },
  { title: "Ritual", subtitle: "The practice", className: "ritual-card", image: "/images/aje-bumi/golden-hour-ritual.png" },
  { title: "Adornment", subtitle: "The offering", className: "adornment-card" },
];

export function MaterialRitual() {
  return (
    <section className="materials section" id="ritual">
      <div className="materials-top">
        <div>
          <p className="eyebrow rust">The material language</p>
          <h2>Nothing is only decorative.</h2>
        </div>
        <p>
          Texture carries memory. Stone, linen, metal, water, paper, light, and botanical forms
          create the tactile world around the jewelry.
        </p>
      </div>

      <div className="materials-grid">
        {materials.map((item, i) => (
          <article className={`material-card ${item.className} ${item.image ? "image-card" : ""}`} key={item.title}>
            <span>0{i + 1}</span>
            {item.image ? (
              <div className="material-image">
                <img src={item.image} alt={`${item.title} material study for Ajé Bumi`} />
              </div>
            ) : (
              <div className="material-art" aria-hidden="true" />
            )}
            <h3>{item.title}</h3>
            <p>{item.subtitle}</p>
          </article>
        ))}
      </div>

      <p className="material-quote">Chosen for its honesty. Valued for its permanence.</p>
    </section>
  );
}
