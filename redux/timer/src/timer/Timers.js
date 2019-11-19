import React from "react";
import { Button, Glyphicon } from "react-bootstrap";
import Timer from "./Timer";

export default class Timers extends React.Component {
  state = { timers: [] };

  agregar = () => {
    this.setState(state => ({ timers: state.timers.concat({ id: 1 }) }));
  };
  render() {
    return (
      <>
        {this.state.timers.map(t => (
          <Timer />
        ))}
        <Button onClick={this.agregar}>
          <Glyphicon glyph="plus" />
        </Button>
      </>
    );
  }
}
