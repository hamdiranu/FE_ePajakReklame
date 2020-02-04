import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../store";
import { FaEye, FaEyeSlash } from "react-icons/fa";

class LoginOfficer extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div
          className="col-sm-12"
          style={{
            display: "grid",
            textAlign: "left",
            marginLeft: "20px",
            marginBottom: "10px"
          }}
        >
          <span style={{ marginLeft: "5px" }}>NIP :</span>
          <input
            type="text"
            id="nip"
            className="col-md-12 col-sm-12 fadeIn second"
            name="nip"
            placeholder="Input NIP"
            pattern="[0-9A-Z]{1,}"
            onInvalid={e => this.props.validasiFormLogin(e)}
            onChange={e => this.props.handleInput(e)}
          />
        </div>
        <div
          className="col-sm-12"
          style={{
            display: "grid",
            textAlign: "left",
            marginLeft: "20px",
            marginBottom: "10px"
          }}
        >
          <span style={{ marginLeft: "5px" }}>PIN :</span>
          <div className="loginInputPassword">
            <input
              type={this.props.statusInputPassword}
              id="pin"
              className="col-md-11 col-sm-10 fadeIn second"
              name="pin"
              placeholder="Input PIN"
              pattern="[0-9]{8}"
              onInvalid={e => this.props.validasiFormLogin(e)}
              onChange={e => this.props.handleInput(e)}
            />
            {this.props.statusShowPassword ? (
              <FaEye onClick={e => this.props.showPassword(e)} />
            ) : (
              <FaEyeSlash onClick={e => this.props.showPassword(e)} />
            )}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default connect(
  "statusInputPassword, statusShowPassword, token",
  actions
)(withRouter(LoginOfficer));
