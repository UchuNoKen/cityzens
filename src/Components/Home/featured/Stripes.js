import React, { Component } from "react";
import { easePolyOut } from "d3-ease";
import Animate from "react-move/Animate";

class Stripes extends Component {
  state = {
    stripes: [
      { background: "#98c5e9", left: 120, rotate: 25, top: -260, delay: 0 },
      { background: "#ffffff", left: 360, rotate: 25, top: -2, delay: 200 },
      { background: "#98c5e9", left: 600, rotate: 25, top: -498, delay: 400 }
    ]
  };

  showStripes = () => {
    return this.state.stripes.map((stripe, i) => (
      <Animate
        key={i}
        show={true}
        start={{
          background: "#ffffff"
        }}
        enter={{
          background: [stripe.background],
          timing: { delay: 500, duration: 200, ease: easePolyOut }
        }}
      >
        {({ background }) => {
          return <div className="stripe" style={{ background }} />;
        }}
      </Animate>
    ));
  };

  render() {
    return <div className="featured_stripes">{this.showStripes()}</div>;
  }
}

export default Stripes;
