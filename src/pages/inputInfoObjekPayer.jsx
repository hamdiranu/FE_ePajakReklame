import React, { Component } from "react";
import "../styles/styleInfoObjekPayer.css";
import "../styles/styleNavigasiInfoObjekPayer.css";
import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../store";
import NavigasiInfoObjekPayer from "../components/navigasiInfoObjekPayer";
import KontenInfoObjekPayer from "../components/kontenInfoObjekPayer";

class InformasiObjekPayer extends Component {
  render() {
    return (
      <React.Fragment>
        <NavigasiInfoObjekPayer />
        <KontenInfoObjekPayer />
      </React.Fragment>
    );
  }
}

export default connect("", actions)(withRouter(InformasiObjekPayer));
