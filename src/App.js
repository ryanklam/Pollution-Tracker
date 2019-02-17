import React, { Component } from "react";
import {
  InputGroup,
  InputGroupText,
  Alert,
  FormControl,
  Container,
  Button
} from "react-bootstrap";
import "./App.css";

class App extends Component {
  state = {
    show: false,
    electricity: 0,
    miles: 0,
    water: 0,
    mpg: 0,
    total: 0
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: parseInt(event.target.value)
    });
  };

  handleClick = () => {
    this.setState({
      total:
        this.state.electricity * 0.0004554 +
        this.state.miles * (1 / this.state.mpg) * 0.00907185 * 4 +
        this.state.water * 0.005875 * 0.0004554,
      show: !this.state.show
    });
  };

  render() {
    const handleHide = () => this.setState({ show: false });
    const handleShow = () => this.setState({ show: !this.state.show });
    return (
      <Container>
        <h1>How Much Do You Pollute?</h1>
        <h2>
          What is your average electricity usage per month in kilowatt-hours?
        </h2>
        <InputGroup>
          <FormControl
            placeholder="enter..."
            name="electricity"
            onChange={this.handleChange}
            maxLength={20}
          />
          <InputGroup.Append>
            <InputGroup.Text id="basic-addon1">kWh ⚡</InputGroup.Text>
          </InputGroup.Append>
        </InputGroup>
        <br />
        <h2>How many gallons of water do you use per month on average?</h2>
        <InputGroup>
          <FormControl
            placeholder="enter..."
            name="water"
            onChange={this.handleChange}
            maxLength={20}
          />
          <InputGroup.Append>
            <InputGroup.Text id="basic-addon1">Gallons 💦</InputGroup.Text>
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
            <InputGroup.Text id="basic-addon1">Miles 🚘</InputGroup.Text>
          </InputGroup.Append>
        </InputGroup>
        <br />
        <h2>What is the miles per gallon rating of your car?</h2>
        <InputGroup>
          <FormControl
            placeholder="enter..."
            name="mpg"
            onChange={this.handleChange}
            maxLength={20}
          />
          <InputGroup.Append>
            <InputGroup.Text id="basic-addon1">
              Miles Per Gallon ⛽
            </InputGroup.Text>
          </InputGroup.Append>
        </InputGroup>
        <br />
        <p>
          <Button variant="success" onClick={this.handleClick}>
            Calculate
          </Button>{" "}
        </p>

        <Alert show={this.state.show} variant="light">
          <p>
            <h2>
              You produced {this.state.total.toFixed(2)} metric tons of CO2 per
              month
            </h2>
            <h2>
              or {(this.state.total * 12).toFixed(2)} metric tons per year.
            </h2>
            <h2>
              That's the equivalent of{" "}
              {((this.state.total * 12) / 6.1).toFixed(2)} elephants!
            </h2>
            <h3>🐘🐘🐘</h3>
          </p>
          <hr />
          <div className="d-flex justify-content-center">
            <Button onClick={handleShow} variant="outline-dark">
              Close
            </Button>
          </div>
        </Alert>
      </Container>
    );
  }
}

export default App;
