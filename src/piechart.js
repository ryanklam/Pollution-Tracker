import React, {Component} from 'react';
import Chartjs from 'chart.js'
var LineChart = require("react-chartjs").Line;

class PieChart extends Component {
    constructor() {
        super();
    }

    render() {
       var chartOptions: {

    showScale: true,
    pointDot: true,
    showLines: false,
    title: {
        display: true,
        text: 'Chart.js Line Chart'
    },
    legend: {
        display: true,
        labels: {
           boxWidth: 50,
           fontSize: 10,
           fontColor: '#bbb',
           padding: 5,

        }
    }
    }

    var chartData= {
        labels: ['1', '2', '3', '4'],
        datasets: [
            {
                label: 'Current lag',
                fill: false,
                lineTension: 0.1,
                backgroundColor: "rgba(75,192,192,0.4)",
                borderColor: "rgba(75,192,192,1)",
                borderCapStyle: 'butt',
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                data: [50, 35, 60, 67]
            }
        ]
    }


        return (
            <div className="">
                <LineChart data={chartData} options={chartOptions} width="600" height="250"/>
            </div>
        );
    }
}
export default PieChart;
