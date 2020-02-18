import React, { Component } from "react";
import "../styles/styleBerandaSurveyor.css";
import "../styles/styleNavigasiSurveyor.css";
import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../store";
import NavigasiSurveyor from "../components/navigasiSurveyor";
import KontenBerandaSurveyor from "../components/kontenBerandaSurveyor";

class BerandaSurveyor extends Component {
  componentDidMount = async () => {
    if (
      localStorage.getItem("token") === null ||
      localStorage.getItem("role") !== "surveyor"
    ) {
      await this.props.history.push("/login");
    }
  };

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
