import Chart from "react-apexcharts";
import { TrendingUp, TrendingDown } from "lucide-react";
import { volumeData } from "../data/volumeData";

function VolumeChart() {

  //Calculated Values

  const today = volumeData[volumeData.length - 1];
  const yesterday = volumeData[volumeData.length - 2];

  const weeklyAverage =
    volumeData.reduce((sum, item) => sum + item.volume, 0) /
    volumeData.length;

  const highestDay = volumeData.reduce((max, item) =>
    item.volume > max.volume ? item : max
  );

  const percentageChange =
    ((today.volume - yesterday.volume) / yesterday.volume) * 100;

  const isPositive = percentageChange >= 0;

  const highestVolume = Math.max(
    ...volumeData.map(item => item.volume)
  );

  //Chart

  const options = {
    chart: {
      toolbar: {
        show: false,
      },

      background: "transparent",
    },

    dataLabels: {
      enabled: false,
    },

    legend: {
      show: false,
    },

    grid: {
      borderColor: "rgba(255,255,255,.04)",
      strokeDashArray: 4,
    },

    plotOptions: {
      bar: {
        borderRadius:10,
        borderRadiusApplication:"end",
        columnWidth: "52%",
        distributed: true,
      },
    },

    colors: ["#8205ff"],

states:{
    hover:{
        filter:{
            type:"lighten",
            value:.15,
        },
    },

    active:{
        filter:{
            type:"none",
        },
    },
},

fill: {
  type: "gradient",

  gradient: {
    shade: "dark",
    type: "vertical",
    gradientToColors: ["#7E22CE"],
    opacityFrom: 1,
    opacityTo: .5,
    stops: [0,100],
  },
},

    xaxis: {
      categories: volumeData.map(item => item.day),

      axisBorder: {
        show: false,
      },

      axisTicks: {
        show: false,
      },

      labels: {
        style: {
          colors: "#94A3B8",
        },
      },
    },

    yaxis: {
      show: false,
    },

    tooltip: {
  custom: ({ series, seriesIndex, dataPointIndex, w }) => {

    const day = w.globals.labels[dataPointIndex];

    const value = series[seriesIndex][dataPointIndex];

    const formatted =
      value >= 1000
        ? `$${+(value / 1000).toFixed(2)}B`
        : `$${value}M`;

    return `
      <div class="custom-tooltip">

        <div class="tooltip-day">
          ${day}
        </div>

        <div class="tooltip-label">
          Volume Traded
        </div>

        <div class="tooltip-value">
          ${formatted}
        </div>

      </div>
    `;
  },
},
  };

  const series = [
    {
      name: "Volume",
      data: volumeData.map(item=>({
       x:item.day,
       y:item.volume,
       fillColor:
        item.volume===highestVolume
        ? "#8204ff"
        : "#7E22CE",

}))
    },
  ];

  return (
    <div className="chart">

      <div className="chart-header">

        <div>

          <span className="chart-tag">
            Market
          </span>

          <h3>
            Daily Trading Volume
          </h3>

          <p>
            Activity over the last 7 days
          </p>

        </div>

        <button className="chart-button">
          7D
        </button>

      </div>

      <Chart
        options={options}
        series={series}
        type="bar"
        height={220}
      />

      <div className="volume-summary">

        <div className="summary-item">

          <span>
            Today's Volume
          </span>

          <strong>
            {today.volume >= 1000
              ? `$${+(today.volume / 1000).toFixed(2)}B`
              : `$${today.volume}M`}
          </strong>

          <div
            className={`trend-badge ${
              isPositive ? "positive" : "negative"
            }`}
          >

            {isPositive ? (
              <TrendingUp size={14} />
            ) : (
              <TrendingDown size={14} />
            )}

            {Math.abs(percentageChange).toFixed(1)}%

          </div>

        </div>

        <div className="summary-item">

          <span>
            Peak Session
          </span>

          <strong>
            {highestDay.day}
          </strong>

          <small>
            {highestDay.volume >= 1000
              ? `$${+(highestDay.volume / 1000).toFixed(2)}B`
              : `$${highestDay.volume}M`}
          </small>

        </div>

        <div className="summary-item">

          <span>
            Weekly Average
          </span>

          <strong>
            {weeklyAverage >= 1000
              ? `$${+(weeklyAverage / 1000).toFixed(2)}B`
              : `$${Math.round(weeklyAverage)}M`}
          </strong>

        </div>

      </div>

    </div>
  );
}

export default VolumeChart;