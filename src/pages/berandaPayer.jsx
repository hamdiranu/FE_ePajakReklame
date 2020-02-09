import React, { Component } from "react";
import "../styles/styleBerandaPayer.css";
import "../styles/styleNavigasiPayer.css";
import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../store";
import NavigasiPayer from "../components/navigasiPayer";
import KontenBerandaPayer from "../components/kontenBerandaPayer";

class BerandaPayer extends Component {
  render() {
    return (
      <React.Fragment>
        <NavigasiPayer />
        <KontenBerandaPayer />
      </React.Fragment>
    );
  }
}

export default connect("", actions)(withRouter(BerandaPayer));
