import React from "react";
import { withRouter, Link } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../store";
import { FiFilePlus } from "react-icons/fi";

class NavigasiPayer extends React.Component {
  logOutPayer = async () => {
    this.props.handleLogOut();
    this.props.history.replace("/login");
  };

  render() {
    return (
      <React.Fragment>
        <nav
          className="navbar navbar-light bg-light navbarPayer "
          style={{ position: "fixed", zIndex: "4", width: "100%" }}
        >
          <span class="navbar-brand" style={{ display: "flex" }}>
            <div className="borderLogoTambahLaporan">
              <Link to="/surveyor/peta" style={{ textDecoration: "none" }}>
                <FiFilePlus className="logoTambahLaporan" />
              </Link>
            </div>
          </span>
          <div>
            <span className="judulHeaderPayer">ePajak</span>
          </div>
          <div class="text-right">
            <span
              onClick={() => this.logOutPayer()}
              class="btn btn-xs btn-outline-secondary tombolKeluarPayer"
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
)(withRouter(NavigasiPayer));
