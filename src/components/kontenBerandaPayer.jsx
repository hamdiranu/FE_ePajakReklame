import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../store";

class KontenBerandaPayer extends React.Component {
  render() {
    return <div className="kontenBerandaSurveyor"></div>;
  }
}

export default connect("", actions)(withRouter(KontenBerandaPayer));
