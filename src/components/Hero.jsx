import "../css/hero.css";
import { ArrowRight, Play, ShieldCheck } from "lucide-react";

function Hero() {
  return (
    <section className="hero">

      <div className="hero-left">

        <div className="hero-badge">
          <ShieldCheck size={15}/>
          Trusted by Digital Investors
        </div>

        <h1>
          Secure Your
          <span> Digital Assets</span>
          <br />
          Without Limits.
        </h1>

        <p>
          NeoVault gives individuals and institutions a secure,
          elegant platform for managing, monitoring and growing
          digital assets across multiple blockchains.
        </p>

        <div className="hero-buttons">

          <button className="primary-btn">
            Launch App
            <ArrowRight size={18}/>
          </button>

          <button className="secondary-btn">
            <Play size={16}/>
            Watch Demo
          </button>

        </div>

      </div>

      <div className="hero-right">

        <div className="dashboard-card">

          <div className="dashboard-header">

            <h3>Total Portfolio</h3>

            <span>Live</span>

          </div>

          <h2>$482,450.28</h2>

          <p className="growth">
            +18.45% this month
          </p>

          <div className="coin-list">

            <div className="coin">
              <span>BTC</span>
              <strong>$189,300</strong>
            </div>

            <div className="coin">
              <span>ETH</span>
              <strong>$127,400</strong>
            </div>

            <div className="coin">
              <span>SOL</span>
              <strong>$62,800</strong>
            </div>

            <div className="coin">
              <span>USDT</span>
              <strong>$103,000</strong>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;