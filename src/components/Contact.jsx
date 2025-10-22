export default function Contact() {
  return (
    <section id="contact">
      <div className="kicker">Contact</div>
      <h2>Get in Touch</h2>
      <div className="contact">
        <div className="card">
          <h3>Details</h3>
          <div className="list">
            <div>
              <strong>Email:</strong>{" "}
              <a href="mailto:ebantak@yahoo.gr">ebantak@yahoo.gr</a>
            </div>

            <div>
              <strong>Location:</strong> Xanthi, GR
            </div>
          </div>
          <div className="socials" style={{ marginTop: "12px" }}>
            
            <a className="btn" href="https://github.com/edisban" target="_blank">GitHub</a>
            <a className="btn" href="https://www.linkedin.com/in/edis-bantak-26a2a0375/" target="_blank">LinkedIn</a>
          </div>
        </div>
      </div>
    </section>
  );
}
