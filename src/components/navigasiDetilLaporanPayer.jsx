import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../store";
import { FaHome, FaSignOutAlt } from "react-icons/fa";

class NavigasiDetilLaporanPayer extends React.Component {
  logOutPayer = async () => {
    this.props.handleLogOut();
    this.props.history.replace("/login");
  };

  goHomePayer = async () => {
    this.props.history.replace("/payer/home");
  };

  render() {
    return (
      <React.Fragment>
        <nav
          className="navbar navbar-light bg-light navbarPayer "
          style={{ position: "fixed", zIndex: "4", width: "100%" }}
        >
          <div className="col-md-3 col-sm-3 kotakTombolHome">
            <span
              onClick={() => this.goHomePayer()}
              class="btn btn-xs btn-outline-secondary tombolKeHomePayer"
            >
              <FaHome />
            </span>
          </div>

          <div className="col-md-6 col-sm-11 judulHeaderObjekPajakPayer">
            <span>Informasi Pajak</span>
          </div>
          <div class="col-md-3 col-sm-1 text-right kotakTombolLogOut">
            <span
              onClick={() => this.logOutPayer()}
              class="btn btn-xs btn-outline-secondary tombolKeluarPayer"
            >
              <FaSignOutAlt />
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
)(withRouter(NavigasiDetilLaporanPayer));
