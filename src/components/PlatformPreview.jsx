import "../css/PlatformPreview.css";
import DashboardMockup from "./DashboardMockup";

function PlatformPreview() {
  return (
    <section className="platform-preview" id="platform-preview">

      <div className="platform-header">

        <span className="section-tag">
          EXPERIENCE NEOVAULT
        </span>

        <h2>
          Everything You Need.
          <br />
          One Elegant Workspace.
        </h2>

        <p>
          Monitor your portfolio, track performance, and manage digital assets
          from a beautifully designed interface built for modern investors.
        </p>

      </div>

      <DashboardMockup />

    </section>
  );
}

export default PlatformPreview;