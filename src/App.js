import React, { Component } from "react";
import {
  InputGroup,
  InputGroupText,
  FormControl,
  Container,
  Button
} from "react-bootstrap";
import "./App.css";

class App extends Component {
  state = {
    electricity: 0,
    miles: 0,
    mpg: 0,
    total: 0
  };

  handleChange = event => {
    this.setState({
      [event.target.name]:
        event.target.name === "pollution"
          ? parseInt(event.target.value)
          : event.target.value
    });
  };

  handleClick = () => {
    this.setState({
      total:
        this.state.electricity * 0.0004554 +
        this.state.miles * (1 / this.state.mpg) * 0.00907185
    });
  };

  render() {
    return (
      <Container>
        <h1>Pollution</h1>
        <h2>What is your average electricity usage per month in kWh?</h2>
        <InputGroup>
          <FormControl
            placeholder="enter..."
            name="electricity"
            onChange={this.handleChange}
            maxLength={20}
          />
          <InputGroup.Append>
            <InputGroup.Text id="basic-addon1">kWh</InputGroup.Text>
          </InputGroup.Append>
        </InputGroup>
        <br />
        <h2>How many miles on average do you drive per week?</h2>
        <InputGroup>
          <FormControl
            placeholder="enter..."
            name="miles"
            onChange={this.handleChange}
            maxLength={20}
          />
          <InputGroup.Append>
            <InputGroup.Text id="basic-addon1">Miles</InputGroup.Text>
          </InputGroup.Append>
        </InputGroup>
        <br />
        <h2>What is the MPG rating of your car?</h2>
        <InputGroup>
          <FormControl
            placeholder="enter..."
            name="mpg"
            onChange={this.handleChange}
            maxLength={20}
          />
          <InputGroup.Append>
            <InputGroup.Text id="basic-addon1">
              Miles Per Gallon
            </InputGroup.Text>
          </InputGroup.Append>
        </InputGroup>
        <br />
        <p>
          <Button variant="success" onClick={this.handleClick}>
            Calculate
          </Button>{" "}
        </p>
        <h1>You produced {this.state.total} metric tons of CO2 per month</h1>
        <h1>or {this.state.total * 12} metric tons per year</h1>
        <h1>
          That's the equivalent of {(this.state.total * 12) / 6.1} elephants!
        </h1>
        <h3>🐘🐘🐘</h3>
      </Container>
    );
  }
}

export default App;
