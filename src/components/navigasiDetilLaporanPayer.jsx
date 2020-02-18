import React from "react";
import { withRouter, Link } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../store";
import { FaHome, FaSignOutAlt } from "react-icons/fa";

class NavigasiDetilLaporanPayer extends React.Component {
  /**
   * Mengganti halaman menuju halaman login
   */
  logOutPayer = async () => {
    this.props.handleLogOut();
    this.props.history.replace("/login");
  };

  /**
   * Mengganti halaman menuju halaman beranda wajib pajak
   */
  goHomePayer = async () => {
    this.props.history.replace("/payer/home");
  };

  render() {
    return (
      <React.Fragment>
        <nav
          className="navbar navbarPayer navbar-shadow"
          style={{ position: "fixed", zIndex: "4", width: "100%" }}
        >
          <span class="navbar-brand" style={{ display: "flex" }}>
            <div className="">
              <Link to="/payer/home" style={{ textDecoration: "none" }}>
                <FaHome className="" size={30} style={{ color: "white" }} />
              </Link>
            </div>
          </span>
          <div>
            <b style={{ color: "#F47523", fontSize: "28px" }}>
              Informasi Pajak
            </b>
          </div>
          <div class="text-right">
            <span
              onClick={() => this.logOutPayer()}
              className="btn"
              style={{ color: "white", padding: "0px" }}
            >
              <FaSignOutAlt size={30} />
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
