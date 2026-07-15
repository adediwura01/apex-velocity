import Chart from "react-apexcharts";

function ForecastChart() {
  const options = {
    chart: {
      sparkline: {
        enabled: true,
      },

      toolbar: {
        show: false,
      },

      background: "transparent",
    },

    stroke: {
      curve: "smooth",
      width: 3,
    },

    colors: ["#A855F7"],

    fill: {
      type: "gradient",

      gradient: {
        shade: "dark",
        opacityFrom: .35,
        opacityTo: 0,
      },
    },

    tooltip: {
      enabled: false,
    },

    grid: {
      show: false,
    },

    xaxis: {
      labels: {
        show: false,
      },

      axisTicks: {
        show: false,
      },

      axisBorder: {
        show: false,
      },
    },

    yaxis: {
      show: false,
    },

    dataLabels: {
      enabled: false,
    },
  };

  const series = [
    {
      data: [42, 45, 44, 48, 52, 50, 55, 58],
    },
  ];

  return (
    <Chart
      options={options}
      series={series}
      type="area"
      height={70}
    />
  );
}

export default ForecastChart;