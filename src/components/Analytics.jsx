import "../css/Analytics.css";

import PortfolioChart from "./portfolioChart";
import AllocationChart from "./AllocationChart";
import VolumeChart from "./VolumeChart";


function Analytics() {
  return (
    <section className="analytics">

      <div className="analytics-header">

        <span className="section-tag">
          LIVE MARKET INTELLIGENCE
        </span>

        <h2>
          Real-Time Portfolio Analytics
        </h2>

        <p>
          Gain institutional-grade visibility into digital asset performance,
          portfolio allocation, and liquidity through real-time analytics.
        </p>

      </div>

      <div className="analytics-kpis">

        <div className="kpi-card">
          <h3>$4.82M</h3>
          <span>Total Assets</span>
        </div>

        <div className="kpi-card">
          <h3>+18.2%</h3>
          <span>Monthly Growth</span>
        </div>

        <div className="kpi-card">
          <h3>42</h3>
          <span>Supported Chains</span>
        </div>

        <div className="kpi-card">
          <h3>99.98%</h3>
          <span>Platform Uptime</span>
        </div>

      </div>

      <div className="analytics-grid">
        <PortfolioChart />
        <AllocationChart />
        <VolumeChart />
      </div>

    </section>
  );
}

export default Analytics;