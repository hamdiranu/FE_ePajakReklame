import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../store";
import { FaEye, FaEyeSlash } from "react-icons/fa";

class LoginOfficer extends React.Component {
  render() {
    return (
      <form onSubmit={e => e.preventDefault(e)}>
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
            id="npwp"
            className="col-md-12 col-sm-12 fadeIn second"
            name="npwp"
            placeholder="Input NIP"
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
              onChange={e => this.props.handleInput(e)}
            />
            {this.props.statusShowPassword ? (
              <FaEye onClick={e => this.props.showPassword(e)} />
            ) : (
              <FaEyeSlash onClick={e => this.props.showPassword(e)} />
            )}
          </div>
        </div>

        <input
          type="submit"
          className="fadeIn fourth"
          value="Log In"
          style={{ marginBottom: "15px", marginTop: "10px" }}
          //   onClick={this.handleLogin}
        />
      </form>
    );
  }
}

export default connect(
  "statusInputPassword, statusShowPassword",
  actions
)(withRouter(LoginOfficer));
