import React, { Component } from "react";
import "../styles/styleLogin.css";
import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../store";
import FormLoginPayer from "../components/loginPayer";
import FormLoginOfficer from "../components/loginOfficer";
import { Form } from "react-bootstrap";
import axios from "axios";
import swal from "sweetalert";

class Login extends Component {
  loginUser = async () => {
    console.log("cek form", this.props.formOfficer);
    if (this.props.formOfficer === false) {
      const self = this;
      const req = {
        method: "post",
        url: "https://alterratax.my.id/login/",
        headers: {
          "Content-Type": "application/json"
        },
        data: {
          npwpd: this.props.npwpd,
          pin: this.props.pin
        }
      };
      axios(req)
        .then(function(response) {
          if (response.data.hasOwnProperty("token")) {
            localStorage.setItem("token", response.data.token);
            self.props.history.push("/home/payer");
            swal("Selamat!", "Login Sukses", "success");
          }
        })
        .catch(function(error) {
          // swal("Maaf!", "NPWPD / PIN Tidak Ditemukan", "error");
        });
    } else {
      const self = this;
      const req = {
        method: "post",
        url: "https://alterratax.my.id/login/",
        headers: {
          "Content-Type": "application/json"
        },
        data: {
          nip: this.props.nip,
          pin: this.props.pin
        }
      };
      axios(req)
        .then(function(response) {
          if (response.data.hasOwnProperty("token")) {
            localStorage.setItem("token", response.data.token);
            swal("Selamat!", "Login Sukses", "success");
          }
          console.log("cek local", localStorage.getItem("token"));
          self.props.history.push("/home/officer");
        })
        .catch(function(error) {
          // swal("Maaf!", "NIP / PIN Tidak Ditemukan", "error");
        });
    }
  };
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
              name="roleFormLogin"
              className="pilihRole"
              as="select"
            >
              <option value="Payer">Wajib Pajak</option>
              <option calue="officer">Petugas Pajak</option>
            </Form.Control>
          </div>
          {/* <!-- Login Form --> */}
          <form onSubmit={e => e.preventDefault(e)}>
            {this.props.formOfficer ? <FormLoginOfficer /> : <FormLoginPayer />}
            <input
              type="submit"
              className="fadeIn fourth"
              value="Log In"
              style={{ marginBottom: "15px", marginTop: "10px" }}
              onClick={e => this.loginUser(e)}
            />
          </form>
        </div>
      </div>
    );
  }
}

export default connect(
  "formOfficer, npwpd, nip, pin, role, token, formOfficer",
  actions
)(withRouter(Login));
