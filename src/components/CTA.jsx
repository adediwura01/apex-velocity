import "../css/CTA.css";

function CTA() {
  return (
    <section className="cta">

      <div className="cta-container" id="cta">

        <span className="section-tag">
          START YOUR JOURNEY
        </span>

        <h2>
          Ready to Build Your
          <br />
          Digital Future?
        </h2>

        <p>
          Join the next generation of investors with a platform designed
          to simplify portfolio management, deliver real-time insights,
          and help you invest with confidence.
        </p>

        <div className="cta-buttons">

          <button className="primary-btn">
            Get Started
          </button>

          <button className="secondary-btn">
            Explore Platform
          </button>

        </div>

      </div>

    </section>
  );
}

export default CTA;