export function Newsletter() {
  return (
    <section className="newsletter section" id="newsletter">
      <div>
        <div className="section-kicker">Private Access</div>
        <h2>Be first to enter.</h2>
        <p>Join the list for collection releases, private previews, and notes from the house.</p>
      </div>
      <form className="newsletter-form" action="#" method="post">
        <label className="sr-only" htmlFor="email">Email address</label>
        <input id="email" name="email" type="email" placeholder="Email address" required />
        <button type="submit">Join the list</button>
      </form>
    </section>
  );
}
