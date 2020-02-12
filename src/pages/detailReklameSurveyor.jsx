import React, { Component } from "react";
import "../styles/styleNavigasiSurveyor.css";
import "../styles/styleDetailReklameSurveyor.css";
import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../store";
import NavigasiDetailReklameSurveyor from "../components/navigasiSurveyor";
import KontenDetailReklameSurveyor from "../components/kontenDetailReklameSurveyor";

class DetailReklameSurveyor extends Component {
  render() {
    return (
      <React.Fragment>
        <NavigasiDetailReklameSurveyor />
        <KontenDetailReklameSurveyor />
      </React.Fragment>
    );
  }
}

export default connect("", actions)(withRouter(DetailReklameSurveyor));
