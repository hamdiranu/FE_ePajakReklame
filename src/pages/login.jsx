import React, { Component } from "react";
import "../styles/styleLogin.css";
import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../store";
import FormLoginPayer from "../components/loginPayer";
import FormLoginOfficer from "../components/loginOfficer";
import { Form } from "react-bootstrap";

class Login extends Component {
  render() {
    return (
      <div className="loginWrapper fadeInDown">
        <div id="loginFormContent">
          <div className="fadeIn first">
            <div className="container-fuild loginJudul">
              <span>Masuk ke ePajak</span>
            </div>
            <img
              className="loginLogo"
              src="https://image.flaticon.com/icons/png/128/2168/2168759.png"
              id="icon"
              alt="User Icon"
            />
          </div>
          <div style={{ display: "flex", marginBottom: "10px" }}>
            <span className="loginPilihRole">Masuk Sebagai : </span>
            <Form.Control
              onChange={e => this.props.handleGantiRole(e)}
              name="role"
              className="pilihRole"
              as="select"
            >
              <option value="Payer">Wajib Pajak</option>
              <option calue="officer">Petugas Pajak</option>
            </Form.Control>
          </div>
          {/* <!-- Login Form --> */}
          {this.props.formOfficer ? <FormLoginOfficer /> : <FormLoginPayer />}
        </div>
      </div>
    );
  }
}

export default connect("formOfficer", actions)(withRouter(Login));
