import React, {Component} from 'react'; 
import {Bar, Line, Doughnut} from 'react-chartjs-2'; 

class Chart extends Component{
    constructor(props){
        super(props); 
        this.state ={
            chartData:props.chartData
        }
    }

    static defaultProps = {
        displayTitle: true,
        displayLegend: true,
        legendPosition: 'right'
    }

    render(){
        return (
            <div className="chart">
            <Bar
                data={this.state.chartData}
                options={{
                    title:{
                        display: this.props.displayTitle,
                        text: 'Household Carbon Emitters',
                        fontSize: 25
                    },
                    legend:{
                        display: false,
                        position: this.props.legendPosition
                    },
                    scales:{
                        yAxes: [{
                            scaleLabel:{
                                display: true,
                                labelString: 'Tons of Carbon',
                                fontSize: 20
                            }
                        }],
                        xAxes:[{
                            scaleLabel:{
                                display: true,
                                labelString: 'Appliance',
                                fontSize: 20
                            }
                        }]
                    }
            }}
            />
            <Doughnut
                data={this.state.chartData}
                options={{
                    title:{
                        display: this.props.displayTitle,
                        text: 'Household Carbon Emitters',
                        fontSize: 25
                    },
                    legend:{
                        display: this.props.displayLegend,
                        position: this.props.legendPosition,
                        labels:{
                            fontSize: 15
                        }
                    }
            }}
            />
            </div>
        ) 
    }
}

export default Chart; 