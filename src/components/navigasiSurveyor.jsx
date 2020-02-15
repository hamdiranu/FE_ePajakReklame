import React from "react";
import { withRouter, Link } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../store";
import { FaMapMarkedAlt, FaQrcode, FaSignOutAlt } from "react-icons/fa";

// Kelas untuk Komponen Navigasi Surveyor
class NavigasiSurveyor extends React.Component {
  logOutOfficer = async () => {
    this.props.handleLogOut();
    this.props.history.replace("/login");
  };

  render() {
    return (
      <React.Fragment>
        <nav
          className="navbar navbar-shadow"
          style={{
            position: "fixed",
            zIndex: "4",
            width: "100%",
            backgroundColor: "#1a3454"
          }}
        >
          <span class="navbar-brand" style={{ display: "flex" }}>
            <div className="tombolMapsLokasi" style={{ margin: "auto" }}>
              {this.props.statusPageHomeSurveyor ? (
                <Link to="/surveyor/peta" style={{ textDecoration: "none" }}>
                  <FaMapMarkedAlt size={25} color="white" />
                </Link>
              ) : (
                <Link to="/surveyor/home" style={{ textDecoration: "none" }}>
                  <FaQrcode size={25} color="white" />
                </Link>
              )}
            </div>
          </span>
          <div>
            <b className="judulHeaderSurveyor" style={{ color: "#F47523" }}>
              SIP-Rek!
            </b>
          </div>
          <div class="text-right tombolSignOut">
            <span>
              <Link onClick={() => this.logOutOfficer()} className="">
                <FaSignOutAlt size={25} color="white" />
              </Link>
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
