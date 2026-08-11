export function Newsletter() {
  return (
    <section className="newsletter section" id="private-access">
      <div className="newsletter-copy">
        <p className="eyebrow">Private Access</p>
        <h2>Enter quietly.</h2>
        <p>
          Receive collection notes, private previews, and first access when the inaugural offering
          is ready to be revealed.
        </p>
      </div>

      <form className="newsletter-form" action="#" method="post">
        <label className="sr-only" htmlFor="email">
          Email address
        </label>
        <input id="email" name="email" type="email" placeholder="Email address" required />
        <button type="submit">Join the list</button>
      </form>
    </section>
  );
}
