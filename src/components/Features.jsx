import "../css/Features.css";

import FeatureCard from "./FeatureCard";
import { featuresData } from "../data/featuresData";

function Features() {
  return (
    <section className="features">

      <div className="features-header">

        <span className="section-tag">
          PLATFORM FEATURES
        </span>

        <h2>
          Why Investors Choose NeoVault
        </h2>

        <p>
          Powerful infrastructure engineered for secure,
          intelligent and effortless digital asset management.
        </p>

      </div>

      <div className="features-grid">

        {featuresData.map((feature) => (
          <FeatureCard
            key={feature.id}
            feature={feature}
          />
        ))}

      </div>

    </section>
  );
}

export default Features;