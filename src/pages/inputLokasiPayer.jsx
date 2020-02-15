import React, { Component } from "react";
import "../styles/styleLokasiPayer.css";
import "../styles/styleNavigasiLokasiPayer.css";
import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../store";
import NavigasiLokasiPayer from "../components/navigasiLokasiPayer";
import KontenLokasiPayer from "../components/kontenLokasiPayer";

class LokasiPayer extends Component {
  componentDidMount = async () => {
    if (localStorage.getItem("token") === null || localStorage.getItem("role") !== "payer"){
      await this.props.history.push("/login")
    }
  };
  render() {
    return (
      <React.Fragment>
        <NavigasiLokasiPayer />
        <KontenLokasiPayer />
      </React.Fragment>
    );
  }
}

export default connect("", actions)(withRouter(LokasiPayer));
