import React, { Component } from "react";
import "../styles/styleNavigasiSurveyor.css";
import "../styles/stylePetaSurveyor.css";
import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../store";
import NavigasiSurveyor from "../components/navigasiSurveyor";
import KontenPetaSurveyor from "../components/kontenPetaSurveyor";

class PetaSurveyor extends Component {
  componentDidMount = async () => {
    if (localStorage.getItem("token") === null || localStorage.getItem("role") !== "surveyor"){
      await this.props.history.push("/login")
    }
  };
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
