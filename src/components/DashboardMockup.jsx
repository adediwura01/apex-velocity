import PreviewChart from "./PreviewChart";
import { dashboardAssets } from "../data/dashboardAssets";

function DashboardMockup() {
  return (
    <div className="dashboard-mockup">

      <div className="dashboard-top">

        <div>
          <span className="dashboard-label">
            Portfolio Overview
          </span>

          <h3>$4.82M</h3>
        </div>

        <button className="dashboard-button">
          Live
        </button>

      </div>

      <div className="dashboard-chart">
        <PreviewChart/>
      </div>

      <div className="dashboard-assets">

  {dashboardAssets.map((asset) => {

    const Icon = asset.icon;

    return (

      <div
        className="asset-item"
        key={asset.name}
      >

        <div className="asset-info">

          <div
            className="asset-icon"
            style={{
              color: asset.color,
            }}
          >
            <Icon size={22} />
          </div>

          <div>

            <h4>{asset.name}</h4>

            <span className="asset-subtitle">
              {asset.subtitle}
            </span>

          </div>

        </div>

        <div className="asset-pill">
          {asset.allocation}
        </div>

      </div>

    );

  })}

</div>

    </div>
  );
}

export default DashboardMockup;