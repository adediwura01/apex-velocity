import Chart from "react-apexcharts";
import { portfolioData } from "../data/portfolioData";

function PreviewChart() {

    const options = {

        chart:{
            sparkline:{
                enabled:true,
            },

            toolbar:{
                show:false,
            },

            background:"transparent",
        },

        stroke:{
            curve:"smooth",
            width:4,
        },

        colors:["#A855F7"],

        fill:{
            type:"gradient",

            gradient:{
                shade:"dark",
                opacityFrom:.35,
                opacityTo:0,
            },
        },

        tooltip:{
            enabled:false,
        },

        dataLabels:{
            enabled:false,
        },

    };

    const series=[
        {
            data:portfolioData.map(item=>item.value),
        },
    ];

    return(

        <Chart
            options={options}
            series={series}
            type="area"
            height={220}
        />

    );
}

export default PreviewChart;