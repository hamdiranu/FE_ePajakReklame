import React from "react";
import { withRouter, Link } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../store";
import { FaMapMarkedAlt, FaQrcode } from "react-icons/fa";

class NavigasiSurveyor extends React.Component {
  logOutOfficer = async () => {
    this.props.handleLogOut();
    this.props.history.replace("/login");
  };

  render() {
    return (
      <React.Fragment>
        <nav
          className="navbar navbar-light bg-light "
          style={{ position: "fixed", zIndex: "4", width: "100%" }}
        >
          <span class="navbar-brand" style={{ display: "flex" }}>
            <div style={{ margin: "auto" }}>
              {this.props.statusPageHomeSurveyor ? (
                <Link to="/officer/home" style={{ textDecoration: "none" }}>
                  <FaMapMarkedAlt className="logoPeta" />
                </Link>
              ) : (
                <Link to="/officer/home" style={{ textDecoration: "none" }}>
                  <FaQrcode className="logoScanQR" />
                </Link>
              )}
            </div>
          </span>
          <div>
            <span className="judulHeaderSurveyor">ePajak</span>
          </div>
          <div class="text-right">
            <span
              onClick={() => this.logOutOfficer()}
              class="btn btn-xs btn-outline-secondary tombolKeluar"
            >
              Log Out
            </span>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}

export default connect(
  "statusPageHomeSurveyor",
  actions
)(withRouter(NavigasiSurveyor));
