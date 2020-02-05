import React, { Component } from "react";
import "../styles/styleBerandaSurveyor.css";
import "../styles/styleNavigasiSurveyor.css";
import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../store";
import NavigasiSurveyor from "../components/navigasiSurveyor";
import KontenBerandaSurveyor from "../components/kontenBerandaSurveyor";

class BerandaSurveyor extends Component {
  render() {
    return (
      <React.Fragment>
        <NavigasiSurveyor />
        <KontenBerandaSurveyor />
      </React.Fragment>
    );
  }
}

export default connect("", actions)(withRouter(BerandaSurveyor));
