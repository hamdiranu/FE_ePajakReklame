import React, { Component } from "react";
import "../styles/styleNavigasiSurveyor.css";
import "../styles/stylePetaSurveyor.css";
import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../store";
import NavigasiSurveyor from "../components/navigasiSurveyor";
import KontenPetaSurveyor from "../components/kontenPetaSurveyor";

class PetaSurveyor extends Component {
  render() {
    return (
      <React.Fragment>
        <NavigasiSurveyor />
        <KontenPetaSurveyor />
      </React.Fragment>
    );
  }
}

export default connect("", actions)(withRouter(PetaSurveyor));
