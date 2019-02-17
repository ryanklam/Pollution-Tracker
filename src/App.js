import React, { Component } from "react";
import {
  InputGroup,
  InputGroupAddon,
  Input,
  Container,
  Button
} from "reactstrap";
import "./App.css";
import Chart from './components/Chart'; 

class App extends Component {
  constructor(){
    super(); 
    this.state = {
    }
  }

  handleChange = event => {
    this.setState({
      [event.target.name]:
        event.target.name === "pollution"
          ? parseInt(event.target.value)
          : event.target.value
    });
  };

  handleClick = () => {
    this.setState({ pollution: this.state.pollution});
  
  };

  getChartData(){
    this.setState({
      chartData: {
        labels: ['Car', 'Shower', 'Food', 'Heating'],
        datasets:[{
            data: [
                120,
                456,
                18
                ,213
            ],
            backgroundColor:[
                'rgba(255, 99, 132, 0.6)',
                'rgba(54, 162, 235, 0.6)',
                'rgba(255, 206, 86, 0.6)',
                'rgba(75, 192, 192, 0.6)'
            ]
        }]
    }
    })
  }

  componentWillMount(){
    this.getChartData(); 
  }

  render() {
    return (
      <div>
        <Container>
          <h1>Pollute More</h1>
          <h1>Total CO2 Bitch: {this.state.pollution*6}</h1>
          <h2>How long did you shower today?</h2>
          <InputGroup>
            <Input
              placeholder="enter..."
              name="pollution"
              onChange={this.handleChange}
              maxLength={20}
            />
            <InputGroupAddon addonType="append">Hours</InputGroupAddon>
          </InputGroup>
          <Button color="success" onClick={this.handleClick}>
            Calculate
          </Button>{" "}
        </Container>
              <Chart chartData={this.state.chartData}/>

              </div>
            );
          }
}

export default App;
