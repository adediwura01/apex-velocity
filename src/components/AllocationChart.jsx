import Chart from "react-apexcharts";
import { allocationData } from "../data/allocationData";

function AllocationChart() {
  const options = {
    chart: {
      background: "transparent",
    },

    labels: allocationData.map((item) => item.asset),

    legend: {
      show: false,
    },

    dataLabels: {
      enabled: false,
    },

    stroke: {
      width: 0,
    },

    colors: allocationData.map((item) => item.color),

    plotOptions: {
      pie: {
        donut: {
          size: "78%",

          labels: {
            show: true,

            name: {
              show: true,
              color: "#94A3B8",
              offsetY: 18,
            },

            value: {
              show: true,
              color: "#FFFFFF",
              fontSize: "28px",
              fontWeight: 700,
              offsetY: -12,

              formatter: (val) => `${val}%`,
            },

            total: {
              show: true,
              label: "Total Assets",

              formatter: () => "$4.82M",
            },
          },
        },
      },
    },

    tooltip: {
      theme: "dark",

      y: {
        formatter: (val) => `${val}%`,
      },
    },
  };

  const series = allocationData.map((item) => item.value);

  return (
    <div className="chart">

      <div className="allocation-header">

        <div>

          <span className="chart-tag">
            Allocation
          </span>

          <h3>
            Asset Allocation
          </h3>

          <p>
            Diversified across four major assets
          </p>

        </div>

      </div>

      <Chart
        options={options}
        series={series}
        type="donut"
        height={320}
      />

      <div className="allocation-list">

        {allocationData.map((asset) => (

          <div
            className="allocation-item"
            key={asset.asset}
          >

            <div className="allocation-left">

              <span
                className="color-dot"
                style={{
                  background: asset.color,
                }}
              ></span>

              <span>
                {asset.asset}
              </span>

            </div>

            <div className="allocation-right">

              <strong>
                {asset.value}%
              </strong>

              <span>
                {asset.amount}
              </span>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}

export default AllocationChart;