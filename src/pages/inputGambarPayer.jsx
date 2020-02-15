import React, { Component } from "react";
import "../styles/styleInputGambarPayer.css";
import "../styles/styleNavigasiInputPayer.css";
import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../store";
import NavigasiInputGambarPayer from "../components/navigasiInputGambarPayer";
import KontenInputGambarPayer from "../components/kontenInputGambarPayer";

class InputGambarPayer extends Component {
  render() {
    return (
      <React.Fragment>
        <NavigasiInputGambarPayer/>
        <KontenInputGambarPayer />
      </React.Fragment>
    );
  }
}

export default connect("", actions)(withRouter(InputGambarPayer));
