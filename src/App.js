import React, { Component } from "react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
  Container,
  Button
} from "reactstrap";
import "./App.css";

class App extends Component {
  state = {
    pollution: 0
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
    this.setState({ pollution: this.state.pollution * 5 });
  };

  render() {
    return (
      <div>
        <Container>
          <h1>Pollute More</h1>
          <h1>Total CO2 Bitch: {this.state.pollution}</h1>
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
      </div>
    );
  }
}

export default App;
