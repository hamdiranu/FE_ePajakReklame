import React, { Component } from "react";
import "../styles/styleDetailObjekPayer.css";
import "../styles/styleNavigasiDetailObjekPayer.css";
import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../store";
import NavigasiDetailObjekPayer from "../components/navigasiDetailObjekPayer";
import KontenDetailObjekPayer from "../components/kontenDetailObjekPayer";

class DetailObjekPayer extends Component {
  componentDidMount = async () => {
    if (localStorage.getItem("token") === null || localStorage.getItem("role") !== "payer"){
      await this.props.history.push("/login")
    }
  };
  render() {
    return (
      <React.Fragment>
        <NavigasiDetailObjekPayer />
        <KontenDetailObjekPayer />
      </React.Fragment>
    );
  }
}

export default connect("", actions)(withRouter(DetailObjekPayer));
