import Chart from "react-apexcharts";
import { portfolioData } from "../data/portfolioData";

function PortfolioChart() {
  const options = {
    chart: {
      toolbar: {
        show: false,
      },

      zoom: {
        enabled: false,
      },

      background: "transparent",

      animations: {
        enabled: true,
        easing: "easeinout",
        speed: 1400,

        animateGradually: {
          enabled: true,
          delay: 120,
        },
      },
    },

    stroke: {
      curve: "smooth",
      width: 5,
      lineCap: "round",
    },

    markers: {
      size: 0,

      hover: {
        size: 7,
      },
    },

    colors: ["#A855F7"],

    grid: {
      borderColor: "rgba(255,255,255,.04)",
      strokeDashArray: 4,

      padding: {
        left: 10,
        right: 20,
        top: 10,
        bottom: 0,
      },
    },

    xaxis: {
      categories: portfolioData.map((item) => item.month),

      labels: {
        style: {
          colors: "#94A3B8",
        },
      },

      axisBorder: {
        show: false,
      },

      axisTicks: {
        show: false,
      },
    },

    yaxis: {
      labels: {
        show: false,

        formatter: (value) => {
          if (value >= 1000000) {
            return `$${(value / 1000000).toFixed(2)}M`;
          }

          if (value >= 1000) {
            return `$${(value / 1000).toFixed(0)}K`;
          }

          return `$${value}`;
        },
      },
    },

    tooltip: {
      theme: "dark",

      y: {
        formatter: (value) => {
          if (value >= 1000000) {
            return `$${(value / 1000000).toFixed(2)}M`;
          }

          return `$${value}`;
        },
      },
    },

    dataLabels: {
      enabled: false,
    },

    legend: {
      show: false,
    },

    fill: {
      type: "gradient",

      gradient: {
        shade: "dark",
        type: "vertical",
        shadeIntensity: 1,
        opacityFrom: 0.45,
        opacityTo: 0.02,
      },
    },
  };

  const series = [
    {
      name: "Portfolio",
      data: portfolioData.map((item) => item.value),
    },
  ];

  return (
    <div className="chart large">

      <div className="chart-header">

        <div>

          <span className="chart-tag">
            Portfolio
          </span>

          <h3>
            Portfolio Growth
          </h3>

          <p>
            +18.2% compared to last year
          </p>

        </div>

        <button className="chart-button">

          <span className="live-dot"></span>

          LIVE

        </button>

      </div>

      <Chart
        options={options}
        series={series}
        type="area"
        height={390}
      />

    </div>
  );
}

export default PortfolioChart;