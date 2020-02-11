import React, { Component } from "react";
import "../styles/styleDetilObjekPayer.css";
import "../styles/styleNavigasiDetilObjekPayer.css";
import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../store";
import NavigasiDetilObjekPayer from "../components/navigasiDetilObjekPayer";
import KontenDetilObjekPayer from "../components/kontenDetilObjekPayer";

class DetilObjekPayer extends Component {
  render() {
    return (
      <React.Fragment>
        <NavigasiDetilObjekPayer />
        <KontenDetilObjekPayer />
      </React.Fragment>
    );
  }
}

export default connect("", actions)(withRouter(DetilObjekPayer));
