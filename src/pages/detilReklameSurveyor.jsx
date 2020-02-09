import React, { Component } from "react";
import "../styles/styleNavigasiSurveyor.css";
import "../styles/styleDetilReklameSurveyor.css";
import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../store";
import NavigasiDetilReklameSurveyor from "../components/navigasiSurveyor";
import KontenDetilReklameSurveyor from "../components/kontenDetilReklameSurveyor";

class PetaSurveyor extends Component {
  render() {
    return (
      <React.Fragment>
        <NavigasiDetilReklameSurveyor />
        <KontenDetilReklameSurveyor />
      </React.Fragment>
    );
  }
}

export default connect("", actions)(withRouter(PetaSurveyor));
