import React from "react";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../store";
import { Navbar, Button, ButtonGroup } from "react-bootstrap";

class NavigasiOfficer extends React.Component {
  render() {
    return (
      <Navbar
        fixed="top"
        className="navbar_react"
        collapseOnSelect
        expand="lg"
        bg="light"
        variant="light"
      >
        <Navbar.Brand>
          <img onClick={"#"} className="logoNavigasi" src={logo} alt="" />
        </Navbar.Brand>
        <Navbar.Brand className="infoKota">
          <div>
            <h6>E-Pajak</h6>
          </div>
          <div>
            <h6>Kota Malang</h6>
          </div>
        </Navbar.Brand>
        <Navbar.Brand>
          <div className="col-sm-12" style={{ textAlign: "center" }}>
            <h3 className="sambutanHeader">Halo (Nama Officer) !</h3>
          </div>
        </Navbar.Brand>
        <ButtonGroup aria-label="Third group">
          <Button className="tombolKeluar" variant="outline-secondary">
            <Link className="textTombol" onClick={() => this.logOut()}>
              Keluar
            </Link>
          </Button>
        </ButtonGroup>
      </Navbar>
    );
  }
}

export default connect("", actions)(withRouter(NavigasiOfficer));
