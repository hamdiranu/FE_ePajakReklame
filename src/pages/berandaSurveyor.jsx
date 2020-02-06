import React, { Component } from "react";
import "../styles/styleBerandaOfficer.css";
import "../styles/styleNavigasiOfficer.css";
import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../store";
import NavigasiSurveyor from "../components/navigasiSurveyor";
import KontenBerandaOfficer from "../components/kontenBerandaOfficer";

class BerandaSurveyor extends Component {
  render() {
    return (
      <React.Fragment>
        <NavigasiSurveyor />
        <KontenBerandaOfficer />
      </React.Fragment>
    );
  }
}

export default connect("", actions)(withRouter(BerandaSurveyor));
