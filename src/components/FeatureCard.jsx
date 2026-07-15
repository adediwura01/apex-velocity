import { ArrowRight } from "lucide-react";
import ForecastChart from "./ForecastChart";

function FeatureCard({ feature }) {
  const Icon = feature.icon;

  return (

    
    <div
    className={`feature-card ${
        feature.featured ? "featured" : ""
    }`}>

      <div
        className="feature-icon"
        style={{ color: feature.color }}
      >
        <Icon size={34} />
      </div>

      <span className="feature-tag">
        {feature.tag}
      </span>

      <h3>
        {feature.title}
      </h3>

      <p>
        {feature.description}
      </p>
       {feature.featured && (
          <>
          <div className="ai-widget">

        <div className="ai-score">
          <div>
            <span>AI Confidence</span>
            <h4>97%</h4>
          </div>

          <div className="confidence-dot"></div>

        </div>

        <div className="confidence-bar">
          <div className="confidence-fill"></div>
        </div>

        <div className="ai-stats">
          <div className="ai-stat">
            <span>Risk Level</span>
            <strong>Low</strong>
          </div>

          <div className="ai-stat">
            <span>Expected Growth</span>
            <strong>+18.4%</strong>
          </div>

        </div>

        <div className="ai-footer">
          <span className="live-dot"></span>
          Updated just now
        </div>

        
        
      </div>
 
      <div className="forecast-section">
        <span>
          Forecast
        </span>

        <ForecastChart />
        
        <p>Projected Monthly Growth</p>
        <strong>
          +12.6%
        </strong>
      </div>
          </>
      
      )}
      

      <button className="feature-link">
        Learn More
        <ArrowRight size={16} />
      </button>

    </div>
  );
}

export default FeatureCard;