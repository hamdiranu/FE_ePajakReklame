import React, { Component } from "react";
import "../styles/styleNotaPajakPayer.css";
import "../styles/styleNavigasiNotaPajakPayer.css";
import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../store";
import NavigasiNotaPayer from "../components/navigasiNotaPayer";
import KontenNotaPayer from "../components/kontenNotaPayer";

class NotaPajakPayer extends Component {
  render() {
    return (
      <React.Fragment>
        <NavigasiNotaPayer />
        <KontenNotaPayer />
      </React.Fragment>
    );
  }
}

export default connect("", actions)(withRouter(NotaPajakPayer));
