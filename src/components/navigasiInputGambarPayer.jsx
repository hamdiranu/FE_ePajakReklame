import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { actions, store } from "../store";
import { FaPlusCircle, FaSignOutAlt } from "react-icons/fa";

// Kelas untuk Komponen Navigasi pada Page Input Gambar Payer
class NavigasiPayer extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      file: null
    }
    this.handleChange = this.handleChange.bind(this)
  };
  handleChange(event) {
    this.setState({
      file: URL.createObjectURL(event.target.files[0])
    });
    store.setState({blobGambar: URL.createObjectURL(event.target.files[0]),
      objekGambar:event.target.files[0]});
    localStorage.setItem(`fotoReklamePayer`, `${URL.createObjectURL(event.target.files[0])}`);
  };
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
          <span className="navbar-brand" style={{ display: "flex" }}>
            <div className="borderLogoTambahLaporan">
              <FaPlusCircle/>
              <input type="file"
                className="upload-gambar custom-file-input"
                id="fileItem"
                onChange={this.handleChange}
                style={{width:"45px", height:"45px", zIndex:"10"}}>
              </input>
            </div>
          </span>
          <div>
            <span className="judulHeaderPayer">Unggah Foto Reklame</span>
          </div>
          <div class="text-right">
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
  "statusPageHomeSurveyor, blobGambar, objekGambar",
  actions
)(withRouter(NavigasiPayer));
